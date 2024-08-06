import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
        <h1
          className={`mb-6 text-4xl font-bold text-blue-400 sm:text-5xl md:text-7xl transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Areykal Ho: Software Developer & ICT Student
        </h1>
        <p
          className={`mb-12 text-lg text-slate-400 sm:text-xl md:text-2xl transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Crafting elegant solutions for web and mobile applications,
          specializing in Software and Data Engineering
        </p>

        <div
          className={`flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 transition-all duration-1000 ease-out delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#contact-section"
            onClick={(e) => scrollToSection(e, "contact-section")}
            className="px-8 py-3 font-semibold transition-all duration-300 transform bg-blue-400 rounded-full text-slate-900 hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1 animate-pulse"
          >
            Get in Touch
          </a>
          <a
            href="#projects-section"
            onClick={(e) => scrollToSection(e, "projects-section")}
            className="px-8 py-3 font-semibold text-blue-400 transition-all duration-300 transform bg-transparent border-2 border-blue-400 rounded-full hover:bg-blue-400 hover:text-slate-900 hover:shadow-lg hover:-translate-y-1"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
