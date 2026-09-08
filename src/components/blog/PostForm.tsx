import type React from "react";
import { useState } from "react";
import type { Post, PostDraft } from "../../types/post";
import { slugify } from "../../types/post";
import Markdown from "./Markdown";
import { useLanguage } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";

const MONO = '"JetBrains Mono", monospace';

interface PostFormProps {
  initial?: Post;
  onSave: (draft: PostDraft) => Promise<void>;
  onDelete?: () => Promise<void>;
  onCancel: () => void;
}

function toDraft(post?: Post): PostDraft {
  if (!post) {
    return {
      slug: "",
      title: { es: "", en: "" },
      excerpt: { es: "", en: "" },
      body: { es: "", en: "" },
      tags: [],
      coverImage: "",
      published: false,
    };
  }
  return {
    slug: post.slug,
    title: { ...post.title },
    excerpt: { ...post.excerpt },
    body: { ...post.body },
    tags: [...post.tags],
    coverImage: post.coverImage,
    published: post.published,
  };
}

const inputStyle: React.CSSProperties = {
  background: "#0a0a0c",
  border: "1px solid #1e293b",
  color: "#e2e8f0",
  fontFamily: MONO,
};
const inputClass = "w-full px-3 py-2 text-xs outline-none focus:border-[#00d992]";

const labelStyle: React.CSSProperties = { color: "#475569", fontFamily: MONO };

const btn = (variant: "primary" | "ghost" | "danger"): React.CSSProperties => ({
  fontFamily: MONO,
  fontSize: "0.75rem",
  padding: "0.4rem 0.9rem",
  cursor: "pointer",
  background: "none",
  border: `1px solid ${
    variant === "primary" ? "#00d992" : variant === "danger" ? "#f87171" : "#1e293b"
  }`,
  color: variant === "primary" ? "#00d992" : variant === "danger" ? "#f87171" : "#8b949e",
});

