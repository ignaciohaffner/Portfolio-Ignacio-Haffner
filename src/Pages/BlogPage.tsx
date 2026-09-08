import type React from "react";
import { useMemo, useState } from "react";
import { usePublishedPosts } from "../hooks/usePosts";
import PostCard from "../components/blog/PostCard";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../utils/translations";

const MONO = '"JetBrains Mono", monospace';

const BlogPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { data: posts, loading, error } = usePublishedPosts();
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.tags.forEach((tag) => set.add(tag)));
    return Array.from(set).sort();
  }, [posts]);

  const visible = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  return (
    <div
      className="min-h-screen container mx-auto px-4 pt-24 pb-20 max-w-3xl"
      style={{ fontFamily: MONO }}
    >
      <header className="mb-8 space-y-2">
        <div className="text-sm" style={{ color: "#00d992" }}>
          $ ls ~/blog
        </div>
        <p className="text-xs" style={{ color: "#8b949e" }}>
          {t.blog.subtitle}
        </p>
      </header>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-8 text-xs">
          <TagButton
            label={t.blog.allTags}
            active={activeTag === null}
            onClick={() => setActiveTag(null)}
          />
          {tags.map((tag) => (
            <TagButton
              key={tag}
              label={`#${tag}`}
              active={activeTag === tag}
              onClick={() => setActiveTag(tag)}
            />
          ))}
        </div>
      )}

      {loading && (
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-28"
              style={{ border: "1px solid #1e293b", background: "#0d1117" }}
            />
          ))}
        </div>
      )}

      {!loading && error && (
        <p className="text-xs" style={{ color: "#f87171" }}>
          {"// "}
          {t.blog.loadError}
        </p>
      )}

      {!loading && !error && visible.length === 0 && (
        <p className="text-xs" style={{ color: "#475569" }}>
          {"// "}
          {t.blog.empty}
        </p>
      )}

      {!loading && !error && visible.length > 0 && (
        <div className="space-y-3">
          {visible.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

interface TagButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const TagButton: React.FC<TagButtonProps> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    style={{
      color: active ? "#00d992" : "#8b949e",
      background: "none",
      border: "none",
      borderBottom: active ? "1px solid #00d992" : "1px solid transparent",
      cursor: "pointer",
      fontFamily: '"JetBrains Mono", monospace',
      padding: "0 0 2px",
    }}
  >
    {label}
  </button>
);

export default BlogPage;
