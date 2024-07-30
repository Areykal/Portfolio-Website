import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScroll = () => {
      toggleVisibility();
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (footer) {
      footerRef.current = footer;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsFooterVisible(entry.isIntersecting);
        },
        { threshold: 0.1 } // Trigger when 10% of the footer is visible
      );

      observer.observe(footer);

      return () => observer.disconnect();
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible || isFooterVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed z-50 p-3 transition-all duration-300 bg-blue-400 rounded-full shadow-lg text-slate-900 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 bottom-20 right-5 sm:bottom-5 sm:right-8 md:bottom-8 md:right-10 lg:bottom-10 lg:right-12"
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollToTop;
