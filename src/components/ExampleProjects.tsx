import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageSquare, Bot, ShoppingCart, TrendingUp, Users } from "lucide-react";

const ExampleProjects = () => {
  const projects = [
    {
      icon: Phone,
      title: "DocDolittle",
      description: "Der smarte KI Telefonassistent und smarter Inbox für Arztpraxen",
      features: [
        "Automatische Anrufannahme und Terminvergabe",
        "Intelligente Klassifizierung von Patientenanfragen", 
        "Nahtlose Integration in Praxisverwaltungssysteme",
        "Reduktion der Telefonwarteschleifen um 80%"
      ],
      technologies: ["Speech-to-Text", "NLP", "Terminplanung", "FHIR Integration"],
      results: "2 Minuten durchschnittliche Bearbeitungszeit pro Anruf"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Personalisierung",
      description: "KI-gestützte Produktempfehlungen für Online-Händler",
      features: [
        "Echtzeitanalyse des Nutzerverhaltens",
        "Personalisierte Produktvorschläge",
        "Dynamische Preisoptimierung",
        "Cross-Selling und Upselling Automatisierung"
      ],
      technologies: ["Recommendation Engine", "Real-time Analytics", "A/B Testing", "ML Pipelines"],
      results: "35% Steigerung der Conversion Rate"
    },
    {
      icon: TrendingUp,
      title: "Predictive Maintenance",
      description: "Vorausschauende Wartung für Industrieanlagen",
      features: [
        "IoT-Sensordatenauswertung in Echtzeit",
        "Früherkennung von Maschinenstörungen",
        "Optimierte Wartungsplanung",
        "Minimierung ungeplanter Ausfallzeiten"
      ],
      technologies: ["Time Series Analysis", "Anomaly Detection", "IoT Integration", "Digital Twin"],
      results: "60% Reduktion ungeplanter Ausfälle"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Erfolgreiche Beispielprojekte
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Einblicke in konkrete KI-Lösungen, die wir für unsere Kunden entwickelt haben und die messbare Erfolge erzielen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Kernfunktionen:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologien:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="font-medium text-green-600 dark:text-green-400">
                      {project.results}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleProjects;