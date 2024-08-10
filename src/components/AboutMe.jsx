import React, { useState, useEffect, useRef } from "react";
import LazyImage from "./LazyImage";
import aboutMeImg from "@/assets/images/aboutMeImg.webp";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="about-section"
      ref={aboutRef}
      className="py-16 bg-slate-800 sm:py-20"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row">
          <div
            className={`mb-8 md:w-1/2 md:mb-0 transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <LazyImage
              src={aboutMeImg}
              alt="Developer working"
              className={`w-full max-w-md mx-auto rounded-lg shadow-xl transition-transform duration-1000 ${
                isVisible ? "translate-x-0" : "-translate-x-full"
              }`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div
            className={`md:w-1/2 md:pl-12 transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2
              className={`mb-4 text-3xl font-bold text-blue-400 sm:text-4xl transition-transform duration-1000 ${
                isVisible ? "translate-y-0" : "translate-y-10"
              }`}
            >
              About Me
            </h2>
            <h3
              className={`mb-6 text-xl text-slate-300 transition-transform duration-1000 delay-200 ${
                isVisible ? "translate-y-0" : "translate-y-10"
              }`}
            >
              Passionate developer, creative problem solver
            </h3>
            <p
              className={`mb-6 leading-relaxed text-slate-400 transition-transform duration-1000 delay-400 ${
                isVisible ? "translate-y-0" : "translate-y-10"
              }`}
            >
              I'm Areykal Ho, a junior Information and Communications Technology
              student specializing in Software and Data Engineering. Aspiring to
              become a software developer, I'm building a strong foundation in
              both theoretical concepts and practical applications. Outside of
              my studies, I'm passionate about photography, video games, and
              volleyball - hobbies that enhance my creativity, strategic
              thinking, and teamwork skills.
            </p>
            <a
              href="#projects-secion"
              onClick={(e) => scrollToSection(e, "projects-section")}
              className={`inline-block px-6 py-3 font-semibold transition-all duration-300 bg-blue-400 rounded-full text-slate-900 hover:bg-blue-500 hover:shadow-lg ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Explore My Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
