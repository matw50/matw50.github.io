import React from "react";

const APP_STORE_URL = "https://apps.apple.com/gb/app/sommify/id6749514313";

const AppStoreShowcase: React.FC = () => {
  const iconSrc = "lovable-uploads/sommify_icon.jpeg";
  const screenshot1Src = "lovable-uploads/screenshot1.png";
  const screenshot2Src = "lovable-uploads/screenshot2.png";

  return (
    <section
      className="relative py-16 px-4"
      style={{ background: "linear-gradient(to bottom, #121212 0%, #1A1A1A 100%)" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_40%,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full text-xs font-medium bg-gold/10 text-gold border border-gold/20">
              <span>Now on the App Store</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-playfair">
              Experience <span className="golden-text">Sommify</span>
            </h3>
            <p className="text-white/70 max-w-md mx-auto md:mx-0">
              AI wine menu scanner with ratings, tasting notes, and personalized pairing suggestions.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
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

          <div className="grid grid-cols-3 gap-4 items-end">
            <div className="col-span-1">
              <div className="glass p-2 rounded-lg">
                <img
                  src={iconSrc}
                  alt="Sommify Icon"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="glass p-2 rounded-lg">
                <img
                  src={screenshot1Src}
                  alt="Sommify Screenshot 1"
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="glass p-2 rounded-lg">
                <img
                  src={screenshot2Src}
                  alt="Sommify Screenshot 2"
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStoreShowcase;

