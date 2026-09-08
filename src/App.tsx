import type React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import MainPage from "./Pages/MainPage";
import ScrollProvider from "./components/ScrollProvider";

const BlogPage = lazy(() => import("./Pages/BlogPage"));
const BlogPostPage = lazy(() => import("./Pages/BlogPostPage"));
const BlogAdminPage = lazy(() => import("./Pages/BlogAdminPage"));

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ScrollProvider>
          <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-background text-foreground">
              <Navbar />
              <Suspense fallback={null}>
                <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/admin" element={<BlogAdminPage />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </div>
          </Router>
        </ScrollProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
