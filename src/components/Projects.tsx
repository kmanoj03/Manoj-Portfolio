import { ExternalLink, Github } from "lucide-react";
import { FaCar, FaDatabase, FaShieldAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "ConfigGuardian",
      // period: "Feb 2025 – Present",
      // category: "Full Stack Developer",
      description:
        "LLM-powered config auditor fortifying DevSecOps pipelines. Scans Dockerfiles & Kubernetes YAMLs for misconfigurations, scores severity in real time using Gemini, and anchors verified reports on Fetch.ai’s decentralized ledger.",
      techStack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "React",
        "Gemini LLM APIs",
        "Fetch.ai Agentverse",
      ],
      icon: <FaShieldAlt className="w-6 h-6" />,
      codeLink: "https://github.com/kmanoj03/config-guardian",
      liveLink: "#",
    },
    {
      title: "Memory Engine",
      // period: "Oct 2024 – Jan 2025",
      // category: "Full Stack Developer",
      description:
        "Intelligent debugging memory that recalls past production fixes with hybrid semantic + metadata search. Powered by MongoDB Atlas Vector Search to surface high-fidelity matches and boost recall accuracy by 25%.",
      techStack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB Atlas Vector Search",
        "LangChain",
      ],
      icon: <FaDatabase className="w-6 h-6" />,
      codeLink: "https://github.com/kmanoj03/memory-engine",
      liveLink: "#",
    },
    {
      title: "UniRide",
      // period: "Sep 2024 – Mar 2025",
      // category: "Full Stack Developer",
      description:
        "Campus-scale ride-sharing app built on the MERN stack. Features live Socket.io chat, host-controlled ride management, and CRON-based reliability layer, hardened through threat modeling to reduce security risks by 30%.",
      techStack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "React.js",
        "MongoDB",
        "Socket.io",
        "TailwindCSS",
        "CRON Jobs",
      ],
      icon: <FaCar className="w-6 h-6" />,
      codeLink: "https://github.com/kmanoj03/UniRide",
      liveLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-4">Projects</h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 rounded-lg p-4 sm:p-6 hover:bg-slate-700 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-emerald-400">{project.icon}</div>
                <div className="flex space-x-2">
                  <a
                    href={project.codeLink}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveLink}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-emerald-400 text-lg sm:text-xl font-bold mb-2">
                {project.title}
              </h3>
              {((project as any).period || (project as any).category) && (
                <p className="text-gray-400 text-xs sm:text-sm mb-4">
                  {(project as any).period && (project as any).category
                    ? `${(project as any).period} | ${(project as any).category}`
                    : (project as any).period || (project as any).category}
                </p>
              )}

              <p className="text-gray-300 text-xs sm:text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4 sm:mb-6">
                <p className="text-gray-400 text-xs sm:text-sm mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-emerald-400 text-[10px] sm:text-xs bg-emerald-400/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                {/* <button className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  <Github size={16} className="mr-1" />
                  Code
                </button>
                <button className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  <ExternalLink size={16} className="mr-1" />
                  Live
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
