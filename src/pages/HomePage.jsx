import React from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ContactSection from "../components/ContactSection";
import SEO from "../components/SEO";

const HomePage = () => (
  <>
    <SEO
      title="Home"
      description="Welcome to the portfolio of Areykal Ho, a software developer specializing in Software and Data Engineering."
      keywords="software developer, web development, artificial intelligence"
    />
    <Hero />
    <AboutMe />
    <Projects />
    <ContactSection />
  </>
);

export default HomePage;
