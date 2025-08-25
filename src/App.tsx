import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";
import ScrollToHash from "@/components/ScrollToHash";
import UeberUns from "./pages/UeberUns";
import ServicesPage from "./pages/UeberUns/Services";
import TeamPage from "./pages/UeberUns/Team";
import ProjektePage from "./pages/UeberUns/Projekte";
import KiMitarbeiterschulung from "./pages/Workshops/KiMitarbeiterschulung";
import Workshops from "./pages/Workshops/Workshops";
import UseCases from "./pages/UseCases";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/ueber-uns/services" element={<ServicesPage />} />
          <Route path="/ueber-uns/team" element={<TeamPage />} />
          <Route path="/ueber-uns/projekte" element={<ProjektePage />} />
          <Route path="/workshops/ki-mitarbeiterschulung" element={<KiMitarbeiterschulung />} />
          <Route path="/workshops/workshops" element={<Workshops />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
