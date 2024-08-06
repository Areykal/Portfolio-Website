import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../components/LoadingSpinner";
import SEO from "../components/SEO";

// Lazy load components
const Hero = lazy(() => import("../components/Hero"));
const AboutMe = lazy(() => import("../components/AboutMe"));
const Projects = lazy(() => import("../components/Projects"));
const ContactSection = lazy(() => import("../components/ContactSection"));

const HomePage = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Areykal Ho",
    url: "https://www.areykalho.dev",
    jobTitle: "Software Developer",
    description:
      "Areykal Ho is a junior Information and Communications Technology student specializing in Software and Data Engineering.",
    sameAs: [
      "https://github.com/Areykal",
      "https://linkedin.com/in/areykal-ho",
      "https://t.me/Areykal",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "American University of Phnom Penh",
      sameAs: "https://www.aupp.edu.kh/",
    },
    knowsAbout: [
      "Software Development",
      "Web Development",
      "Mobile App Development",
      "Data Engineering",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Areykal Ho Portfolio",
    url: "https://www.areykalho.dev",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.areykalho.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        position: 1,
        name: "Student Info System",
        applicationCategory: "UtilityApplication",
        operatingSystem: "Windows, macOS, Linux",
        description:
          "A command-line interface application for managing student information.",
        url: "https://github.com/Areykal/student-information-system",
      },
      {
        "@type": "SoftwareApplication",
        position: 2,
        name: "MovieDB",
        applicationCategory: "EntertainmentApplication",
        operatingSystem: "Android",
        description:
          "An Android application for browsing and searching movie information.",
        url: "https://github.com/Areykal/MovieDB_App",
      },
      {
        "@type": "WebApplication",
        position: 3,
        name: "Freshly Baked",
        applicationCategory: "WebApplication",
        description:
          "A responsive website for a fictional bakery, showcasing products and allowing customers to place orders online.",
        url: "https://github.com/Areykal/Freshly-Baked",
      },
      {
        "@type": "MobileApplication",
        position: 4,
        name: "AUPP App",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Android, iOS",
        description:
          "A cross-platform mobile application for university students to access course information, schedules, and campus news.",
        url: "https://github.com/Areykal/Aupp-App",
      },
      {
        "@type": "MobileApplication",
        position: 5,
        name: "Helping Hands",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Android, iOS",
        description:
          "A volunteer management app that connects volunteers with local community service opportunities.",
        url: "https://github.com/Areykal/Helping-Hands",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Areykal Ho - Software Developer Portfolio"
        description="Welcome to the portfolio of Areykal Ho, a software developer specializing in Software and Data Engineering. Explore my projects in web development, mobile app development, and more."
        keywords="areykal, areykal ho, ho areykal, software developer, software engineer, web development, mobile app development, ICT student, data engineering, Cambodia"
        url="/"
        type="website"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(projectsSchema)}
        </script>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          media="print"
          onload="this.media='all'"
        />
      </Helmet>
      <main id="main-content">
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <AboutMe />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <ContactSection />
        </Suspense>
      </main>
    </>
  );
};

export default HomePage;
