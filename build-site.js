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

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
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
const imageAssets = ${JSON.stringify(imageAssets)};

function contentType(pathname) {
  if (pathname.endsWith(".webp")) return "image/webp";
  if (pathname.endsWith(".png")) return "image/png";
  return "application/octet-stream";
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname in imageAssets) {
      const bytes = Uint8Array.from(atob(imageAssets[url.pathname]), char => char.charCodeAt(0));
      return new Response(bytes, {
        headers: {
          "content-type": contentType(url.pathname),
          "cache-control": "public, max-age=31536000, immutable"
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
