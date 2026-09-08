import type React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

interface MarkdownProps {
  children: string;
  className?: string;
}

/**
 * Renders post bodies. Element styling lives in the `.prose-blog` block in
 * src/index.css so it stays close to the rest of the site's dark palette.
 */
const Markdown: React.FC<MarkdownProps> = ({ children, className }) => {
  return (
    <div className={`prose-blog ${className ?? ""}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeHighlight, { detect: true, ignoreMissing: true }]]}
        components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
