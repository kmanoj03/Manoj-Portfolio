import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
