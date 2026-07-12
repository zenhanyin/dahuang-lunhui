import { readFileSync } from "node:fs";

const gameHtml = readFileSync(new URL("../text-adventure.html", import.meta.url), "utf8");

function htmlResponse(body, status = 200) {
  return new Response(body, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=60"
    }
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return Response.redirect(`${url.origin}/text-adventure.html`, 302);
    }

    if (url.pathname === "/text-adventure.html") {
      return htmlResponse(gameHtml);
    }

    return htmlResponse("Not found", 404);
  }
};
