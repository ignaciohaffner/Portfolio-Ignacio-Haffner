import type React from "react";

interface ScrollProviderProps {
  children: React.ReactNode;
}

const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default ScrollProvider;
