
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import ChiSiamo from "./pages/ChiSiamo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payment from "./pages/Payment";

const queryClient = new QueryClient();

function ScrollManager() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on page navigation
    window.scrollTo(0, 0);

    // Check for section parameter in URL
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    
    if (section) {
      // Remove the section parameter from URL
      navigate('/', { replace: true });
      
      // Scroll to the section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/accedi" element={<Login />} />
          <Route path="/registrati" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
