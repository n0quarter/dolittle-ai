import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Brain, Cog, Users, BookOpen, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import servicesBackground from "@/assets/services-ai-human-collaboration.jpg";
import strategyBackground from "@/assets/strategy-consulting-harmonized.jpg";
import frameworkBackground from "@/assets/framework-architecture-harmonized.jpg";
import agentsBackground from "@/assets/agents-workflows-harmonized.jpg";
import workshopsBackground from "@/assets/workshops-fun-learning.jpg";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "KI-Strategieberatung & Joint Venture Management",
      description:
        "Erst identifizieren wir Potentiale und entwickeln maßgeschneiderte KI-Lösungen für Ihr Geschäftsmodell. Dann bewerten wir die Datenlandschaft sowie technische Machbarkeit und Wirtschaftlichkeit der Umsetzung. In vielen Fällen entstehen hier Geschäftsmodelle, die nicht nur das eigene Kerngeschäft profitabler machen, sondern später zu neuen Produkten und Geschäftsausgründungen führen. Wir sind für alle Stationen der richtige Partner.",
      features: ["Prozessanalyse", "ROI-Bewertung", "Roadmap-Entwicklung", "Ausgründung und Produktskalierung"],
      imageSrc:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=70",
      imageAlt: "Illustration: KI-Strategieberatung – Analyse und Roadmap"
    },
    {
      icon: Cog,
      title: "KI-Framework & Agenten-Entwicklung",
      description:
        "Implementierung und Entwicklung von KI-Frameworks sowie intelligenten Agenten und Workflows, die perfekt auf Ihre Unternehmensanforderungen zugeschnitten sind. Von der technischen Architektur bis zur intelligenten Automatisierung.",
      features: [
        "Custom AI-Lösungen",
        "Intelligente Automatisierung", 
        "Skalierbare Architekturen",
        "24/7 KI-Assistenten",
        "Integration bestehender Systeme",
        "DSGVO-Compliance",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=70",
      imageAlt: "Illustration: KI-Frameworks & Agenten – skalierbare Architekturen"
    },
    {
      icon: Phone,
      title: "KI-Telefonassistent mit smarter Inbox",
      description:
        "Intelligente Telefonassistenzsysteme für Bereiche mit hohem Kommunikationsvolumen. Unsere KI-Lösungen entlasten Ihr Team bei Terminvereinbarungen, Anfragen und Kundenbetreuung - rund um die Uhr verfügbar.",
      features: [
        "Arztpraxen & Kliniken",
        "Fuhrparkmanagement",
        "Hausverwaltungen",
        "Automatische Terminvereinbarung",
        "24/7 Erreichbarkeit",
        "Mehrsprachige Unterstützung",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=70",
      imageAlt: "Illustration: KI-Telefonassistenten – Kundenbetreuung"
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

  // Background images for each service
  const backgroundImages = [
    strategyBackground, // Strategy/Brain - People doing strategic consulting
    frameworkBackground, // Framework & Agents/Cog - Software architecture with circles and squares  
    agentsBackground, // Phone Assistants/Phone - Communication and workflow diagrams
    workshopsBackground  // Training/BookOpen - Fun, engaging learning environment
  ];

  return (
    <section id="services" className="py-10 relative overflow-hidden">
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

        {/* Services with Enhanced Connecting Lines */}
        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced Connecting Lines - Hidden on mobile */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            {/* Horizontal lines connecting all four cards */}
            <div className="absolute top-1/4 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-primary/40 via-primary/80 to-primary/40 rounded-full"></div>
            <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-primary/40 via-primary/80 to-primary/40 rounded-full"></div>
            
            {/* Vertical line in center connecting top and bottom */}
            <div className="absolute top-1/4 bottom-1/4 left-1/2 w-1 bg-gradient-to-b from-primary/40 via-primary/80 to-primary/40 transform -translate-x-1/2 rounded-full"></div>
            
            {/* Cross connections for network effect */}
            <div className="absolute top-1/4 bottom-1/4 left-[25%] w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent transform -translate-x-1/2"></div>
            <div className="absolute top-1/4 bottom-1/4 right-[25%] w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent transform translate-x-1/2"></div>
            
            {/* Animated connection dots at intersections */}
            <div className="absolute top-1/4 left-[25%] w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse shadow-glow"></div>
            <div className="absolute top-1/4 right-[25%] w-4 h-4 bg-primary rounded-full transform translate-x-1/2 -translate-y-1/2 animate-pulse delay-500 shadow-glow"></div>
            <div className="absolute bottom-1/4 left-[25%] w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 translate-y-1/2 animate-pulse delay-1000 shadow-glow"></div>
            <div className="absolute bottom-1/4 right-[25%] w-4 h-4 bg-primary rounded-full transform translate-x-1/2 translate-y-1/2 animate-pulse delay-1500 shadow-glow"></div>
            <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-300 shadow-glow"></div>
            <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 translate-y-1/2 animate-pulse delay-800 shadow-glow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {services.map((service, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300 group bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/20 relative overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${backgroundImages[index]})`
                  }}
                ></div>
                
                {/* Strong white filter overlay */}
                <div className="absolute inset-0 bg-white/90"></div>
                
                {/* Content */}
                <div className="relative z-10">
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
                          {feature === "Fuhrparkmanagement" ? (
                            <Link 
                              to="/conversational-ai/fuhrpark" 
                              className="text-primary hover:text-primary/80 font-medium transition-colors"
                            >
                              {feature}
                            </Link>
                          ) : (
                            feature
                          )}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Link to workshops page for Workshops & Training service */}
                    {service.title === "Workshops & Training" && (
                      <div className="mt-6">
                        <Link 
                          to="/workshops/workshops"
                          className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                        >
                          Zu den Workshops
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    )}
                    
                    {/* Connecting Arrow for visual flow */}
                    {index < 3 && (
                      <div className="flex justify-end mt-4 md:hidden">
                        <ArrowRight className="w-5 h-5 text-primary animate-pulse" />
                      </div>
                    )}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;