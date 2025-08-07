import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageSquare, Bot, ShoppingCart, TrendingUp, Users, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const ExampleProjects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const projects = [
    {
      icon: Phone,
      title: "DocDolittle",
      description: "Der smarte KI Telefonassistent und smarter Inbox für Arztpraxen",
      image: "/lovable-uploads/24273189-d3d8-48e2-b6f7-0d030022e9a2.png",
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
      icon: MessageSquare,
      title: "AskSchmidt",
      description: "KI-gestützter Telegram Bot zur Übersetzung deutscher Behördenbriefe",
      image: "/lovable-uploads/d81424fd-5385-44b5-b5a3-1f3c4e43d952.png",
      features: [
        "Fotografieren und Senden von Behördenbriefen per Telegram",
        "Automatische Übersetzung und Verständlichmachung",
        "Handlungsempfehlungen und Antworthilfen",
        "Kostenloser Service für Menschen mit Sprachbarrieren"
      ],
      technologies: ["Telegram Bot API", "OCR", "NLP", "Document Analysis"],
      results: "Über 10.000 übersetzte Behördenbriefe"
    },
    {
      icon: TrendingUp,
      title: "Predictive Maintenance",
      description: "Vorausschauende Wartung für Industrieanlagen",
      image: null,
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

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm h-full">
                    {project.image && (
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
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
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleProjects;