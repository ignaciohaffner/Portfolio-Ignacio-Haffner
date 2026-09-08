import { useEffect, useState } from "react";
import type { Post } from "../types/post";
import { listPublishedPosts, getPostBySlug } from "../lib/posts";

interface AsyncState<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

export function usePublishedPosts(): AsyncState<Post[]> {
  const [state, setState] = useState<AsyncState<Post[]>>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let active = true;
    listPublishedPosts()
      .then((posts) => {
        if (active) setState({ data: posts, loading: false, error: null });
      })
      .catch((err) => {
        if (active)
          setState({
            data: [],
            loading: false,
            error: err?.message ?? "Error loading posts",
          });
      });
    return () => {
      active = false;
    };
  }, []);

  return state;
}

export function usePost(slug: string | undefined): AsyncState<Post | null> {
  const [state, setState] = useState<AsyncState<Post | null>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!slug) {
      setState({ data: null, loading: false, error: null });
      return;
    }
    let active = true;
    setState({ data: null, loading: true, error: null });
    getPostBySlug(slug)
      .then((post) => {
        if (active) setState({ data: post, loading: false, error: null });
      })
      .catch((err) => {
        if (active)
          setState({
            data: null,
            loading: false,
            error: err?.message ?? "Error loading post",
          });
      });
    return () => {
      active = false;
    };
  }, [slug]);

  return state;
}
