import React from "react";
import { GraduationCap, School } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* <h2 className="text-4xl font-bold text-emerald-400 text-center mb-16">
          About Me
        </h2> */}
        {/* 
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-gray-400 text-lg leading-relaxed">
            Hey there! I'm Manoj, a Software Engineering graduate student at San
            José State University and a full-stack developer with a
            security-first mindset. I've built production-ready platforms like
            UniRide and a personal finance tracker, and I'm deeply passionate
            about application security, DevOps, and cloud infrastructure. From
            crafting dynamic UIs to simulating ARP/IP spoofing attacks, I'm
            always looking for the intersection of innovation, impact, and
            secure engineering.
          </p>
        </div> */}

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-emerald-400 text-center mb-12">
            Education
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-emerald-400 mr-3" size={24} />
                <h4 className="text-white font-semibold">
                  San José State University
                </h4>
              </div>
              <p className="text-gray-300 mb-2">M.S. in Software Engineering</p>
              <p className="text-gray-400 text-sm mb-2">Aug 2025 – May 2027</p>
              <p className="text-emerald-400 font-semibold">
                Coursework: Software Security, Enterprise Platforms, SW Systems
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-emerald-400 mr-3" size={24} />
                <h4 className="text-white font-semibold">
                  Vellore Institute of Technology
                </h4>
              </div>
              <p className="text-gray-300 mb-2">
                B.Tech in Information Technology
              </p>
              <p className="text-gray-400 text-sm mb-2">Sep 2021 – May 2025</p>
              <p className="text-emerald-400 font-semibold">CGPA: 9.00/10.00</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <School className="text-emerald-400 mr-3" size={24} />
                <h4 className="text-white font-semibold">
                  Padma Seshadri Bala Bhavan
                </h4>
              </div>
              <p className="text-gray-300 mb-2">
                Higher Secondary (Class 11 & 12)
              </p>
              <p className="text-gray-400 text-sm mb-2">
                June 2019 – April 2021
              </p>
              <p className="text-emerald-400 font-semibold">CBSE Curriculum</p>
            </div>
          </div>
        </div>

        {/* <h3 className="text-3xl font-bold text-emerald-400 text-center mb-8">My Tech Arsenal</h3> */}
      </div>
    </section>
  );
};

export default About;
