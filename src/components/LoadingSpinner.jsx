import React from "react";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="w-32 h-32 border-t-2 border-b-2 border-teal-500 rounded-full animate-spin"></div>
  </div>
);

export default LoadingSpinner;
