# Personal Portfolio

React + Vite + TypeScript, Tailwind, terminal-themed.

Runs as a single Docker container: a tiny Node server (`server/`) serves the built
SPA and injects per-post Open Graph / Twitter tags on `/blog/:slug`. Traefik handles
TLS. See `Dockerfile`, `docker-compose.yml`.

## Blog

Posts live in the Firestore `posts` collection (project `portfolio-ignaciohaffner`).

- **Write / edit posts:** go to `/blog/admin` and sign in with Google.
- Posts are bilingual (ES/EN); the body is Markdown.
- Public routes: `/blog` (list) and `/blog/:slug` (post). Deep links / refresh work —
  the Node server does the SPA fallback.

### Admin access

`/blog/admin` is gated by `VITE_ADMIN_UIDS` (comma-separated Firebase Auth UIDs). Copy
`.env.example` to `.env` and set it — get your UID from Firebase Console → Authentication
→ Users, or from the `/blog/admin` page after signing in. The same UID must match the
Firestore rules below.

`.env` is git-ignored. Vite reads it for local dev/build; on the server the same file
(next to `docker-compose.yml`) feeds the Docker build arg, so **create `.env` on the
server before the first `docker compose up --build`**.

### Firestore security rules (required)

Lock down the `posts` collection in Firebase Console → Firestore → Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{post} {
      allow read: if true;
      allow write: if request.auth != null
                   && request.auth.uid == '9BoJGBwdACYE86VxyuXgoAeLWxX2';
    }
    match /{document=**} { allow read, write: if false; }
  }
}
```

In Firebase Console → Authentication: enable **Google** as a sign-in provider, and add
`ignaciohaffner.com` under Settings → Authorized domains.

## Social previews (Twitter / Discord / etc.)

Crawlers don't run JS, so `server/index.js` fetches the post from the Firestore REST API
and injects `<title>` + `og:*` + `twitter:*` into the HTML for `/blog/:slug`. Other routes
get the default tags from `index.html`. Per-post image = the post's `coverImage`, else
`public/og.png`.

Config via env in `docker-compose.yml`: `SITE_URL`, `TWITTER_HANDLE`, `OG_LANG` (`es`/`en`).
After publishing a post, refresh its card with the
[Twitter Card Validator](https://cards-dev.twitter.com/validator) /
[opengraph.xyz](https://www.opengraph.xyz/).

Tests: `npm test` (runs `server/og.test.js`).

## Deploy

```bash
# on the server, next to the repo
cd Portfolio-Ignacio-Haffner
echo "VITE_ADMIN_UIDS=9BoJGBwdACYE86VxyuXgoAeLWxX2" > .env   # first time only
git pull
docker compose up -d --build
```

Traefik picks up the container from the labels in `docker-compose.yml` (port 3000) and
issues the TLS cert. Roll back with `git checkout <prev> && docker compose up -d --build`.
