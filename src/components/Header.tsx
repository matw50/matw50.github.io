import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Function to handle navigation with HashRouter
  const handleNavigation = (sectionId: string) => {
    console.log(`Navigation to section: ${sectionId}`);
    
    // With HashRouter, we need to navigate to /#sectionId format
    // This will update the URL without causing a page reload
    navigate(`/#${sectionId}`);
    
    // Then manually scroll to the element
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        console.log(`Found element #${sectionId}, scrolling...`);
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.log(`Element #${sectionId} not found`);
      }
    }, 100);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-10",
        scrolled
          ? "bg-dark-deep/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <span className="text-gold font-playfair text-2xl font-bold tracking-tight">
            Spectrify
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleNavigation("features")}
            className="text-sm text-white/80 hover:text-gold transition-colors duration-200"
          >
            Features
          </button>
          <button
            onClick={() => handleNavigation("about")}
            className="text-sm text-white/80 hover:text-gold transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => handleNavigation("signup")}
            className="text-sm text-white/80 hover:text-gold transition-colors duration-200"
          >
            Sign Up
          </button>
        </nav>
        <div className="md:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
