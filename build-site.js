import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const assetDir = path.join(root, "assets");
const distAssetDir = path.join(dist, "assets");
const hostingSource = path.join(root, ".openai", "hosting.json");
const hostingDest = path.join(dist, ".openai", "hosting.json");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, "server"), { recursive: true });
fs.mkdirSync(distAssetDir, { recursive: true });
fs.mkdirSync(path.dirname(hostingDest), { recursive: true });

const sourceHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const storyConfig = fs.readFileSync(path.join(root, "story-config.js"), "utf8");
const storyJson = storyConfig
  .replace(/^\s*window\.DAHUANG_STORY_CONFIG\s*=\s*/, "")
  .replace(/;\s*$/, "");
JSON.parse(storyJson);
const packedStory = Buffer.from(storyJson, "utf8").toString("base64");
const storyLoader = `<script>(()=>{const b="${packedStory}";const raw=atob(b);const bytes=Uint8Array.from(raw,c=>c.charCodeAt(0));window.DAHUANG_STORY_CONFIG=JSON.parse(new TextDecoder().decode(bytes));})();</script>`;
const html = sourceHtml.replace('<script src="story-config.js"></script>', storyLoader);
fs.writeFileSync(path.join(dist, "index.html"), html, "utf8");
fs.writeFileSync(path.join(dist, "text-adventure.html"), html, "utf8");
fs.copyFileSync(hostingSource, hostingDest);

const imageAssets = {};
for (const file of fs.readdirSync(assetDir).filter(file => /\.(webp|png)$/i.test(file))) {
  const source = path.join(assetDir, file);
  fs.copyFileSync(source, path.join(distAssetDir, file));
  imageAssets[`/assets/${file}`] = fs.readFileSync(source).toString("base64");
}

