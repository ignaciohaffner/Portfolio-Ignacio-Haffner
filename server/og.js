const SITE_NAME = "Ignacio Haffner";

export function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function text(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function clip(value, max) {
  return value.length > max ? `${value.slice(0, max - 1).trimEnd()}…` : value;
}

function absolute(u, siteUrl) {
  if (/^https?:\/\//i.test(u)) return u;
  return `${siteUrl}/${String(u).replace(/^\//, "")}`;
}

/**
 * Build the <head> markup for a blog post's social preview.
 * @param {object} post  parsed post: { slug, title:{es,en}, excerpt:{es,en}, coverImage, tags:[], publishedAt }
 * @param {object} opts  { siteUrl, ogLang, twitterHandle, defaultImage }
 */
export function buildPostHead(post, opts) {
  const { siteUrl, ogLang = "es", twitterHandle = "", defaultImage } = opts;
  const lang = post.title?.[ogLang] ? ogLang : post.title?.es ? "es" : "en";

  const title = text(post.title?.[lang]);
  const pageTitle = `${title} — ${SITE_NAME}`;
  const description = clip(text(post.excerpt?.[lang]), 150);
  const image = post.coverImage
    ? absolute(post.coverImage, siteUrl)
    : defaultImage;
  const url = `${siteUrl}/blog/${post.slug}`;

  return [
    `<title>${esc(pageTitle)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="article" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    post.publishedAt
      ? `<meta property="article:published_time" content="${esc(post.publishedAt)}" />`
      : "",
    ...(post.tags || []).map(
      (t) => `<meta property="article:tag" content="${esc(t)}" />`,
    ),
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
    twitterHandle
      ? `<meta name="twitter:site" content="${esc(twitterHandle)}" />\n    <meta name="twitter:creator" content="${esc(twitterHandle)}" />`
      : "",
  ]
    .filter(Boolean)
    .join("\n    ");
}

/** Strip the template's own title / description / og / twitter tags, then inject fresh ones. */
export function injectHead(html, headMarkup) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(
      /<meta[^>]+(?:property="og:[^"]*"|name="twitter:[^"]*"|name="description")[^>]*>\s*/gi,
      "",
    )
    .replace("</head>", `  ${headMarkup}\n  </head>`);
}

/** Parse a Firestore REST document (`documents:runQuery` result item) into a plain post. */
export function parseFirestorePost(doc, fallbackSlug) {
  const f = doc?.fields || {};
  const loc = (m) => ({
    es: m?.mapValue?.fields?.es?.stringValue ?? "",
    en: m?.mapValue?.fields?.en?.stringValue ?? "",
  });
  return {
    slug: f.slug?.stringValue || fallbackSlug,
    title: loc(f.title),
    excerpt: loc(f.excerpt),
    coverImage: f.coverImage?.stringValue || "",
    tags: (f.tags?.arrayValue?.values || [])
      .map((v) => v.stringValue)
      .filter(Boolean),
    published: f.published?.booleanValue ?? false,
    publishedAt: f.publishedAt?.timestampValue || null,
  };
}
