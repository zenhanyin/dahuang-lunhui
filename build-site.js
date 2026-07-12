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

function contentType(pathname) {
  if (pathname.endsWith(".webp")) return "image/webp";
  if (pathname.endsWith(".png")) return "image/png";
  return "application/octet-stream";
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/api/track") {
      if (request.method !== "POST") {
        return new Response(JSON.stringify({ ok: false, error: "method_not_allowed" }), {
          status: 405,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "no-store"
          }
        });
      }
      return new Response(JSON.stringify({ ok: true }), {
        headers: {
          "content-type": "application/json; charset=utf-8",
          "cache-control": "no-store"
        }
      });
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
