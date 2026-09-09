import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ProjectGallery from "./components/ProjectGallery";
import ContentCreation from "./components/ContentCreation";
import Developer from "./components/Developer";
import Creative from "./components/Creative";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import ThemePrompt from "./components/ThemePrompt";

export default function App() {
  const [showThemePrompt, setShowThemePrompt] = useState(
    () => !localStorage.getItem("portfolio-theme")
  );
  const handleLoadingComplete = useCallback(() => {
    if (!localStorage.getItem("portfolio-theme")) {
      setShowThemePrompt(true);
    }
  }, []);

  return (
    <>
      <PageLoader onComplete={handleLoadingComplete} />
      {showThemePrompt && (
        <ThemePrompt onClose={() => setShowThemePrompt(false)} />
      )}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ProjectGallery />
        <ContentCreation />
        <Developer />
        <Creative />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
