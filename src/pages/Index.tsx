import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AppStoreShowcase from "@/components/AppStoreShowcase";
import Features from "@/components/Features";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Sommify by Spectrify — Now on the App Store";
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden">
      <Header />
      {/* App Store promo banner */}
      <section className="mt-16 md:mt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <a
            href="https://apps.apple.com/gb/app/sommify/id6749514313"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl border border-gold/30 bg-gold/10 hover:bg-gold/15 transition-colors"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-5 py-3">
              <div className="flex items-center gap-3 text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M16.365 1.43c.083-.103.16-.213.229-.33a5.3 5.3 0 01-1.35.389 2.69 2.69 0 001.163-1.53 5.34 5.34 0 01-1.7.65A2.673 2.673 0 0013.1 0c-1.48 0-2.68 1.201-2.68 2.681 0 .21.023.417.068.613A7.6 7.6 0 015.1.275a2.68 2.68 0 00-.363 1.348c0 .93.473 1.75 1.19 2.23a2.663 2.663 0 01-1.215-.336v.034c0 1.3.924 2.383 2.15 2.63a2.69 2.69 0 01-1.21.046c.341 1.064 1.328 1.84 2.5 1.862A5.368 5.368 0 014.8 9.51 7.57 7.57 0 009.9 11c4.72 0 7.3-3.913 7.3-7.305 0-.112-.003-.224-.008-.334A5.212 5.212 0 0018 1.76a5.23 5.23 0 01-1.635.448z" />
                </svg>
                <span className="text-sm font-medium">Sommify is now on the App Store</span>
              </div>
              <div className="text-xs text-white/70">
                Free • iOS 14.0+ • Food & Drink • 17+
              </div>
            </div>
          </a>
        </div>
      </section>
      <Hero />
      <AppStoreShowcase />
      <Features />
      
      <section id="about" className="py-24 px-4 relative">
        <div className="absolute inset-0" style={{ 
          background: "linear-gradient(to bottom, #1A1A1A 0%, #121212 100%)"
        }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="animated-border-box">
                <div className="glass p-1">
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent opacity-70"></div>
                    <img
                      src="lovable-uploads/4c32ddf5-62a6-4870-bfc5-a7e09b554e08.png"
                      alt="Spectrify Logo"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
            


            <div className="text-center md:text-left order-1 md:order-2">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gold/10 text-gold border border-gold/20 mb-4">
                About Spectrify
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
                Crafting <span className="golden-text">Digital Elegance</span> Through Innovation
              </h2>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                Spectrify is a premium design and development studio dedicated to creating sophisticated digital experiences. Our flagship application, Sommify, represents our commitment to combining beautiful design with practical utility.
              </p>
              
              <p className="text-white/70 mb-8 leading-relaxed">
                Founded by a team of passionate designers and engineers, we believe that technology should be both beautiful and functional. Every pixel, every interaction, and every feature is crafted with intention and care.
              </p>
              
              <a
                href="#signup"
                className="inline-block px-6 py-3 border border-gold/50 text-gold rounded-full hover:bg-gold hover:text-dark-deep transition-all duration-300"
              >
                Join Our Journey
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Index;