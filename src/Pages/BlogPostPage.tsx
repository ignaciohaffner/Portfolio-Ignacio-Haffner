import type React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { usePost } from "../hooks/usePosts";
import { readingMinutes } from "../types/post";
import Markdown from "../components/blog/Markdown";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../utils/translations";

const MONO = '"JetBrains Mono", monospace';

function setMetaDescription(content: string) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const t = translations[language];
  const { data: post, loading, error } = usePost(slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title[language]} — Ignacio Haffner`;
      setMetaDescription(post.excerpt[language]);
    }
    return () => {
      document.title = "~/portfolio — Ignacio Haffner";
    };
  }, [post, language]);

  return (
    <div
      className="min-h-screen container mx-auto px-4 pt-24 pb-24 max-w-3xl"
      style={{ fontFamily: MONO }}
    >
      <Link
        to="/blog"
        className="inline-block text-xs mb-10"
        style={{ color: "#8b949e", textDecoration: "none" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#00d992")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#8b949e")}
      >
        &lt; cd ~/blog
      </Link>

      {loading && (
        <div className="space-y-4">
          <div className="h-6 w-2/3" style={{ background: "#161b22" }} />
          <div className="h-48" style={{ background: "#0d1117", border: "1px solid #1e293b" }} />
        </div>
      )}

      {!loading && (error || !post) && (
        <div className="space-y-3">
          <p className="text-sm" style={{ color: "#f87171" }}>
            {"// "}
            {t.blog.notFound}
          </p>
          <Link to="/blog" className="text-xs" style={{ color: "#00d992" }}>
            &lt; cd ~/blog
          </Link>
        </div>
      )}

      {!loading && post && (
        <>
          <header className="mb-10 space-y-3">
            <div className="text-sm" style={{ color: "#00d992" }}>
              $ cat {post.slug}.md
            </div>
            <div className="flex items-center gap-3 text-xs" style={{ color: "#475569" }}>
              {post.publishedAt !== null && (
                <span>
                  {new Date(post.publishedAt).toLocaleDateString(
                    language === "es" ? "es-ES" : "en-US",
                    { year: "numeric", month: "long", day: "numeric" },
                  )}
                </span>
              )}
              <span>·</span>
              <span>
                {readingMinutes(post.body[language])} {t.blog.minRead}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl" style={{ color: "#e2e8f0" }}>
              {post.title[language]}
            </h1>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 text-xs" style={{ color: "#475569" }}>
                {post.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            )}
          </header>

          {post.coverImage && (
            <img
              src={post.coverImage}
              alt=""
              className="w-full mb-10"
              style={{ border: "1px solid #1e293b" }}
            />
          )}

          <Markdown>{post.body[language]}</Markdown>
        </>
      )}
    </div>
  );
};

export default BlogPostPage;