const worker = `const gameHtml = ${JSON.stringify(html)};
const textAssets = {};
const imageAssets = ${JSON.stringify(imageAssets)};
const statsKey = "dh-7m4q-20260713";

function contentType(pathname) {
  if (pathname.endsWith(".webp")) return "image/webp";
  if (pathname.endsWith(".png")) return "image/png";
  return "application/octet-stream";
}

function jsonResponse(data, init = {}) {
  return new Response(JSON.stringify(data), {
    status: init.status || 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...(init.headers || {})
    }
  });
}

function textValue(value, max = 240) {
  if (value === undefined || value === null) return "";
  return String(value).slice(0, max);
}

function intValue(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.trunc(number) : 0;
}

async function ensureAnalytics(db) {
  if (!db) return false;
  await db.batch([
    db.prepare("CREATE TABLE IF NOT EXISTS analytics_events (id INTEGER PRIMARY KEY AUTOINCREMENT, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, event TEXT NOT NULL, session_id TEXT, player_id TEXT, scene TEXT, life INTEGER, realm TEXT, path TEXT, virtue INTEGER, karma INTEGER, fragments INTEGER, turn INTEGER, choice_text TEXT, choice_to TEXT, ending_scene TEXT, title TEXT)"),
    db.prepare("CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events (created_at)"),
    db.prepare("CREATE INDEX IF NOT EXISTS idx_analytics_events_event ON analytics_events (event)"),
    db.prepare("CREATE INDEX IF NOT EXISTS idx_analytics_events_scene ON analytics_events (scene)"),
    db.prepare("CREATE INDEX IF NOT EXISTS idx_analytics_events_choice_text ON analytics_events (choice_text)")
  ]);
  return true;
}

async function recordAnalytics(request, env) {
  if (request.method !== "POST") {
    return jsonResponse({ ok: false, error: "method_not_allowed" }, { status: 405 });
  }
  let payload = {};
  try {
    payload = await request.json();
  } catch (error) {
    return jsonResponse({ ok: false, error: "bad_json" }, { status: 400 });
  }
  const db = env && env.DB;
  if (!db) return jsonResponse({ ok: true, stored: false });
  await ensureAnalytics(db);
  const detail = payload.detail && typeof payload.detail === "object" ? payload.detail : {};
  await db.prepare("INSERT INTO analytics_events (event, session_id, player_id, scene, life, realm, path, virtue, karma, fragments, turn, choice_text, choice_to, ending_scene, title) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")
    .bind(
      textValue(payload.event, 40),
      textValue(payload.session, 80),
      textValue(payload.player, 80),
      textValue(payload.scene, 80),
      intValue(payload.life),
      textValue(payload.realm, 40),
      textValue(payload.path, 80),
      intValue(payload.virtue),
      intValue(payload.karma),
      intValue(payload.fragments),
      intValue(payload.turn),
      textValue(detail.text, 240),
      textValue(detail.to, 80),
      textValue(detail.endingScene, 80),
      textValue(detail.title || detail.currentTitle, 160)
    )
    .run();
  return jsonResponse({ ok: true, stored: true });
}

async function all(db, sql, ...params) {
  const stmt = db.prepare(sql);
  const result = params.length ? await stmt.bind(...params).all() : await stmt.all();
  return result.results || [];
}

async function first(db, sql, ...params) {
  const stmt = db.prepare(sql);
  const result = params.length ? await stmt.bind(...params).first() : await stmt.first();
  return result || {};
}

async function analyticsSummary(env) {
  const db = env && env.DB;
  if (!db) return { ready: false, message: "D1 database is not bound yet." };
  await ensureAnalytics(db);
  const totals = await first(db, "SELECT COUNT(*) AS events, COUNT(DISTINCT session_id) AS sessions, COUNT(DISTINCT player_id) AS players, SUM(CASE WHEN event = 'visit' THEN 1 ELSE 0 END) AS visits, SUM(CASE WHEN event = 'choice' THEN 1 ELSE 0 END) AS choices, SUM(CASE WHEN event = 'ending' THEN 1 ELSE 0 END) AS endings FROM analytics_events");
  const byDay = await all(db, "SELECT substr(created_at, 1, 10) AS day, COUNT(*) AS events, COUNT(DISTINCT session_id) AS sessions FROM analytics_events GROUP BY day ORDER BY day DESC LIMIT 14");
  const topChoices = await all(db, "SELECT choice_text AS label, choice_to AS target, COUNT(*) AS count FROM analytics_events WHERE event = 'choice' AND choice_text <> '' GROUP BY choice_text, choice_to ORDER BY count DESC LIMIT 20");
  const sceneTrend = await all(db, "SELECT scene AS label, COUNT(*) AS count FROM analytics_events WHERE scene <> '' GROUP BY scene ORDER BY count DESC LIMIT 20");
  const pathTrend = await all(db, "SELECT path AS label, COUNT(*) AS count FROM analytics_events WHERE path <> '' GROUP BY path ORDER BY count DESC LIMIT 12");
  const endings = await all(db, "SELECT COALESCE(title, ending_scene, scene) AS label, COUNT(*) AS count FROM analytics_events WHERE event = 'ending' GROUP BY label ORDER BY count DESC LIMIT 12");
  return { ready: true, generatedAt: new Date().toISOString(), totals, byDay, topChoices, sceneTrend, pathTrend, endings };
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function tableHtml(rows, columns) {
  if (!rows || !rows.length) return "<p class='empty'>暂无数据</p>";
  return "<table><thead><tr>" + columns.map(col => "<th>" + escapeHtml(col.title) + "</th>").join("") + "</tr></thead><tbody>" +
    rows.map(row => "<tr>" + columns.map(col => "<td>" + escapeHtml(row[col.key] ?? "") + "</td>").join("") + "</tr>").join("") +
    "</tbody></table>";
}

async function statsPage(env) {
  const summary = await analyticsSummary(env);
  const totals = summary.totals || {};
  const html = "<!doctype html><html lang='zh-CN'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>大荒统计</title><style>body{margin:0;background:#111510;color:#f4efdf;font-family:Microsoft YaHei,system-ui,sans-serif;padding:28px}main{max-width:1100px;margin:auto}h1{margin:0 0 8px}h2{margin-top:28px;color:#d8b35f}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}.card{border:1px solid rgba(244,239,223,.16);background:#20251d;padding:14px}.num{font-size:28px;font-weight:800}table{width:100%;border-collapse:collapse;background:#1a1f18}th,td{border:1px solid rgba(244,239,223,.14);padding:9px;text-align:left;vertical-align:top}th{color:#d8b35f}.empty{color:#b9b39f}.muted{color:#b9b39f}</style></head><body><main><h1>大荒轮回录统计</h1><p class='muted'>更新时间：" + escapeHtml(summary.generatedAt || "") + "</p>" +
    "<section class='grid'><div class='card'><div class='num'>" + escapeHtml(totals.visits || 0) + "</div><div>访问/进入</div></div><div class='card'><div class='num'>" + escapeHtml(totals.sessions || 0) + "</div><div>会话数</div></div><div class='card'><div class='num'>" + escapeHtml(totals.players || 0) + "</div><div>匿名玩家</div></div><div class='card'><div class='num'>" + escapeHtml(totals.choices || 0) + "</div><div>选择点击</div></div><div class='card'><div class='num'>" + escapeHtml(totals.endings || 0) + "</div><div>结局触发</div></div></section>" +
    "<h2>每日活跃</h2>" + tableHtml(summary.byDay, [{key:"day",title:"日期"},{key:"sessions",title:"会话"},{key:"events",title:"事件"}]) +
    "<h2>剧情选择倾向</h2>" + tableHtml(summary.topChoices, [{key:"label",title:"选项"},{key:"target",title:"去向"},{key:"count",title:"次数"}]) +
    "<h2>场景热度</h2>" + tableHtml(summary.sceneTrend, [{key:"label",title:"场景"},{key:"count",title:"次数"}]) +
    "<h2>流派倾向</h2>" + tableHtml(summary.pathTrend, [{key:"label",title:"流派"},{key:"count",title:"次数"}]) +
    "<h2>结局分布</h2>" + tableHtml(summary.endings, [{key:"label",title:"结局"},{key:"count",title:"次数"}]) +
    "</main></body></html>";
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
}

function targetLanguage(lang) {
  if (lang === "en") return "en";
  if (lang === "ja") return "ja";
  if (lang === "ko") return "ko";
  return "";
}

async function translateText(request) {
  if (request.method !== "POST") {
    return jsonResponse({ ok: false, error: "method_not_allowed" }, { status: 405 });
  }
  let payload = {};
  try {
    payload = await request.json();
  } catch (error) {
    return jsonResponse({ ok: false, error: "bad_json" }, { status: 400 });
  }
  const target = targetLanguage(payload.lang);
  const sourceText = textValue(payload.text, 4800);
  if (!target || !sourceText) return jsonResponse({ ok: false, error: "bad_request" }, { status: 400 });

  const googleUrl = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-CN&tl=" +
    encodeURIComponent(target) + "&dt=t&q=" + encodeURIComponent(sourceText);
  try {
    const response = await fetch(googleUrl, {
      headers: {
        "accept": "application/json,text/plain,*/*",
        "user-agent": "Mozilla/5.0"
      }
    });
    if (response.ok) {
      const data = await response.json();
      const translated = Array.isArray(data && data[0])
        ? data[0].map(part => Array.isArray(part) ? part[0] : "").join("")
        : "";
      if (translated) return jsonResponse({ ok: true, provider: "google", text: translated });
    }
  } catch (error) {}

  const myMemoryUrl = "https://api.mymemory.translated.net/get?q=" +
    encodeURIComponent(sourceText) + "&langpair=" + encodeURIComponent("zh-CN|" + target);
  try {
    const response = await fetch(myMemoryUrl, {
      headers: {
        "accept": "application/json",
        "user-agent": "Mozilla/5.0"
      }
    });
    if (response.ok) {
      const data = await response.json();
      const translated = data && data.responseData && data.responseData.translatedText;
      if (translated) return jsonResponse({ ok: true, provider: "mymemory", text: translated });
    }
  } catch (error) {}

  return jsonResponse({ ok: false, error: "translate_failed" }, { status: 502 });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/track") {
      return recordAnalytics(request, env);
    }

    if (url.pathname === "/api/translate") {
      return translateText(request);
    }

    if ((url.pathname === "/stats" || url.pathname === "/api/stats") && url.searchParams.get("key") !== statsKey) {
      return jsonResponse({ ok: false, error: "forbidden" }, { status: 403 });
    }

    if (url.pathname === "/api/stats") {
      return jsonResponse(await analyticsSummary(env));
    }

    if (url.pathname === "/stats") {
      return statsPage(env);
    }

    if (url.pathname in imageAssets) {
      const bytes = Uint8Array.from(atob(imageAssets[url.pathname]), char => char.charCodeAt(0));
      return new Response(bytes, {
        headers: {
          "content-type": contentType(url.pathname),
          "cache-control": "public, max-age=31536000, immutable"
        }
      });
    }

    if (url.pathname in textAssets) {
      return new Response(textAssets[url.pathname], {
        headers: {
          "content-type": "application/javascript; charset=utf-8",
          "cache-control": "no-cache"
        }
      });
    }

    return new Response(gameHtml, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-cache"
      }
    });
  }
};
`;

fs.writeFileSync(path.join(dist, "server", "index.js"), worker, "utf8");
console.log(`Built Dahuang site with ${Object.keys(imageAssets).length} image assets.`);
