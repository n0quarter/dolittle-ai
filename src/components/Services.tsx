import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Brain, Cog, Users, BookOpen, ArrowRight } from "lucide-react";
import servicesBackground from "@/assets/services-ai-human-collaboration.jpg";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "KI-Strategieberatung",
      description:
        "Entwicklung maßgeschneiderter KI-Lösungen für Ihr Unternehmen. Wir analysieren Ihre Prozesse und identifizieren KI-Potentiale.",
      features: ["Prozessanalyse", "ROI-Bewertung", "Roadmap-Entwicklung", "Technologie-Auswahl"],
      imageSrc:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=70",
      imageAlt: "Illustration: KI-Strategieberatung – Analyse und Roadmap"
    },
    {
      icon: Cog,
      title: "KI-Framework Entwicklung",
      description:
        "Implementierung und Entwicklung von KI-Frameworks, die perfekt auf Ihre Unternehmensanforderungen zugeschnitten sind.",
      features: [
        "Custom AI-Lösungen",
        "Integration bestehender Systeme",
        "Skalierbare Architekturen",
        "DSGVO-Compliance",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=70",
      imageAlt: "Illustration: KI-Frameworks – skalierbare Architekturen"
    },
    {
      icon: Users,
      title: "Agenten & Workflows",
      description:
        "Intelligente Automatisierung durch KI-Agenten und optimierte Workflows für maximale Effizienzsteigerung.",
      features: [
        "Intelligente Automatisierung",
        "Workflow-Optimierung",
        "24/7 KI-Assistenten",
        "Prozesskosten-Reduktion",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1600&q=70",
      imageAlt: "Illustration: KI-Agenten & Workflows – Automatisierung"
    },
    {
      icon: BookOpen,
      title: "Workshops & Training",
      description:
        "Schulungen und Workshops für Ihr Team, um KI-Technologien erfolgreich im Unternehmen einzusetzen.",
      features: [
        "Mitarbeiter-Schulungen",
        "Hands-on Workshops",
        "Change Management",
        "Kontinuierlicher Support",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=70",
      imageAlt: "Illustration: Workshops & Training – Team Schulung"
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{
        backgroundImage: `url(${servicesBackground})`
      }}>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-secondary/95"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von der Strategieentwicklung bis zur Implementierung - wir begleiten Sie auf dem Weg zur KI-getriebenen Digitalisierung.
          </p>
        </div>

        {/* Services with Connecting Lines */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Lines - Hidden on mobile */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {/* Horizontal line between top two cards */}
            <div className="absolute top-1/4 left-1/2 w-8 h-0.5 bg-gradient-primary transform -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Vertical line in center */}
            <div className="absolute top-1/4 bottom-1/4 left-1/2 w-0.5 bg-gradient-primary transform -translate-x-1/2"></div>
            
            {/* Horizontal line between bottom two cards */}
            <div className="absolute bottom-1/4 left-1/2 w-8 h-0.5 bg-gradient-primary transform -translate-x-1/2 translate-y-1/2"></div>
            
            {/* Animated dots on lines */}
            <div className="absolute top-1/4 left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300 group bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 shadow-sm"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Connecting Arrow for visual flow */}
                  {index < 3 && (
                    <div className="flex justify-end mt-4 md:hidden">
                      <ArrowRight className="w-5 h-5 text-primary animate-pulse" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
