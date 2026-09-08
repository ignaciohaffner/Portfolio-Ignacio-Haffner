import type React from "react";
import { Link } from "react-router-dom";
import type { Post } from "../../types/post";
import { readingMinutes } from "../../types/post";
import { useLanguage } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";

const MONO = '"JetBrains Mono", monospace';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const date =
    post.publishedAt !== null
      ? new Date(post.publishedAt).toLocaleDateString(
          language === "es" ? "es-ES" : "en-US",
          { year: "numeric", month: "2-digit", day: "2-digit" },
        )
      : t.blog.admin.draft;

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="block px-5 py-4 transition-colors duration-150 group"
      style={{
        border: "1px solid #1e293b",
        background: "#0d1117",
        textDecoration: "none",
        fontFamily: MONO,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,217,146,0.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#0d1117")}
    >
      <div className="flex items-center gap-3 text-xs mb-2" style={{ color: "#475569" }}>
        <span>{date}</span>
        <span>·</span>
        <span>
          {readingMinutes(post.body[language])} {t.blog.minRead}
        </span>
      </div>

      <div className="flex items-baseline gap-2 mb-2">
        <span style={{ color: "#00d992" }} className="text-sm shrink-0">
          &gt;
        </span>
        <h3 className="text-sm" style={{ color: "#e2e8f0" }}>
          {post.title[language]}
        </h3>
      </div>

      <p className="text-xs leading-relaxed mb-3 pl-4" style={{ color: "#8b949e" }}>
        {post.excerpt[language]}
      </p>

      <div className="flex items-center gap-2 pl-4 text-xs" style={{ color: "#475569" }}>
        {post.tags.slice(0, 4).map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
        <span
          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: "#00d992" }}
        >
          {t.blog.readMore} →
        </span>
      </div>
    </Link>
  );
};

export default PostCard;
