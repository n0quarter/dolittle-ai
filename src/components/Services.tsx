import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cog, Users, BookOpen } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "KI-Strategieberatung",
      description: "Entwicklung maßgeschneiderter KI-Lösungen für Ihr Unternehmen. Wir analysieren Ihre Prozesse und identifizieren KI-Potentiale.",
      features: ["Prozessanalyse", "ROI-Bewertung", "Roadmap-Entwicklung", "Technologie-Auswahl"]
    },
    {
      icon: Cog,
      title: "KI-Framework Entwicklung",
      description: "Implementierung und Entwicklung von KI-Frameworks, die perfekt auf Ihre Unternehmensanforderungen zugeschnitten sind.",
      features: ["Custom AI-Lösungen", "Integration bestehender Systeme", "Skalierbare Architekturen", "DSGVO-Compliance"]
    },
    {
      icon: Users,
      title: "Agenten & Workflows",
      description: "Intelligente Automatisierung durch KI-Agenten und optimierte Workflows für maximale Effizienzsteigerung.",
      features: ["Intelligente Automatisierung", "Workflow-Optimierung", "24/7 KI-Assistenten", "Prozesskosten-Reduktion"]
    },
    {
      icon: BookOpen,
      title: "Workshops & Training",
      description: "Schulungen und Workshops für Ihr Team, um KI-Technologien erfolgreich im Unternehmen einzusetzen.",
      features: ["Mitarbeiter-Schulungen", "Hands-on Workshops", "Change Management", "Kontinuierlicher Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von der Strategieentwicklung bis zur Implementierung - wir begleiten Sie auf dem Weg zur KI-getriebenen Digitalisierung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;