import React, { useState } from 'react';
import { 
  FaPython, 
  FaJs, 
  FaJava, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaDocker, 
  FaGithub, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiPostgresql, 
  SiReact, 
  SiTailwindcss, 
  SiThreedotjs, 
  SiExpress, 
  SiNestjs, 
  SiSocketdotio, 
  SiMongodb, 
  SiKubernetes, 
  SiPostman, 
  SiWireshark 
} from 'react-icons/si';
import { BiData } from 'react-icons/bi';
import { MdSecurity } from 'react-icons/md';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Programming Languages',
    'Frontend',
    'Backend',
    'Databases',
    'DevOps & Cloud',
    'Cybersecurity Tools'
  ];

  const skills = [
    // Programming Languages
    { name: 'Python', category: 'Programming Languages', icon: <FaPython />, bgColor: 'bg-blue-500' },
    { name: 'JavaScript', category: 'Programming Languages', icon: <FaJs />, bgColor: 'bg-yellow-500' },
    { name: 'TypeScript', category: 'Programming Languages', icon: <SiTypescript />, bgColor: 'bg-blue-600' },
    { name: 'Java', category: 'Programming Languages', icon: <FaJava />, bgColor: 'bg-orange-600' },
    { name: 'SQL', category: 'Programming Languages', icon: <BiData />, bgColor: 'bg-gray-600' },
    
    // Frontend
    { name: 'React.js', category: 'Frontend', icon: <SiReact />, bgColor: 'bg-blue-400' },
    { name: 'HTML5', category: 'Frontend', icon: <FaHtml5 />, bgColor: 'bg-orange-500' },
    { name: 'CSS3', category: 'Frontend', icon: <FaCss3Alt />, bgColor: 'bg-blue-500' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: <SiTailwindcss />, bgColor: 'bg-teal-500' },
    { name: 'Three.js', category: 'Frontend', icon: <SiThreedotjs />, bgColor: 'bg-gray-800' },
    { name: 'Recharts', category: 'Frontend', icon: <BiData />, bgColor: 'bg-purple-500' },
    
    // Backend
    { name: 'Node.js', category: 'Backend', icon: <FaNodeJs />, bgColor: 'bg-green-600' },
    { name: 'Express.js', category: 'Backend', icon: <SiExpress />, bgColor: 'bg-gray-800' },
    { name: 'NestJS', category: 'Backend', icon: <SiNestjs />, bgColor: 'bg-red-600' },
    { name: 'Socket.io', category: 'Backend', icon: <SiSocketdotio />, bgColor: 'bg-gray-900' },
    { name: 'JWT Auth', category: 'Backend', icon: <MdSecurity />, bgColor: 'bg-indigo-600' },
    
    // Databases
    { name: 'MongoDB', category: 'Databases', icon: <SiMongodb />, bgColor: 'bg-green-500' },
    { name: 'PostgreSQL', category: 'Databases', icon: <SiPostgresql />, bgColor: 'bg-blue-800' },
    
    // DevOps & Cloud
    { name: 'AWS (EC2, SDK)', category: 'DevOps & Cloud', icon: <FaAws />, bgColor: 'bg-orange-400' },
    { name: 'Docker', category: 'DevOps & Cloud', icon: <FaDocker />, bgColor: 'bg-blue-600' },
    { name: 'Kubernetes', category: 'DevOps & Cloud', icon: <SiKubernetes />, bgColor: 'bg-blue-700' },
    { name: 'GitHub', category: 'DevOps & Cloud', icon: <FaGithub />, bgColor: 'bg-gray-900' },
    { name: 'Postman', category: 'DevOps & Cloud', icon: <SiPostman />, bgColor: 'bg-orange-500' },
    
    // Cybersecurity Tools
    { name: 'Wireshark', category: 'Cybersecurity Tools', icon: <SiWireshark />, bgColor: 'bg-blue-600' },
    { name: 'hping3', category: 'Cybersecurity Tools', icon: <MdSecurity />, bgColor: 'bg-red-600' },
    { name: 'Ettercap', category: 'Cybersecurity Tools', icon: <MdSecurity />, bgColor: 'bg-purple-600' },
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-400 mb-4">Technical Skills</h2>
          <p className="text-gray-400 text-lg">Technologies and frameworks I work with</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-emerald-400 text-slate-900'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center p-6 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center text-2xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </div>
              <h3 className="text-white font-medium text-center text-sm">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;