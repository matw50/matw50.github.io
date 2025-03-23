
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-deep text-white/60 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <img
                src="/lovable-uploads/4c32ddf5-62a6-4870-bfc5-a7e09b554e08.png"
                alt="Spectrify Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-gold font-playfair text-xl font-medium">Spectrify</span>
            </div>
            <p className="text-sm mt-2 text-center md:text-left">
              Elevating digital experiences through elegant design.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8 md:mb-0">
            <div>
              <h4 className="text-white font-medium mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gold transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">Careers</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gold transition-colors">Sommify</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">Our Portfolio</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">Roadmap</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gold transition-colors">Twitter</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">Instagram</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs">
            © {currentYear} Spectrify. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs hover:text-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs hover:text-gold transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
