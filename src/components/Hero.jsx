import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 text-center bg-gradient-to-r from-slate-800 to-slate-900 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold text-blue-400 sm:text-5xl md:text-7xl animate-fadeIn">
          Software Developer
        </h1>
        <p className="mb-12 text-lg text-slate-400 sm:text-xl md:text-2xl animate-fadeIn animation-delay-300">
          Crafting elegant solutions for tomorrow's challenges
        </p>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 animate-fadeIn animation-delay-600">
          <a
            href="#contact-section"
            onClick={(e) => scrollToSection(e, "contact-section")}
            className="px-8 py-3 font-semibold transition-colors duration-300 bg-blue-400 rounded-full text-slate-900 hover:bg-blue-500"
          >
            Get in Touch
          </a>
          <a
            href="#projects-section"
            onClick={(e) => scrollToSection(e, "projects-section")}
            className="px-8 py-3 font-semibold text-blue-400 transition-colors duration-300 bg-transparent border-2 border-blue-400 rounded-full hover:bg-blue-400 hover:text-slate-900"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
