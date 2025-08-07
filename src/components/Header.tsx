import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">
                <span className="font-extrabold">D</span><span className="font-normal italic">AI</span>
              </span>
            </div>
            <span className="text-xl font-bold text-foreground">
              <span className="text-primary font-extrabold">D</span>olittle <span className="text-foreground">AI</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Leistungen
            </a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">
              Team
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Über uns
            </a>
            <Button className="shadow-medium">
              Kontakt aufnehmen
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;