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

export default function App() {
  return (
    <>
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
