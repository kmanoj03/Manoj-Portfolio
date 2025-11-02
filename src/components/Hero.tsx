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
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24">
        <p className="text-emerald-400 text-sm sm:text-lg mb-3 sm:mb-4">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4">
          Manoj Konda.
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
          <TypewriterText />
        </h2>
        <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
        Full-Stack Developer & MSSE Grad Student at San José State University, specializing in secure, 
        cloud-native application design. Experienced in building scalable web platforms, 
        optimizing backend architectures, and integrating AI-driven security insights into modern 
        DevOps workflows.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
          <button
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-emerald-400 text-slate-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded font-semibold hover:bg-emerald-300 transition-all text-sm sm:text-base w-full sm:w-auto"
          >
            View My Work
          </button>
          <a
            href="/Manoj Konda Resume.pdf"
            download
            className="border border-emerald-400 text-emerald-400 px-6 sm:px-8 py-2.5 sm:py-3 rounded hover:bg-emerald-400 hover:text-slate-900 transition-all flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
          >
            <span>📥</span>
            Download CV
          </a>
        </div>

        <div className="flex justify-center space-x-4 sm:space-x-6">
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
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-emerald-400 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} className="sm:w-8 sm:h-8" />
      </button>
    </section>
  );
};

export default Hero;
