import express from "express";
import compression from "compression";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { buildPostHead, injectHead, parseFirestorePost } from "./og.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, "..", "dist");
const INDEX_HTML = readFileSync(path.join(DIST, "index.html"), "utf8");

const PORT = Number(process.env.PORT) || 3000;
const SITE_URL = (process.env.SITE_URL || "https://ignaciohaffner.com").replace(/\/$/, "");
const FIREBASE_PROJECT = process.env.FIREBASE_PROJECT || "portfolio-ignaciohaffner";
const OG_LANG = process.env.OG_LANG === "en" ? "en" : "es";
const TWITTER_HANDLE = process.env.TWITTER_HANDLE || "";
const DEFAULT_IMAGE = `${SITE_URL}/og.jpg`;

const app = express();
app.disable("x-powered-by");
app.use(compression());

// Static assets — hashed filenames, cache hard. index.html handled below.
app.use(
  express.static(DIST, {
    index: false,
    maxAge: "1y",
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
      }
    },
  }),
);

app.get("/blog/:slug", async (req, res) => {
  let post = null;
  try {
    post = await fetchPublishedPost(req.params.slug);
  } catch (err) {
    console.error("[ssr] firestore fetch failed:", err.message);
  }

  if (!post) {
    // Unknown / unpublished slug — let the SPA render its own 404.
    return sendHtml(res, INDEX_HTML);
  }

  const head = buildPostHead(post, {
    siteUrl: SITE_URL,
    ogLang: OG_LANG,
    twitterHandle: TWITTER_HANDLE,
    defaultImage: DEFAULT_IMAGE,
  });
  sendHtml(res, injectHead(INDEX_HTML, head));
});

// SPA fallback for every other route.
app.get("*", (_req, res) => sendHtml(res, INDEX_HTML));

app.listen(PORT, () => {
  console.log(`[ssr] portfolio on :${PORT} (site ${SITE_URL}, og lang ${OG_LANG})`);
});

/* ------------------------------------------------------------------ helpers */

function sendHtml(res, html) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
  res.send(html);
}

async function fetchPublishedPost(slug) {
  const endpoint = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT}/databases/(default)/documents:runQuery`;
  const resp = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      structuredQuery: {
        from: [{ collectionId: "posts" }],
        where: {
          fieldFilter: {
            field: { fieldPath: "slug" },
            op: "EQUAL",
            value: { stringValue: slug },
          },
        },
        limit: 1,
      },
    }),
    signal: AbortSignal.timeout(4000),
  });
  if (!resp.ok) throw new Error(`firestore ${resp.status}`);
  const rows = await resp.json();
  const doc = rows.find((row) => row.document)?.document;
  if (!doc) return null;
  const post = parseFirestorePost(doc, slug);
  return post.published ? post : null;
}
