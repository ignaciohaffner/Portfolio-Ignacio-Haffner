import type React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

interface ScrollProviderProps {
  children: React.ReactNode;
}

const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default ScrollProvider;
