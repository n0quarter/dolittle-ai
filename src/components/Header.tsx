import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">
                <span className="font-extrabold">D</span><span className="font-normal italic">AI</span>
              </span>
            </div>
            <span className="text-xl font-bold">
              <span className="text-foreground">Dolittle</span> <span className="text-primary">AI</span>
            </span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-6 overflow-x-auto">
            <a href="/#team" className="text-foreground hover:text-primary transition-colors">
              Team
            </a>
            <a href="/#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="/#testimonials" className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="/#working-approach" className="text-foreground hover:text-primary transition-colors">
              Arbeitsweise
            </a>
            <a href="/#beispielprojekte" className="text-foreground hover:text-primary transition-colors">
              Beispielprojekte
            </a>
            <a href="/#project-process" className="text-foreground hover:text-primary transition-colors">
              Projektablauf
            </a>
            <a href="/#datenschutzschulungen" className="text-foreground hover:text-primary transition-colors">
              Datenschutzschulungen
            </a>
            <a href="/#about" className="text-foreground hover:text-primary transition-colors">
              Über uns
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;