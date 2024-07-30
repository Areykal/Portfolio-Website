import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import LazyImage from "./LazyImage";
import ScrollToTop from "./ScrollToTop";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = ["About", "Projects", "Contact"];

  return (
    <>
      <header
        className={`fixed w-full z-10 transition-all duration-300 ${
          isScrolled ? "bg-slate-800 shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="#"
              onClick={scrollToTop}
              className="flex items-center"
            >
              <LazyImage
                src="/images/logo.webp"
                alt="Areykal Ho Logo"
                className="w-10 h-10" // Adjust the size as needed
              />
            </a>

            {/* Desktop Menu */}
            <nav className="hidden space-x-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}-section`}
                  onClick={(e) =>
                    scrollToSection(e, `${item.toLowerCase()}-section`)
                  }
                  className="transition-colors duration-300 text-slate-400 hover:text-blue-400"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="transition-colors duration-300 text-slate-400 md:hidden hover:text-blue-400"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                size="lg"
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mt-4`}>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}-section`}
                  onClick={(e) => {
                    scrollToSection(e, `${item.toLowerCase()}-section`);
                    setIsMenuOpen(false);
                  }}
                  className="transition-colors duration-300 text-slate-400 hover:text-blue-400"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <ScrollToTop />
    </>
  );
};

export default Header;
