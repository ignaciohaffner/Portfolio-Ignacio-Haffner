import type React from "react";
import { Link } from "react-router-dom";
import { usePublishedPosts } from "../hooks/usePosts";
import PostCard from "./blog/PostCard";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../utils/translations";

const MONO = '"JetBrains Mono", monospace';

const BlogTeaser: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { data: posts, loading } = usePublishedPosts();

  // Hide the whole section until there is something to show.
  if (!loading && posts.length === 0) return null;

  const latest = posts.slice(0, 3);

  return (
    <div
      className="container mx-auto py-20 px-4"
      id="blog"
      style={{ fontFamily: MONO }}
    >
      <div className="space-y-8">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm" style={{ color: "#00d992" }}>
            $ ls ~/blog --recent
          </span>
          <Link
            to="/blog"
            className="text-xs"
            style={{ color: "#8b949e", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00d992")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8b949e")}
          >
            {t.blog.viewAll} →
          </Link>
        </div>

        {loading ? (
          <div className="space-y-3">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="h-28"
                style={{ border: "1px solid #1e293b", background: "#0d1117" }}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {latest.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogTeaser;
