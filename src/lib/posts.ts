import {
  db,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "../firebaseConfig";
import type { Post, PostDraft } from "../types/post";

const COLLECTION = "posts";

function toMillis(value: unknown): number | null {
  if (value instanceof Timestamp) return value.toMillis();
  if (typeof value === "number") return value;
  return null;
}

function mapDoc(snapshot: any): Post {
  const data = snapshot.data() ?? {};
  return {
    id: snapshot.id,
    slug: data.slug ?? "",
    title: { es: data.title?.es ?? "", en: data.title?.en ?? "" },
    excerpt: { es: data.excerpt?.es ?? "", en: data.excerpt?.en ?? "" },
    body: { es: data.body?.es ?? "", en: data.body?.en ?? "" },
    tags: Array.isArray(data.tags) ? data.tags : [],
    coverImage: data.coverImage ?? "",
    published: !!data.published,
    publishedAt: toMillis(data.publishedAt),
    updatedAt: toMillis(data.updatedAt) ?? 0,
  };
}

/** All published posts, newest first. */
export async function listPublishedPosts(): Promise<Post[]> {
  const snap = await getDocs(
    query(collection(db, COLLECTION), orderBy("publishedAt", "desc"))
  );
  return snap.docs
    .map(mapDoc)
    .filter((post: Post) => post.published && post.publishedAt !== null);
}

/** Every post, drafts included — for the admin panel. */
export async function listAllPosts(): Promise<Post[]> {
  const snap = await getDocs(
    query(collection(db, COLLECTION), orderBy("updatedAt", "desc"))
  );
  return snap.docs.map(mapDoc);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const snap = await getDocs(
    query(collection(db, COLLECTION), where("slug", "==", slug))
  );
  if (snap.empty) return null;
  return mapDoc(snap.docs[0]);
}

export async function getPostById(id: string): Promise<Post | null> {
  const snap = await getDoc(doc(db, COLLECTION, id));
  if (!snap.exists()) return null;
  return mapDoc(snap);
}

export async function createPost(draft: PostDraft): Promise<string> {
  const ref = await addDoc(collection(db, COLLECTION), {
    ...draft,
    publishedAt: draft.published ? serverTimestamp() : null,
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updatePost(
  id: string,
  draft: PostDraft,
  existing: Post
): Promise<void> {
  // First time it goes public, stamp publishedAt; keep it stable afterwards.
  let publishedAt: unknown = existing.publishedAt
    ? Timestamp.fromMillis(existing.publishedAt)
    : null;
  if (draft.published && !existing.publishedAt) publishedAt = serverTimestamp();
  if (!draft.published) publishedAt = null;

  await updateDoc(doc(db, COLLECTION, id), {
    ...draft,
    publishedAt,
    updatedAt: serverTimestamp(),
  });
}

export async function deletePost(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}
