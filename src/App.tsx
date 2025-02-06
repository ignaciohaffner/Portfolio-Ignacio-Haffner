import type React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import MainPage from "./Pages/MainPage";
import { LanguageProvider } from "./contexts/LanguageContext";
import ScrollProvider from "./components/ScrollProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ScrollProvider>
          <Router>
            <div className="min-h-screen bg-background text-foreground">
              <Navbar />
              <MainPage />
            </div>
          </Router>
        </ScrollProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
