import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
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

// Get the base URL from the environment or use empty string as default
const basename = import.meta.env.BASE_URL || '/';

const App = () => {
  // Check for hash in URL on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      console.log(`Initial page load with hash: ${hash}`);
      // Handle initial hash on page load
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          console.log(`Initial scroll to: ${id}`);
          element.scrollIntoView({ behavior: 'smooth' });
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
            <Route path="/" element={<Index />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
