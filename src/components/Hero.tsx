import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-consulting.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          KI-Strategien für den
          <span className="bg-gradient-primary bg-clip-text text-transparent"> Mittelstand</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Entwickeln Sie DSGVO-konforme KI-Lösungen, die Ihre Prozesskosten senken und 
          Ihr Unternehmen zukunftsfähig machen.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="shadow-strong text-lg px-8 py-6">
            Kostenlose Beratung anfragen
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
            Unsere Leistungen entdecken
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Jahre KI-Erfahrung</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4</div>
            <div className="text-muted-foreground">Erfolgreiche Unternehmen</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">DSGVO-konform</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;