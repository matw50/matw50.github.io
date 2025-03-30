import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

// Simple component to handle initial hash scrolling on page load
const InitialHashHandler = () => {
  useEffect(() => {
    // Check for hash in URL on initial load
    const hash = window.location.hash;
    if (hash) {
      console.log(`Initial page load detected hash: ${hash}`);
      
      // Use a setTimeout to ensure components are fully mounted
      setTimeout(() => {
        try {
          // Extract the ID by removing the leading # character(s)
          const id = hash.replace(/^#+/, '');
          console.log(`Looking for element with ID: ${id}`);
          
          const element = document.getElementById(id);
          if (element) {
            console.log(`Element with ID ${id} found, scrolling to it`);
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            console.error(`Element with ID ${id} not found on initial load`);
          }
        } catch (error) {
          console.error('Error handling initial hash navigation:', error);
        }
      }, 1000); // Longer delay to ensure everything is rendered
    }
  }, []);
  
  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Using HashRouter for GitHub Pages compatibility */}
        <HashRouter>
          <InitialHashHandler />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
