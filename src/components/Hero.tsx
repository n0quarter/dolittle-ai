import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-consulting.jpg";
import CountUp from "@/components/ui/count-up";
import Typewriter from "@/components/ui/typewriter";
import { Search } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: `url(${heroImage})`
    }}>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          <div className="mx-auto max-w-2xl animate-enter">
            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-full border border-border px-4 py-3 md:px-6 md:py-4 shadow-medium whitespace-nowrap overflow-x-auto">
              <Search className="h-5 w-5 text-muted-foreground shrink-0" />
              <div className="flex-1 min-w-0">
                <Typewriter
                  text="KI-Lösungen für mein Unternehmen"
                  speed={35}
                  startDelay={300}
                  className="text-2xl md:text-4xl bg-gradient-primary bg-clip-text text-transparent"
                />
              </div>
            </div>
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Entwickeln Sie DSGVO-konforme KI-Lösungen, die Ihre Prozesskosten senken und 
          Ihr Unternehmen zukunftsfähig machen.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="shadow-strong text-lg px-8 py-6">
            <a href="https://meetings.hubspot.com/areichert" target="_blank" rel="noopener noreferrer">Termin vereinbaren</a>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
            Unsere Leistungen entdecken
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="text-center">
            <CountUp end={5} suffix="+" className="text-4xl font-bold text-primary mb-2" startOnView duration={2} />
            <div className="text-muted-foreground">Jahre KI-Erfahrung</div>
          </div>
          <div className="text-center">
            <CountUp end={5} className="text-4xl font-bold text-primary mb-2" startOnView duration={2} />
            <div className="text-muted-foreground">erfolgreiche Unternehmensgründungen</div>
          </div>
          <div className="text-center">
            <CountUp end={50} prefix=">" className="text-4xl font-bold text-primary mb-2" startOnView duration={2} />
            <div className="text-muted-foreground">Digitalprojekte umgesetzt</div>
          </div>
          <div className="text-center">
            <CountUp end={100} suffix="%" className="text-4xl font-bold text-primary mb-2" startOnView duration={2} />
            <div className="text-muted-foreground">DSGVO-konform</div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;