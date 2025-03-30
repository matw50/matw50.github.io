import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

// Component to log route changes
const RouteLogger = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.log('ROUTER: Route changed:', {
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
      state: location.state,
      key: location.key
    });
  }, [location]);
  
  return null;
};

// Simple component to handle initial hash scrolling on page load
const InitialHashHandler = () => {
  const [attempts, setAttempts] = useState(0);
  const location = useLocation();
  
  useEffect(() => {
    console.log("APP: InitialHashHandler mounted");
    console.log("APP: Current location:", {
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
      state: location.state
    });
    
    // Check for hash in URL on initial load
    const hash = window.location.hash;
    if (!hash) {
      console.log("APP: No hash detected in URL");
      return;
    }
    
    console.log(`APP: Initial page load detected hash: ${hash}`);
    
    // Log all elements with IDs
    console.log("APP: All elements with IDs at mount time:");
    document.querySelectorAll('[id]').forEach(el => {
      console.log(`- Element with ID: ${el.id}`);
    });
    
    // Try to find the element multiple times with increasing delays
    const maxAttempts = 15; // Increase max attempts
    
    if (attempts < maxAttempts) {
      const delay = Math.min(300 * (attempts + 1), 2000); // Gradually increase delay, max 2 seconds
      
      const timer = setTimeout(() => {
        try {
          // Extract the ID by removing the leading # character(s)
          const id = hash.replace(/^#+/, '');
          console.log(`APP: Looking for element with ID: "${id}", attempt ${attempts + 1}/${maxAttempts}`);
          
          // Debug log all elements with IDs again
          const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
          console.log(`APP: All IDs in DOM (attempt ${attempts + 1}):`, allIds);
          
          const element = document.getElementById(id);
          if (element) {
            console.log(`APP: Element with ID "${id}" found on attempt ${attempts + 1}, details:`, {
              tagName: element.tagName,
              className: element.className,
              offsetTop: element.offsetTop,
              offsetHeight: element.offsetHeight,
              isVisible: element.offsetWidth > 0 && element.offsetHeight > 0,
              hasOpacityZero: element.classList.contains('opacity-0')
            });
            
            // Ensure element is visible
            if (element.classList.contains('opacity-0')) {
              console.log(`APP: Element has opacity-0 class, making it visible first`);
              element.classList.remove('opacity-0');
              element.classList.add('opacity-100');
            }
            
            // Use a small delay to ensure the element is fully rendered
            setTimeout(() => {
              console.log(`APP: Scrolling to element ID "${id}"`);
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              console.log(`APP: Scroll complete`);
            }, 100);
            
            // Success, no more attempts needed
            return;
          } else {
            console.warn(`APP: Element with ID "${id}" not found on attempt ${attempts + 1}, will retry...`);
            
            // Debug - Check if features exists but with different case
            const featuresCaseInsensitive = document.querySelector(`[id^="${id}"i]`);
            if (featuresCaseInsensitive) {
              console.log(`APP: Found element with similar ID (case insensitive): ${featuresCaseInsensitive.id}`);
            }
            
            // Increment attempts for next try
            setAttempts(prev => prev + 1);
          }
        } catch (error) {
          console.error('APP: Error handling initial hash navigation:', error);
        }
      }, delay);
      
      return () => clearTimeout(timer);
    } else {
      console.error(`APP: Failed to find element after ${maxAttempts} attempts`);
      console.log("APP: Final DOM state - all elements with IDs:");
      document.querySelectorAll('[id]').forEach(el => {
        console.log(`- Element with ID: ${el.id}, tagName: ${el.tagName}, className: ${el.className}`);
      });
    }
  }, [attempts, location]);
  
  return null;
};

// Get the correct base URL for GitHub Pages (empty for HashRouter)
const basename = process.env.NODE_ENV === 'production' ? '' : '';

const App = () => {
  useEffect(() => {
    console.log("APP: App component mounted");
    console.log("APP: Initial URL:", window.location.href);
    console.log("APP: Environment:", process.env.NODE_ENV);
    console.log("APP: Using basename:", basename);
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Using BrowserRouter with direct hash links */}
        <BrowserRouter basename={basename}>
          <RouteLogger />
          <InitialHashHandler />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            
            {/* Special routes for hash navigation that just redirect to the main page with hash */}
            <Route path="/features" element={<Navigate to="/#features" replace />} />
            <Route path="/about" element={<Navigate to="/#about" replace />} />
            <Route path="/signup" element={<Navigate to="/#signup" replace />} />
            
            {/* All other routes show 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
