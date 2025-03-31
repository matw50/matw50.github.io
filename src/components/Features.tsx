import React, { useEffect, useRef, useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  delay,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.add('translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`glass-card p-6 md:p-8 opacity-0 translate-y-8 transition-all duration-700 ${delay}`}
    >
      <div className="rounded-full bg-gold/10 w-12 h-12 flex items-center justify-center mb-5 text-gold">
        {icon}
      </div>
      <h3 className="font-playfair text-xl font-semibold mb-3 text-white">
        {title}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Log component lifecycle and visibility state
  console.log('FEATURES: Component rendering with isVisible =', isVisible);

  useEffect(() => {
    console.log('FEATURES: Component mounted');
    
    // Check if this section is targeted by hash
    const isTargetedByHash = window.location.hash.includes('features');
    console.log(`FEATURES: Current hash is ${window.location.hash}, isTargetedByHash = ${isTargetedByHash}`);
    
    if (isTargetedByHash) {
      console.log(`FEATURES: Section is targeted by hash, setting visible immediately`);
      setIsVisible(true);
      
      // Force the element to be visible right away
      setTimeout(() => {
        const element = document.getElementById('features');
        if (element) {
          console.log('FEATURES: Found features element, ensuring visibility');
          element.classList.remove('opacity-0');
          element.classList.add('opacity-100');
          
          // Log element details
          console.log('FEATURES: Element details:', {
            id: element.id,
            className: element.className,
            isVisible: element.offsetWidth > 0 && element.offsetHeight > 0,
            offsetTop: element.offsetTop,
            offsetHeight: element.offsetHeight
          });
        } else {
          console.error('FEATURES: Could not find features element to ensure visibility');
        }
      }, 0);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(`FEATURES: Intersection observer triggered, isIntersecting = ${entry.isIntersecting}`);
        if (entry.isIntersecting) {
          console.log('FEATURES: Element is now intersecting, setting visible');
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      console.log('FEATURES: Observing section ref');
      observer.observe(sectionRef.current);
    } else {
      console.warn('FEATURES: Section ref is null, cannot observe');
    }

    return () => {
      console.log('FEATURES: Component unmounting, cleaning up observer');
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Log when the visibility state changes
  useEffect(() => {
    console.log(`FEATURES: Visibility changed to ${isVisible}`);
    
    // Debug: check if the element exists and log its details
    const element = document.getElementById('features');
    if (element) {
      console.log('FEATURES: Features element details after visibility change:', {
        id: element.id,
        className: element.className,
        isVisible: element.offsetWidth > 0 && element.offsetHeight > 0
      });
    }
  }, [isVisible]);

  return (
    <section
      id="features"
      ref={sectionRef}
      className={`relative py-20 px-4 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: "linear-gradient(to bottom, #1A1A1A 0%, #121212 100%)"
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_40%,transparent_70%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4 opacity-0 animate-fade-in">
            <span className="golden-text">Sophisticated CHANGED</span> Features
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto opacity-0 animate-fade-in delay-1">
            Sommify combines cutting-edge technology with an elegant user experience to transform how you discover and enjoy wine.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            title="AI Wine Recognition"
            description="Instantly identify any wine by simply taking a photo of the label. Our advanced AI provides detailed information about origin, vintage, and flavor profiles."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            }
            delay="delay-1"
          />
          
          <FeatureCard
            title="Personal Wine Journal"
            description="Keep track of your tastings with a beautiful digital journal. Rate wines, add notes, and revisit your favorites with our elegant organizational tools."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            }
            delay="delay-2"
          />
          
          <FeatureCard
            title="Flavor Profile Analysis"
            description="Understand the unique characteristics of each wine with our detailed flavor profile analysis. Learn about tannins, acidity, body, and more."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
            delay="delay-3"
          />
          
          <FeatureCard
            title="Food Pairing Suggestions"
            description="Discover the perfect dishes to complement your wine selection. Get expert recommendations tailored to enhance your dining experience."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            delay="delay-4"
          />
          
          <FeatureCard
            title="Cellar Management"
            description="Organize your wine collection with ease. Track inventory, optimal drinking windows, and value appreciation over time."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            }
            delay="delay-5"
          />
          
          <FeatureCard
            title="Social Sharing"
            description="Share your discoveries with friends and fellow enthusiasts. Create curated lists and recommendations for different occasions."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            }
            delay="delay-6"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
