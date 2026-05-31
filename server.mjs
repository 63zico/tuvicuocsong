import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 5173);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

function send(response, status, body, type = "text/plain; charset=utf-8") {
  response.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store",
  });
  response.end(body);
}

function safePath(pathname) {
  const cleaned = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, "");
  return join(root, cleaned === "/" || cleaned === "." ? "index.html" : cleaned);
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host || "127.0.0.1"}`);
    const filePath = safePath(url.pathname);
    const ext = extname(filePath).toLowerCase();
    const file = await readFile(filePath);
    send(response, 200, file, contentTypes[ext] || "application/octet-stream");
  } catch {
    try {
      const file = await readFile(join(root, "index.html"));
      send(response, 200, file, "text/html; charset=utf-8");
    } catch {
      send(response, 404, "Not found");
    }
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`tuvi.life app running at http://127.0.0.1:${port}`);
});
