# Personal Portfolio

Built with React + Vite + TypeScript, styled with Tailwind, terminal-themed.
Deployed as a Docker container (nginx) behind Traefik — see `Dockerfile`,
`docker-compose.yml`, `nginx.conf`.

## Blog

Posts live in the Firestore `posts` collection (project `portfolio-ignaciohaffner`).

- **Write / edit posts:** go to `/blog/admin` and sign in with Google.
- Posts are bilingual (ES/EN) and the body is Markdown.
- Public routes: `/blog` (list) and `/blog/:slug` (post).
- Client-side routing (deep links like `/blog/:slug` on refresh) already works via the
  SPA fallback in `nginx.conf` — no extra config needed.

### Admin access

`/blog/admin` is gated by `VITE_ADMIN_UIDS` (comma-separated Firebase Auth UIDs). Copy
`.env.example` to `.env` and set it — get your UID from Firebase Console → Authentication
→ Users, or from the `/blog/admin` page after signing in. The same UID must also match the
Firestore rules below.

`.env` is git-ignored. Vite reads it for local dev/build; on the server the same file
(next to `docker-compose.yml`) feeds the Docker build arg, so **create `.env` on the
server before the first `docker compose up --build`**.

### Firestore security rules (required)

By default the `posts` collection is world-writable in test mode. Lock it down in
Firebase Console → Firestore → Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{post} {
      allow read: if true;
      allow write: if request.auth != null
                   && request.auth.uid == '9BoJGBwdACYE86VxyuXgoAeLWxX2';
    }
  }
}
```

Also, in Firebase Console → Authentication:
- Enable **Google** as a sign-in provider (Sign-in method tab).
- Add `ignaciohaffner.com` under Settings → Authorized domains.

## Deploy

```bash
# server, next to the repo
cd Portfolio-Ignacio-Haffner
echo "VITE_ADMIN_UIDS=<your-uid>" > .env   # first time only
git pull
docker compose up -d --build
```

Traefik picks up the container from the labels in `docker-compose.yml` and issues the
TLS cert. Roll back with `git checkout <prev> && docker compose up -d --build`.
