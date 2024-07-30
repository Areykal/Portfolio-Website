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
      description="Welcome to the portfolio of Areykal Ho, a software developer."
      keywords="software developer, web development, artificial intelligence"
      schema={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Areykal Ho",
        url: "https://www.areykalho.com",
        jobTitle: "Software Developer",
        description:
          "Areykal Ho is a software developer.",
      }}
    />
    <Hero />
    <AboutMe />
    <Projects />
    <ContactSection />
  </>
);

export default HomePage;
