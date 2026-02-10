import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ColorBends from './components/reactbits/ColorBends';
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

  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed inset-0 z-[-1] h-screen w-screen opacity-60">
        <ColorBends
          colors={["#6366f1", "#500000", "#22d3ee"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0}
          noise={0}
          transparent={true}
          autoRotate={3}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 z-[-1] bg-overlay" />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
