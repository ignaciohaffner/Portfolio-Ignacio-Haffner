export type Locale = "es" | "en";

export interface LocalizedText {
  es: string;
  en: string;
}

export interface Post {
  id: string;
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  body: LocalizedText;
  tags: string[];
  coverImage: string;
  published: boolean;
  /** epoch ms, or null while it is still a draft */
  publishedAt: number | null;
  /** epoch ms */
  updatedAt: number;
}

/** Shape used by the admin form — no id / timestamps yet. */
export type PostDraft = Omit<Post, "id" | "publishedAt" | "updatedAt">;

export const EMPTY_DRAFT: PostDraft = {
  slug: "",
  title: { es: "", en: "" },
  excerpt: { es: "", en: "" },
  body: { es: "", en: "" },
  tags: [],
  coverImage: "",
  published: false,
};

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 80);
}

/** Rough reading time in minutes from a markdown string (~200 wpm). */
export function readingMinutes(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
