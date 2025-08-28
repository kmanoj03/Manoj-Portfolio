import React from "react";
import { Linkedin, Github, Mail, ChevronDown } from "lucide-react";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 flex items-center justify-center relative"
    >
      <div className="text-center max-w-4xl mx-auto px-6">
        <p className="text-emerald-400 text-lg mb-4">Hi, my name is</p>
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
          Manoj Konda.
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <TypewriterText />
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Full Stack Developer & MSSE @SJSU with a security-first mindset. I
          build scalable web apps, optimize backend systems, and explore
          vulnerabilities in real-world systems. Passionate about building
          secure, cloud-native, user-focused products.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-emerald-400 text-slate-900 px-8 py-3 rounded font-semibold hover:bg-emerald-300 transition-all"
          >
            View My Work
          </button>
          <a
            href="/SDE_1-Page.pdf"
            download
            className="border border-emerald-400 text-emerald-400 px-8 py-3 rounded hover:bg-emerald-400 hover:text-slate-900 transition-all flex items-center gap-2"
          >
            <span>📥</span>
            Download CV
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/kmanoj03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/kmanoj03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:manoj03.work@gmail.com"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-emerald-400 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
