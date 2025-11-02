import { Linkedin, Github, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-6 sm:mb-8">
          Get In Touch
        </h2>

        <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
          I'm currently open to new opportunities and collaborations. Whether
          you have a project in mind, a question, or just want to say hi, my
          inbox is always open. I'll try my best to get back to you!
        </p>

        <div className="flex flex-col items-center gap-6 sm:gap-10 mb-4">
          <a
            href="mailto:manoj03.work@gmail.com"
            className="bg-emerald-400 text-slate-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded font-semibold hover:bg-emerald-300 transition-all text-sm sm:text-base"
          >
            Say Hello
          </a>

          <div className="flex justify-center space-x-4 sm:space-x-6 mt-4 sm:mt-12 p-4 sm:p-6">
            <a
              href="https://www.linkedin.com/in/kmanoj03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://github.com/kmanoj03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:manoj03.work@gmail.com"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
