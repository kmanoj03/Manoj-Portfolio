import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className="text-emerald-400 text-xl font-bold cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Manoj Konda
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Contact
              </button>
              <a
                href="/Manoj Konda-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-emerald-400 text-emerald-400 px-4 py-2 rounded hover:bg-emerald-400 hover:text-slate-900 transition-all"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-emerald-400 text-slate-900 p-3 rounded-full shadow-lg hover:bg-emerald-300 transition-all z-50"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </>
  );
};

export default Navbar;
