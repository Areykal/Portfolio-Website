import React, { useState, useRef, useEffect } from "react";

const LazyImage = ({ src, alt, className, sizes }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = src;
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: "100px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`lazy-image-container ${className}`}>
      <img
        ref={imgRef}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleImageLoad}
        sizes={sizes}
      />
      {!isLoaded && (
        <div
          className="bg-gray-300 lazy-image-placeholder animate-pulse"
          style={{ aspectRatio: "16/9" }}
        />
      )}
    </div>
  );
};

export default LazyImage;
