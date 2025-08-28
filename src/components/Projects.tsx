import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { FaCar, FaChartLine, FaShieldAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "UniRide",
      period: "Sep 2024 – Mar 2025",
      category: "Full Stack Developer",
      description:
        "Built a scalable ride-sharing platform for VIT students, handling over 500 concurrent ride requests. Implemented host-based ride controls, peer reviews, real-time chat with Socket.io, and CRON fallback for auto-completion. Applied threat modeling to reduce security risks by 30%, improving overall platform reliability.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
        "CRON Jobs",
        "JWT",
      ],
      icon: <FaCar className="w-6 h-6" />,
      codeLink: "#",
      liveLink: "#",
    },
    {
      title: "Personal Finance Tracker",
      period: "Jan 2024 – Feb 2024",
      category: "Full Stack Developer",
      description:
        "Developed a full-stack finance dashboard to help users monitor expenses and savings goals. Integrated real-time analytics using Recharts, added a 3D landing page with Three.js, and enforced secure data access via JWT-based authentication and input validation.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Three.js",
        "Recharts",
        "JWT",
      ],
      icon: <FaChartLine className="w-6 h-6" />,
      codeLink: "#",
      liveLink: "#",
    },
    {
      title: "ARP & IP Spoofing Attack Mitigation",
      period: "Oct 2023 – Nov 2023",
      category: "Security Researcher",
      description:
        "Simulated ARP and IP spoofing attacks using Ettercap and hping3, redirecting ~80% of traffic to demonstrate interception techniques. Hardened network with ingress/egress filtering and verified results with Wireshark, enhancing security against spoofed packets.",
      techStack: [
        "Wireshark",
        "Ettercap",
        "hping3",
        "Firewall Filtering",
        "Linux Networking Tools",
      ],
      icon: <FaShieldAlt className="w-6 h-6" />,
      codeLink: "#",
      liveLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-400 mb-4">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-emerald-400">{project.icon}</div>
                <div className="flex space-x-2">
                  {/* <a
                    href={project.codeLink}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <Github size={20} />
                  </a> */}
                  {/* <a
                    href={project.liveLink}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a> */}
                </div>
              </div>

              <h3 className="text-emerald-400 text-xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.period} | {project.category}
              </p>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-emerald-400 text-xs bg-emerald-400/10 px-2 py-1 rounded"
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
