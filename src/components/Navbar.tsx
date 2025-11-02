import React, { useState, useEffect } from "react";
import { ChevronUp, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div
              className="text-emerald-400 text-lg sm:text-xl font-bold cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Manoj Konda
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-sm lg:text-base"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-sm lg:text-base"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-sm lg:text-base"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-sm lg:text-base"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-sm lg:text-base"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-sm lg:text-base"
              >
                Contact
              </button>
              <a
                href="/Manoj Konda Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-emerald-400 text-emerald-400 px-3 lg:px-4 py-1.5 lg:py-2 rounded text-sm lg:text-base hover:bg-emerald-400 hover:text-slate-900 transition-all"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-emerald-400 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-700/50">
              <div className="flex flex-col pt-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-left py-3 border-b border-slate-700/50"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-left py-3 border-b border-slate-700/50"
                >
                  Education
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-left py-3 border-b border-slate-700/50"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-left py-3 border-b border-slate-700/50"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-left py-3 border-b border-slate-700/50"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-left py-3 border-b border-slate-700/50"
                >
                  Contact
                </button>
                <a
                  href="/Manoj Konda Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-emerald-400 text-emerald-400 px-4 py-3 rounded text-center hover:bg-emerald-400 hover:text-slate-900 transition-all mt-2"
                >
                  Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-emerald-400 text-slate-900 p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-emerald-300 transition-all z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={18} className="sm:w-5 sm:h-5" />
        </button>
      )}
    </>
  );
};

export default Navbar;
