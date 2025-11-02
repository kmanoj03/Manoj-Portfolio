import { Calendar, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "CyberMind Works",
      role: "Full Stack Web Developer Intern",
      period: "Oct 2023 - Dec 2023",
      type: "work",
      description: [
        "Built a scalable online code execution server for React apps using AWS EC2, Docker, and Kubernetes.",
        "Integrated AWS SDK for dynamic, user-specific environments, boosting server uptime by 25% and cutting manual setup by 40%.",
        "Collaborated closely with the co-founder to improve API performance by ~25%.",
      ],
      techStack: [
        "Next.js",
        "NestJS",
        "MikroORM",
        "PostgreSQL",
        "AWS EC2",
        "Docker",
        "Kubernetes",
      ],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: "Apple Developers Group",
      role: "Full Stack Web Developer",
      period: "Mar 2022 – Jul 2023",
      type: "work",
      description: [
        "Engineered a secure backend system for streamlining recruitment of 200+ applicants.",
        "Authenticated users, dynamically processed Excel-based test questions, and reduced manual screening by 90%.",
        "Enhanced backend performance and patched vulnerabilities in the authentication flow.",
      ],
      techStack: [
        "Node.js",
        "Express.js",
        "React.js",
        "MongoDB",
        "HTML",
        "CSS",
        "Python",
      ],
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-4">
            Experiences
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-4 sm:p-6 lg:p-8 hover:bg-slate-700 transition-all duration-300"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-emerald-400 mt-1 flex-shrink-0">{exp.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4">
                    <div className="mb-2 md:mb-0">
                      <h3 className="text-emerald-400 text-lg sm:text-xl font-bold mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-red-400 font-medium text-sm sm:text-base">{exp.role}</p>
                    </div>
                    <div className="flex items-center text-gray-400 text-xs sm:text-sm mt-1 md:mt-0">
                      <Calendar size={14} className="mr-1.5 sm:mr-2 flex-shrink-0" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-3 sm:mb-4">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 text-xs sm:text-sm flex items-start"
                      >
                        <span className="text-emerald-400 mr-2 mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.techStack.length > 0 && (
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-emerald-400 text-[10px] sm:text-xs bg-emerald-400/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
