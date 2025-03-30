import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

// ScrollToTop component will handle scrolling on route changes
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Log the current URL information for debugging
    console.log('Current pathname:', pathname);
    console.log('Current hash:', hash);
    
    // First make sure we scroll to the top if there's no hash
    if (!hash) {
      console.log('No hash detected, scrolling to top');
      window.scrollTo(0, 0);
      return;
    }
    
    // If there's a hash, handle the scrolling with a delay
    console.log(`Detected hash: ${hash}, will attempt to scroll`);
    
    // Clean the hash (remove the # character)
    const id = hash.replace('#', '');
    
    // Use a longer delay to ensure the page is fully rendered
    const scrollTimer = setTimeout(() => {
      try {
        console.log(`Trying to find element with ID: ${id}`);
        const element = document.getElementById(id);
        if (element) {
          console.log(`Element found for #${id}, scrolling to it`);
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          console.error(`Element not found for #${id}`);
        }
      } catch (error) {
        console.error('Error scrolling to element:', error);
      }
    }, 500); // Increased delay for more reliable scrolling
    
    return () => clearTimeout(scrollTimer);
  }, [pathname, hash]);

  return null;
};

const App = () => {
  // Check for hash in URL on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      console.log(`Initial page load with hash: ${hash}`);
      
      // Handle initial hash on page load
      setTimeout(() => {
        try {
          // Need to handle both formats: #section and ##section
          let id = hash.replace(/^#+/, ''); // Remove all leading # characters
          
          console.log(`Looking for element with ID: ${id}`);
          const element = document.getElementById(id);
          if (element) {
            console.log(`Initial scroll to: ${id}`);
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            console.log(`Element with ID ${id} not found on initial load`);
          }
        } catch (error) {
          console.error('Error on initial hash navigation:', error);
        }
      }, 1000);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Using HashRouter for GitHub Pages compatibility */}
        <HashRouter>
          <ScrollToTop />
          <Routes>
            {/* Main route */}
            <Route path="/" element={<Index />} />
            
            {/* Specific page routes */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            
            {/* Redirect all other paths to root to trigger hash navigation */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
