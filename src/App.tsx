import { useEffect, useRef, useState } from "react";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Aurora from './components/reactbits/Aurora';
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [auroraOpacity, setAuroraOpacity] = useState(1);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;

      // Fade out as user scrolls past the hero (first viewport)
      // Goes from 1 → 0.15 over the first screenful of scrolling
      const fadeOut = Math.max(0.15, 1 - (scrollY / viewportH) * 0.85);

      // Fade back in when approaching the Contact section
      let fadeIn = 0;
      if (contactRef.current) {
        const contactTop = contactRef.current.getBoundingClientRect().top;
        // Start fading in when Contact is within 1 viewport away
        if (contactTop < viewportH * 1.5) {
          fadeIn = Math.min(0.85, (1 - contactTop / (viewportH * 1.5)) * 0.85);
        }
      }

      setAuroraOpacity(Math.min(1, fadeOut + fadeIn));
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <div
        className="pointer-events-none fixed inset-0 z-[-1] h-screen w-screen transition-opacity duration-300"
        style={{ opacity: auroraOpacity }}
      >
        <Aurora
          colorStops={["#6779ff","#647ef2","#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
