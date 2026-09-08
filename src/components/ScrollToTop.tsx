import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll position on route change, unless the navigation carries a
 * `scrollTo` section id in history state (handled by MainPage).
 */
const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state && (state as { scrollTo?: string }).scrollTo) return;
    window.scrollTo(0, 0);
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;