const PostForm: React.FC<PostFormProps> = ({
  initial,
  onSave,
  onDelete,
  onCancel,
}) => {
  const { language } = useLanguage();
  const t = translations[language];
  const f = t.blog.admin.fields;

  const [draft, setDraft] = useState<PostDraft>(() => toDraft(initial));
  const [tagsInput, setTagsInput] = useState((initial?.tags ?? []).join(", "));
  const [slugTouched, setSlugTouched] = useState(!!initial);
  const [saving, setSaving] = useState(false);
  const [previewLang, setPreviewLang] = useState<"es" | "en" | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const update = (patch: Partial<PostDraft>) =>
    setDraft((prev) => ({ ...prev, ...patch }));

  const handleTitleEn = (value: string) => {
    update({
      title: { ...draft.title, en: value },
      ...(slugTouched ? {} : { slug: slugify(value) }),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    const tags = tagsInput
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const payload: PostDraft = {
      ...draft,
      slug: slugify(draft.slug || draft.title.en),
      tags,
    };
    if (!payload.slug) {
      setErrorMsg("// slug requerido / slug required");
      return;
    }
    setSaving(true);
    try {
      await onSave(payload);
    } catch (err) {
      setErrorMsg("// " + ((err as { message?: string })?.message ?? "error"));
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 space-y-5"
      style={{ border: "1px solid #1e293b", background: "#0d1117", fontFamily: MONO }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm" style={{ color: "#00d992" }}>
          $ {initial ? `vim ${initial.slug}.md` : "touch new-post.md"}
        </span>
        <label
          className="flex items-center gap-2 text-xs"
          style={{ color: "#8b949e" }}
        >
          <input
            type="checkbox"
            checked={draft.published}
            onChange={(e) => update({ published: e.target.checked })}
          />
          {f.published}
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label={f.titleEn}>
          <input
            className={inputClass}
            style={inputStyle}
            value={draft.title.en}
            onChange={(e) => handleTitleEn(e.target.value)}
          />
        </Field>
        <Field label={f.titleEs}>
          <input
            className={inputClass}
            style={inputStyle}
            value={draft.title.es}
            onChange={(e) =>
              update({ title: { ...draft.title, es: e.target.value } })
            }
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label={f.slug}>
          <input
            className={inputClass}
            style={inputStyle}
            value={draft.slug}
            onChange={(e) => {
              setSlugTouched(true);
              update({ slug: e.target.value });
            }}
          />
        </Field>
        <Field label={f.coverImage}>
          <input
            className={inputClass}
            style={inputStyle}
            value={draft.coverImage}
            onChange={(e) => update({ coverImage: e.target.value })}
            placeholder="https://..."
          />
        </Field>
      </div>

      <Field label={f.tags}>
        <input
          className={inputClass}
          style={inputStyle}
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          placeholder="react, typescript, firebase"
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label={f.excerptEn}>
          <textarea
            className={inputClass}
            style={inputStyle}
            rows={2}
            value={draft.excerpt.en}
            onChange={(e) =>
              update({ excerpt: { ...draft.excerpt, en: e.target.value } })
            }
          />
        </Field>
        <Field label={f.excerptEs}>
          <textarea
            className={inputClass}
            style={inputStyle}
            rows={2}
            value={draft.excerpt.es}
            onChange={(e) =>
              update({ excerpt: { ...draft.excerpt, es: e.target.value } })
            }
          />
        </Field>
      </div>

      <BodyField
        label={f.bodyEn}
        value={draft.body.en}
        onChange={(v) => update({ body: { ...draft.body, en: v } })}
        previewing={previewLang === "en"}
        onTogglePreview={() => setPreviewLang((p) => (p === "en" ? null : "en"))}
        previewLabel={t.blog.admin.preview}
        editLabel={t.blog.admin.edit}
      />
      <BodyField
        label={f.bodyEs}
        value={draft.body.es}
        onChange={(v) => update({ body: { ...draft.body, es: v } })}
        previewing={previewLang === "es"}
        onTogglePreview={() => setPreviewLang((p) => (p === "es" ? null : "es"))}
        previewLabel={t.blog.admin.preview}
        editLabel={t.blog.admin.edit}
      />

      {errorMsg && (
        <p className="text-xs" style={{ color: "#f87171" }}>
          {errorMsg}
        </p>
      )}

      <div className="flex items-center gap-3 pt-2">
        <button type="submit" style={btn("primary")} disabled={saving}>
          {saving ? t.blog.admin.saving : `:w ${t.blog.admin.save}`}
        </button>
        <button
          type="button"
          style={btn("ghost")}
          onClick={onCancel}
          disabled={saving}
        >
          :q {t.blog.admin.cancel}
        </button>
        {onDelete && (
          <button
            type="button"
            style={{ ...btn("danger"), marginLeft: "auto" }}
            disabled={saving}
            onClick={async () => {
              if (window.confirm(t.blog.admin.confirmDelete)) {
                setSaving(true);
                try {
                  await onDelete();
                } finally {
                  setSaving(false);
                }
              }
            }}
          >
            rm {t.blog.admin.delete}
          </button>
        )}
      </div>
    </form>
  );
};

const Field: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <label className="block space-y-1.5">
    <span className="text-xs" style={labelStyle}>
      {label}
    </span>
    {children}
  </label>
);

interface BodyFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  previewing: boolean;
  onTogglePreview: () => void;
  previewLabel: string;
  editLabel: string;
}

const BodyField: React.FC<BodyFieldProps> = ({
  label,
  value,
  onChange,
  previewing,
  onTogglePreview,
  previewLabel,
  editLabel,
}) => (
  <div className="space-y-1.5">
    <div className="flex items-center justify-between">
      <span className="text-xs" style={labelStyle}>
        {label}
      </span>
      <button
        type="button"
        onClick={onTogglePreview}
        className="text-xs"
        style={{ color: "#00d992", background: "none", border: "none", cursor: "pointer", fontFamily: MONO }}
      >
        {previewing ? editLabel : previewLabel}
      </button>
    </div>
    {previewing ? (
      <div
        className="px-4 py-3 min-h-[10rem]"
        style={{ background: "#0a0a0c", border: "1px solid #1e293b" }}
      >
        <Markdown>{value || "_—_"}</Markdown>
      </div>
    ) : (
      <textarea
        className="w-full px-3 py-2 text-xs outline-none focus:border-[#00d992]"
        style={inputStyle}
        rows={12}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    )}
  </div>
);

export default PostForm;
