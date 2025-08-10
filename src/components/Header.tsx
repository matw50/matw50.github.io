import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log("Header component mounted");
    
    // Log the IDs of all elements in the DOM for debugging
    console.log("Available elements with IDs on page load:");
    document.querySelectorAll('[id]').forEach(el => {
      console.log(`Found element with ID: ${el.id}`);
    });
    
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

  // Simplified scroll function that doesn't use SPA routing at all
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          {/* Use regular hash links with smooth scroll handlers */}
          <a
            href="#features"
            onClick={(e) => smoothScroll(e, "features")}
            className="text-sm text-white/80 hover:text-gold transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#about"
            onClick={(e) => smoothScroll(e, "about")}
            className="text-sm text-white/80 hover:text-gold transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#signup"
            onClick={(e) => smoothScroll(e, "signup")}
            className="text-sm text-white/80 hover:text-gold transition-colors duration-200"
          >
            Sign Up
          </a>
          <a
            href="/support"
            className="text-sm text-white/80 hover:text-gold transition-colors duration-200"
          >
            Support
          </a>
          <a
            href="https://apps.apple.com/gb/app/sommify/id6749514313"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm bg-gold text-dark font-medium px-3 py-1 rounded-full hover:bg-gold-light transition-colors"
          >
            App Store
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
