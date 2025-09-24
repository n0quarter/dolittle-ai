import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Target, CheckCircle } from "lucide-react";
import workshopImage1 from "@/assets/workshop-speaker-1.jpg";
import Testimonials from "@/components/Testimonials";

const KiMitarbeiterschulung = () => {
  const benefits = [
    "Angstfreier Umgang mit KI-Technologien",
    "Praktische Anwendung in täglichen Arbeitsabläufen", 
    "Erhöhte Produktivität durch Automatisierung",
    "Besseres Verständnis für KI-Möglichkeiten und -Grenzen",
    "Stärkung der digitalen Kompetenzen im Team",
    "Compliance mit AI Act Artikel 4 (gültig seit Februar 2025)",
    "Zertifizierung der Mitarbeiter nach AI Act Anforderungen"
  ];

  const targetGroups = [
    "Vertriebsmitarbeiter",
    "Customer Support Teams",
    "Personalabteilung", 
    "Einkauf und Beschaffung",
    "Marketing und Kommunikation",
    "Verwaltung und Administration"
  ];

  return (
    <>
      <Helmet>
        <title>KI-Mitarbeiterschulung - Dolittle AI | Schulungen für alle Teams</title>
        <meta name="description" content="KI-Schulungen für Mitarbeiter ohne technischen Hintergrund. Praxisnahe Trainings für Vertrieb, Support, Personal und mehr. Angstfrei KI lernen." />
        <meta name="keywords" content="KI Mitarbeiterschulung, AI Training, KI Schulung, Mitarbeitertraining, KI Workshop" />
        <link rel="canonical" href="/workshops/ki-mitarbeiterschulung" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section 
            className="py-32 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${workshopImage1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="container mx-auto px-6 text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                KI-<span className="text-primary">Mitarbeiterschulung</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Schulungen für Teams ohne technischen Hintergrund - 
                Praxisnahe KI-Trainings für Vertrieb, Support, Personal und mehr.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="https://meetings.hubspot.com/areichert/dolittleai-workshop" target="_blank" rel="noopener noreferrer">Beratungstermin vereinbaren</a>
              </Button>
            </div>
          </section>

          {/* Target Groups */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Für wen sind unsere <span className="text-primary">Schulungen</span>?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Unsere KI-Schulungen richten sich an alle Mitarbeiter, die KI in ihrem Arbeitsalltag nutzen möchten, 
                  auch ohne technischen Hintergrund. Alle Schulungen entsprechen den Anforderungen des AI Act Artikel 4, 
                  der seit Februar 2025 gilt.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {targetGroups.map((group, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold">{group}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 bg-secondary/10">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Vorteile unserer <span className="text-primary">Schulungen</span>
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Unsere Schulungen sind darauf ausgelegt, Ängste abzubauen und praktische Fähigkeiten zu vermitteln, 
                    die direkt im Arbeitsalltag angewendet werden können.
                  </p>
                  
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Card className="p-8">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-4">Schulungsdetails</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Clock className="h-6 w-6 text-primary" />
                      <div>
                        <h4 className="font-semibold">Dauer</h4>
                        <p className="text-muted-foreground">1-2 Tage (je nach Umfang)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Users className="h-6 w-6 text-primary" />
                      <div>
                        <h4 className="font-semibold">Gruppengröße</h4>
                        <p className="text-muted-foreground">8-15 Teilnehmer optimal</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Target className="h-6 w-6 text-primary" />
                      <div>
                        <h4 className="font-semibold">Format</h4>
                        <p className="text-muted-foreground">Interaktiv mit praktischen Übungen</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h4 className="font-semibold mb-3">Inhalte & Formate:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">KI-Grundlagen</Badge>
                        <Badge variant="secondary">Praktische Tools</Badge>
                        <Badge variant="secondary">Use Cases</Badge>
                        <Badge variant="secondary">Hands-on Training</Badge>
                        <Badge variant="secondary">AI Act Compliance</Badge>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4 mt-4">
                        <h5 className="font-semibold text-primary mb-2">🎯 AI Act Compliance</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Unsere Schulungen entsprechen den Anforderungen des AI Act Artikel 4 (gültig seit Februar 2025)
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Online-Schulungen mit interaktiven Testaufgaben</li>
                          <li>• Mitarbeiterzertifizierung nach AI Act Standards</li>
                          <li>• Compliance-Dokumentation für Ihr Unternehmen</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default KiMitarbeiterschulung;