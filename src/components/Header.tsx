import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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

  // Function for smooth scrolling without router involvement
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Prevent default anchor behavior
    
    console.log(`Attempting direct scroll to #${id}`);
    const element = document.getElementById(id);
    
    if (element) {
      console.log(`Element #${id} found, scrolling directly`);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Update URL without triggering navigation
      window.history.pushState(null, '', `#${id}`);
    } else {
      console.error(`Element with id="${id}" not found`);
    }
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
          <a
            href="#features"
            onClick={(e) => scrollToSection(e, "features")}
            className="text-sm text-white/80 hover:text-gold transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="text-sm text-white/80 hover:text-gold transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#signup"
            onClick={(e) => scrollToSection(e, "signup")}
            className="text-sm text-white/80 hover:text-gold transition-colors duration-200"
          >
            Sign Up
          </a>
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
