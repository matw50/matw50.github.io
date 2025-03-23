
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Update document title
    document.title = "Page Not Found | Spectrify";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark px-4 text-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_30%,transparent_80%)]"></div>
      </div>
      
      <div className="relative z-10 max-w-md">
        <h1 className="text-9xl font-bold text-gold mb-4 font-playfair golden-text">404</h1>
        <h2 className="text-2xl font-semibold mb-6 text-white">Page Not Found</h2>
        <p className="text-white/70 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-gold text-dark font-medium rounded-full hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-gold/20"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
