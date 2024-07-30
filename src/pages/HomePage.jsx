import React from "react";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ContactSection from "../components/ContactSection";

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Areykal Ho",
    url: "https://www.areykalho.netlify.app",
    jobTitle: "Software Developer",
    description:
      "Areykal Ho is a junior Information and Communications Technology student specializing in Software and Data Engineering.",
    sameAs: [
      "https://github.com/Areykal",
      "https://linkedin.com/in/areykal-ho",
      "https://t.me/Areykal",
    ],
  };

  return (
    <>
      <SEO
        title="Home"
        description="Welcome to the portfolio of Areykal Ho, a software developer specializing in Software and Data Engineering."
        keywords="software developer, web development, data engineering, Areykal Ho"
        url="/"
        image="/images/og-home.jpg"
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <Hero />
      <AboutMe />
      <Projects />
      <ContactSection />
    </>
  );
};

export default HomePage;
