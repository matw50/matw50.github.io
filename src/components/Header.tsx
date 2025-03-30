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

  // Function for smooth scrolling without router involvement
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Prevent default anchor behavior
    
    console.log(`HEADER: Anchor link clicked for #${id}`);
    console.log(`HEADER: Current URL before click: ${window.location.href}`);
    
    // Check if the element exists before attempting to scroll
    const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
    console.log(`HEADER: All IDs available in DOM:`, allIds);
    
    const element = document.getElementById(id);
    
    if (element) {
      console.log(`HEADER: Element #${id} found, scrolling directly`);
      console.log(`HEADER: Element details:`, {
        offsetTop: element.offsetTop,
        offsetHeight: element.offsetHeight,
        isVisible: element.offsetWidth > 0 && element.offsetHeight > 0
      });
      
      // Ensure element is visible before scrolling (especially for animated elements)
      if (element.classList.contains('opacity-0')) {
        console.log(`HEADER: Element #${id} has opacity-0 class, making it visible first`);
        element.classList.remove('opacity-0');
        element.classList.add('opacity-100');
      }
      
      // Scroll with a slight delay to ensure any class changes take effect
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log(`HEADER: Scrolled to element #${id}`);
        
        // Update URL without triggering navigation
        window.history.pushState(null, '', `#${id}`);
        console.log(`HEADER: Updated URL to ${window.location.href}`);
      }, 100);
    } else {
      console.error(`HEADER: Element with id="${id}" not found`);
      console.log(`HEADER: Document body HTML:`, document.body.innerHTML.substring(0, 500) + '...');
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
