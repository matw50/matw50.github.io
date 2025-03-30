import React, { useRef, useState, useEffect } from "react";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Add logging for component lifecycle
  console.log('SIGNUP: Component rendering');

  useEffect(() => {
    console.log('SIGNUP: Component mounted');
    
    // Check if this section is targeted by hash
    const isTargetedByHash = window.location.hash.includes('signup');
    console.log(`SIGNUP: Current hash is ${window.location.hash}, isTargetedByHash = ${isTargetedByHash}`);
    
    if (isTargetedByHash) {
      console.log('SIGNUP: Section is targeted by hash');
      
      // Log whether the element exists
      const element = document.getElementById('signup');
      if (element) {
        console.log('SIGNUP: Found signup element, details:', {
          id: element.id,
          className: element.className,
          isVisible: element.offsetWidth > 0 && element.offsetHeight > 0,
          offsetTop: element.offsetTop,
          offsetHeight: element.offsetHeight
        });
      } else {
        console.error('SIGNUP: Could not find signup element even though it should exist');
      }
    }
    
    // Log all elements with IDs for debugging
    console.log('SIGNUP: All elements with IDs at EmailSignup mount time:');
    document.querySelectorAll('[id]').forEach(el => {
      console.log(`- Element with ID: ${el.id}`);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    setError("");
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="signup"
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #121212 0%, #1A1A1A 100%)"
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute -inset-[10px] opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_30%,transparent_80%)]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            <span className="golden-text">Be The First</span> to Experience Sommify
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Join our exclusive waiting list to receive early access and special offers when we launch.
          </p>
        </div>
        
        <div className="animated-border-box max-w-xl mx-auto overflow-hidden">
          <div className="glass p-8 md:p-10">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <label htmlFor="email" className="block text-sm font-medium text-white/80">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-light/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 text-white placeholder-white/40 transition-all duration-200"
                  disabled={isSubmitting}
                />
                {error && <p className="text-red-400 text-xs">{error}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                  isSuccess
                    ? "bg-green-500 text-white"
                    : "bg-gold hover:bg-gold-light text-dark-deep hover:shadow-lg hover:shadow-gold/20"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center justify-center">
                    <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Thank you! You're on the list
                  </span>
                ) : (
                  "Get Notified"
                )}
              </button>
              
              <p className="text-xs text-white/60 text-center pt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
