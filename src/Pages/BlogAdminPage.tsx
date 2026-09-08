import type React from "react";
import { useCallback, useEffect, useState } from "react";
import type { Post, PostDraft } from "../types/post";
import { listAllPosts, createPost, updatePost, deletePost } from "../lib/posts";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import PostForm from "../components/blog/PostForm";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../utils/translations";

const MONO = '"JetBrains Mono", monospace';

type Editing = { mode: "new" } | { mode: "edit"; post: Post } | null;

const BlogAdminPage: React.FC = () => (
  <AuthProvider>
    <BlogAdminInner />
  </AuthProvider>
);

const BlogAdminInner: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { user, loading: authLoading, isAdmin, signIn, signOutUser } = useAuth();

  const [posts, setPosts] = useState<Post[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [editing, setEditing] = useState<Editing>(null);

  const refresh = useCallback(async () => {
    setLoadingPosts(true);
    try {
      setPosts(await listAllPosts());
    } finally {
      setLoadingPosts(false);
    }
  }, []);

  useEffect(() => {
    if (isAdmin) refresh();
  }, [isAdmin, refresh]);

  const handleSave = async (draft: PostDraft) => {
    if (editing?.mode === "edit") {
      await updatePost(editing.post.id, draft, editing.post);
    } else {
      await createPost(draft);
    }
    setEditing(null);
    await refresh();
  };

  const handleDelete = async () => {
    if (editing?.mode !== "edit") return;
    await deletePost(editing.post.id);
    setEditing(null);
    await refresh();
  };

  return (
    <div
      className="min-h-screen container mx-auto px-4 pt-24 pb-20 max-w-3xl"
      style={{ fontFamily: MONO }}
    >
      <div className="flex items-center justify-between mb-10">
        <span className="text-sm" style={{ color: "#00d992" }}>
          $ ./blog-admin
        </span>
        {user && (
          <button
            onClick={signOutUser}
            className="text-xs"
            style={{
              color: "#8b949e",
              background: "none",
              border: "1px solid #1e293b",
              padding: "0.25rem 0.6rem",
              cursor: "pointer",
              fontFamily: MONO,
            }}
          >
            {t.blog.admin.signOut}
          </button>
        )}
      </div>

      {authLoading && (
        <div className="h-8 w-40" style={{ background: "#161b22" }} />
      )}

      {!authLoading && !user && (
        <button
          onClick={signIn}
          style={{
            color: "#00d992",
            background: "none",
            border: "1px solid #00d992",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            fontFamily: MONO,
            fontSize: "0.8rem",
          }}
        >
          $ {t.blog.admin.signIn}
        </button>
      )}

      {!authLoading && user && !isAdmin && (
        <div
          className="p-5 space-y-3 text-xs"
          style={{ border: "1px solid #f87171", background: "#0d1117", color: "#8b949e" }}
        >
          <p>{"// "}{t.blog.admin.notAdmin}</p>
          <code
            className="block px-3 py-2 text-xs break-all"
            style={{ background: "#0a0a0c", color: "#00d992", border: "1px solid #1e293b" }}
          >
            {user.uid}
          </code>
        </div>
      )}

      {!authLoading && user && isAdmin && (
        <div className="space-y-6">
          {editing ? (
            <PostForm
              initial={editing.mode === "edit" ? editing.post : undefined}
              onSave={handleSave}
              onDelete={editing.mode === "edit" ? handleDelete : undefined}
              onCancel={() => setEditing(null)}
            />
          ) : (
            <>
              <button
                onClick={() => setEditing({ mode: "new" })}
                style={{
                  color: "#00d992",
                  background: "none",
                  border: "1px solid #00d992",
                  padding: "0.4rem 0.9rem",
                  cursor: "pointer",
                  fontFamily: MONO,
                  fontSize: "0.75rem",
                }}
              >
                + {t.blog.admin.newPost}
              </button>

              <div style={{ border: "1px solid #1e293b", background: "#0d1117" }}>
                {posts.map((post, idx) => (
                  <button
                    key={post.id}
                    onClick={() => setEditing({ mode: "edit", post })}
                    className="w-full flex items-center justify-between gap-4 px-5 py-3 text-left transition-colors duration-150"
                    style={{
                      borderBottom:
                        idx < posts.length - 1 ? "1px solid #1e293b" : "none",
                      background: "transparent",
                      cursor: "pointer",
                      fontFamily: MONO,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "rgba(0,217,146,0.03)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <span className="text-xs truncate" style={{ color: "#e2e8f0" }}>
                      {post.title[language] || post.slug}
                    </span>
                    <span
                      className="text-xs shrink-0"
                      style={{ color: post.published ? "#00d992" : "#475569" }}
                    >
                      {post.published
                        ? t.blog.admin.publishedLabel
                        : t.blog.admin.draft}
                    </span>
                  </button>
                ))}
                {!loadingPosts && posts.length === 0 && (
                  <p className="px-5 py-4 text-xs" style={{ color: "#475569" }}>
                    {"// "}
                    {t.blog.empty}
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogAdminPage;
