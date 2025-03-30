
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    // Update document title
    document.title = "Privacy Policy | Spectrify";
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 font-playfair text-center">
            <span className="golden-text">Spectrify Privacy Policy</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/80 mb-6">
              Your privacy matters to us at Spectrify. This policy explains how we handle your information.
            </p>
            
            <h2 className="text-xl font-bold text-gold mt-8 mb-4">Data Collection:</h2>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Photos taken with the app for wine menu analysis</li>
              <li>Device information for enhancing user experience</li>
              <li>Usage data for improving app functionality</li>
            </ul>
            
            <h2 className="text-xl font-bold text-gold mt-8 mb-4">Use of Data:</h2>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Analyze wine menus and provide ratings, pairings, and recommendations</li>
              <li>Improve app services and user experience</li>
              <li>Facilitate social sharing features</li>
            </ul>
            
            <h2 className="text-xl font-bold text-gold mt-8 mb-4">Data Sharing:</h2>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>We never sell your data to third parties</li>
              <li>Limited sharing with trusted third parties only for app functionality (e.g., cloud storage providers)</li>
            </ul>
            
            <h2 className="text-xl font-bold text-gold mt-8 mb-4">Security:</h2>
            <p className="text-white/80 mb-6">
              We employ industry-standard measures to protect your data.
            </p>
            
            <h2 className="text-xl font-bold text-gold mt-8 mb-4">User Rights:</h2>
            <p className="text-white/80 mb-6">
              Access, correct, or delete personal data upon request
            </p>
            
            <p className="text-white/80 mt-8">
              By using Spectrify, you consent to this privacy policy.
            </p>
            
            <p className="text-white/80 mt-8">
              Contact us with questions or requests regarding your data privacy at{" "}
              <a href="mailto:info@spectrify.co.uk" className="text-gold hover:underline">
                info@spectrify.co.uk
              </a>.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
