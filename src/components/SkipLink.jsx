import React from "react";

const SkipLink = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-blue-500 focus:text-white focus:p-4"
  >
    Skip to main content
  </a>
);

export default SkipLink;
