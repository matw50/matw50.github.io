import React, { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 opacity-0 transition-opacity duration-1000"
      style={{
        background: "linear-gradient(to bottom, #121212 0%, #1A1A1A 100%)"
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_80%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-6">
            <div className="inline-block opacity-0 animate-fade-in delay-0">
              <a
                href="https://apps.apple.com/gb/app/sommify/id6749514313"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full text-xs font-medium bg-gold/10 text-gold border border-gold/20 hover:bg-gold/20 transition-colors"
              >
                Now on the App Store
              </a>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-playfair opacity-0 animate-fade-in delay-1">
              <span className="block">Introducing</span>
              <span className="golden-text">Sommify</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-md mx-auto md:mx-0 opacity-0 animate-fade-in delay-2">
              AI wine menu scanner and pairings. Snap a photo of any wine menu and get ratings, tasting notes, and personalized pairing suggestions instantly.
            </p>
            
            <div className="pt-4 opacity-0 animate-fade-in delay-3">
              <a 
                href="https://apps.apple.com/gb/app/sommify/id6749514313" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 hover:-translate-y-1"
                aria-label="Download on the App Store"
              >
                <img
                  src="lovable-uploads/app_store_icon.svg"
                  alt="Download on the App Store"
                  className="h-10 md:h-12 w-auto"
                />
              </a>
            </div>
          </div>
          
          <div className="relative md:order-last order-first">
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto opacity-0 animate-fade-in delay-3">
              <div className="absolute inset-0 rounded-full bg-gold/20 blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center animate-float">
                <img
                  src="lovable-uploads/ff991625-2118-4bff-b438-da6184734610.png"
                  alt="Sommify App Icon"
                  className="w-3/4 h-3/4 object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#features" className="text-white/60 hover:text-gold transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
