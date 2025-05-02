import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div className="bg-primary text-white min-h-screen">
      <Header active={activeSection} setActive={setActiveSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
