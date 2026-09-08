/**
 * Firebase Auth UIDs allowed to create / edit / delete blog posts through
 * the /blog/admin panel.
 *
 * Set via the VITE_ADMIN_UIDS env var (comma-separated). Locally that lives in
 * `.env`; for the Docker build it is passed as a build arg (see Dockerfile /
 * docker-compose.yml). The same UID must also match the Firestore security rule
 * for the `posts` collection.
 */
export const ADMIN_UIDS: string[] = (import.meta.env.VITE_ADMIN_UIDS ?? "")
  .split(",")
  .map((uid) => uid.trim())
  .filter(Boolean);

export function isAdminUid(uid: string | null | undefined): boolean {
  return !!uid && ADMIN_UIDS.includes(uid);
}
