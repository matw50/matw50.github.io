
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Sommify by Spectrify - Coming Soon";
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden">
      <Header />
      <Hero />
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
                      src="./lovable-uploads/4c32ddf5-62a6-4870-bfc5-a7e09b554e08.png"
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
