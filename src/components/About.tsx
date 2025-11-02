import { GraduationCap, School } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-emerald-400 text-center mb-8 sm:mb-12">
            Education
          </h3>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-slate-800 p-4 sm:p-6 rounded-lg">
              <div className="flex items-center mb-3 sm:mb-4">
                <GraduationCap className="text-emerald-400 mr-2 sm:mr-3 flex-shrink-0" size={20} />
                <h4 className="text-white font-semibold text-sm sm:text-base">
                  San José State University
                </h4>
              </div>
              <p className="text-gray-300 mb-2 text-sm sm:text-base">M.S. in Software Engineering</p>
              <p className="text-gray-400 text-xs sm:text-sm mb-2">Aug 2025 – May 2027</p>
              <p className="text-emerald-400 font-semibold text-xs sm:text-sm">
                Coursework: Software Security, Enterprise Platforms, SW Systems
              </p>
            </div>

            <div className="bg-slate-800 p-4 sm:p-6 rounded-lg">
              <div className="flex items-center mb-3 sm:mb-4">
                <GraduationCap className="text-emerald-400 mr-2 sm:mr-3 flex-shrink-0" size={20} />
                <h4 className="text-white font-semibold text-sm sm:text-base">
                  Vellore Institute of Technology
                </h4>
              </div>
              <p className="text-gray-300 mb-2 text-sm sm:text-base">
                B.Tech in Information Technology
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mb-2">Sep 2021 – May 2025</p>
              <p className="text-emerald-400 font-semibold text-xs sm:text-sm">CGPA: 9.00/10.00</p>
            </div>

            <div className="bg-slate-800 p-4 sm:p-6 rounded-lg">
              <div className="flex items-center mb-3 sm:mb-4">
                <School className="text-emerald-400 mr-2 sm:mr-3 flex-shrink-0" size={20} />
                <h4 className="text-white font-semibold text-sm sm:text-base">
                  Padma Seshadri Bala Bhavan
                </h4>
              </div>
              <p className="text-gray-300 mb-2 text-sm sm:text-base">
                Higher Secondary (Class 11 & 12)
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mb-2">
                June 2019 – April 2021
              </p>
              <p className="text-emerald-400 font-semibold text-xs sm:text-sm">CBSE Curriculum</p>
            </div>
          </div>
        </div>

        {/* <h3 className="text-3xl font-bold text-emerald-400 text-center mb-8">My Tech Arsenal</h3> */}
      </div>
    </section>
  );
};

export default About;
