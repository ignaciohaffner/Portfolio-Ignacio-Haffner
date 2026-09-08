import { test } from "node:test";
import assert from "node:assert/strict";
import { buildPostHead, injectHead, parseFirestorePost } from "./og.js";

const SAMPLE = {
  slug: "hola-mundo",
  title: { es: "Hola, mundo", en: "Hello, world" },
  excerpt: { es: "El primer post del blog.", en: "The first post." },
  coverImage: "",
  tags: ["meta", "typescript"],
  published: true,
  publishedAt: "2026-09-08T00:00:00Z",
};

const OPTS = {
  siteUrl: "https://ignaciohaffner.com",
  ogLang: "es",
  twitterHandle: "@ignaciohaffner",
  defaultImage: "https://ignaciohaffner.com/og.png",
};

test("buildPostHead uses the ogLang locale", () => {
  const head = buildPostHead(SAMPLE, OPTS);
  assert.match(head, /<meta property="og:title" content="Hola, mundo — Ignacio Haffner" \/>/);
  assert.match(head, /<meta property="og:description" content="El primer post del blog\." \/>/);
  assert.match(head, /<meta property="og:url" content="https:\/\/ignaciohaffner\.com\/blog\/hola-mundo" \/>/);
});

test("buildPostHead falls back to the default image and emits twitter tags", () => {
  const head = buildPostHead(SAMPLE, OPTS);
  assert.match(head, /og:image" content="https:\/\/ignaciohaffner\.com\/og\.png"/);
  assert.match(head, /twitter:card" content="summary_large_image"/);
  assert.match(head, /twitter:creator" content="@ignaciohaffner"/);
  assert.match(head, /article:published_time" content="2026-09-08T00:00:00Z"/);
});

test("buildPostHead makes a relative coverImage absolute", () => {
  const head = buildPostHead({ ...SAMPLE, coverImage: "/uploads/x.png" }, OPTS);
  assert.match(head, /og:image" content="https:\/\/ignaciohaffner\.com\/uploads\/x\.png"/);
});

test("buildPostHead escapes HTML in post fields", () => {
  const head = buildPostHead(
    { ...SAMPLE, title: { es: 'A <b>"x"</b> & B', en: "" } },
    OPTS,
  );
  assert.match(head, /og:title" content="A &lt;b&gt;&quot;x&quot;&lt;\/b&gt; &amp; B — Ignacio Haffner"/);
  assert.doesNotMatch(head, /<b>/);
});

test("injectHead strips the template's title/og/twitter and inserts fresh", () => {
  const template = `<!doctype html><html><head>
    <title>~/portfolio — Ignacio Haffner</title>
    <meta name="description" content="old" />
    <meta property="og:title" content="old" />
    <meta name="twitter:card" content="summary_large_image" />
  </head><body></body></html>`;
  const out = injectHead(template, buildPostHead(SAMPLE, OPTS));
  assert.equal(out.match(/<title>/g).length, 1);
  assert.equal(out.match(/og:title/g).length, 1);
  assert.match(out, /<title>Hola, mundo — Ignacio Haffner<\/title>/);
  assert.match(out, /<\/head>/);
});

test("parseFirestorePost reads the typed-value shape", () => {
  const doc = {
    fields: {
      slug: { stringValue: "abc" },
      title: { mapValue: { fields: { es: { stringValue: "T" }, en: { stringValue: "T-en" } } } },
      excerpt: { mapValue: { fields: { es: { stringValue: "E" } } } },
      tags: { arrayValue: { values: [{ stringValue: "a" }, { stringValue: "b" }] } },
      published: { booleanValue: true },
      publishedAt: { timestampValue: "2026-01-01T00:00:00Z" },
      coverImage: { stringValue: "https://img/x.png" },
    },
  };
  const post = parseFirestorePost(doc, "fallback");
  assert.deepEqual(post, {
    slug: "abc",
    title: { es: "T", en: "T-en" },
    excerpt: { es: "E", en: "" },
    coverImage: "https://img/x.png",
    tags: ["a", "b"],
    published: true,
    publishedAt: "2026-01-01T00:00:00Z",
  });
});

test("parseFirestorePost defaults published to false when missing", () => {
  const post = parseFirestorePost({ fields: { slug: { stringValue: "x" } } }, "x");
  assert.equal(post.published, false);
});
