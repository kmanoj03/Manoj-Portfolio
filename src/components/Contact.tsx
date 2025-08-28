import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-emerald-400 mb-8">
          Get In Touch
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          I'm currently open to new opportunities and collaborations. Whether
          you have a project in mind, a question, or just want to say hi, my
          inbox is always open. I'll try my best to get back to you!
        </p>

        {/* <button className="bg-emerald-400 text-slate-900 px-8 py-3 rounded font-semibold hover:bg-emerald-300 transition-all mb-12">
          Say Hello
        </button> */}
        {/* 
        <a
          href="mailto:manoj03.work@gmail.com"
          className="bg-emerald-400 text-slate-900 px-8 py-3 rounded font-semibold hover:bg-emerald-300 transition-all mb-12 inline-block"
        >
          Say Hello
        </a>

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
        </div> */}

        <div className="flex flex-col items-center gap-10 mb-4">
          <a
            href="mailto:manoj03.work@gmail.com"
            className="bg-emerald-400 text-slate-900 px-8 py-3 rounded font-semibold hover:bg-emerald-300 transition-all"
          >
            Say Hello
          </a>

          <div className="flex justify-center space-x-6 mt-12 p-6">
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
      </div>
    </section>
  );
};

export default Contact;
