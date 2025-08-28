import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Lightbulb, Users, Target, Trophy } from "lucide-react";
import workshopImage1 from "@/assets/workshop-speaker-1.jpg";
import workshopImage2 from "@/assets/workshop-speaker-2.jpg";
import aiNetworkingBg from "@/assets/ai-networking-background.jpg";
import Testimonials from "@/components/Testimonials";
const Workshops = () => {
  const philosophyPoints = [{
    icon: Lightbulb,
    title: "Bottom-up Ansatz",
    description: "Mitarbeiter entwickeln selbst Ideen für KI-Einsatz in ihrem Arbeitsbereich"
  }, {
    icon: Users,
    title: "Hohe Interaktion",
    description: "Aktive Teilnahme und Experimente statt passive Wissensvermittlung"
  }, {
    icon: Target,
    title: "Praktische Beispiele",
    description: "Greifbare Use Cases und reale Anwendungsszenarien"
  }, {
    icon: Trophy,
    title: "WIN-WIN Ergebnis",
    description: "Mehr Automatisierung bei Routinen, mehr Zeit für strategische Aufgaben"
  }];
  return <>
      <Helmet>
        <title>Workshops - Dolittle AI | Interaktive KI-Workshops für Unternehmen</title>
        <meta name="description" content="Interaktive KI-Workshops mit Bottom-up Ansatz. Mitarbeiter entwickeln eigene KI-Lösungen. Über 100 gehaltene Workshops von erfahrenen Trainern." />
        <meta name="keywords" content="KI Workshops, AI Training, Interactive Workshops, Bottom-up Ansatz, KI Implementation" />
        <link rel="canonical" href="/workshops/workshops" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-32 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${workshopImage2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
            <div className="container mx-auto px-6 text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Interaktive KI-<span className="text-primary">Workshops</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Workshops mit hohem Interaktionsgrad, die KI als Chance etablieren
                und praktische Lösungen für Ihr Unternehmen entwickeln.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="https://meetings.hubspot.com/areichert" target="_blank" rel="noopener noreferrer">Workshop anfragen</a>
              </Button>
            </div>
          </section>

          {/* Workshop Philosophy */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Unsere <span className="text-primary">Workshophilosophie</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
                  In vielen Unternehmen werden KI-Lösungen Top down eingeführt.
                  Ganz einfach, weil sie davon ausgehen, dass Abteilungen oder einzelne Mitarbeiter das Thema nicht umsetzen oder es sogar blockieren.
                  Aus diesem Grund nehmen wir bei unseren Workshops das Team bei der Lösungsfindung mit.
                </p>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                  Ihr Team identifiziert Probleme im Arbeitsalltag und wir bewerten gemeinsam unter unserer professionellen Begleitung welche Tätigkeiten künftig besser mit Hilfe von KI gelöst werden können.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {philosophyPoints.map((point, index) => <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <point.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <CardTitle className="text-lg">{point.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{point.description}</CardDescription>
                    </CardContent>
                  </Card>)}
              </div>

            </div>
          </section>

          {/* Trainer Profiles */}
          <section className="py-20 relative overflow-hidden" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${aiNetworkingBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
            <div className="container mx-auto px-6 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
                Trainer aus der <span className="text-primary">Praxis</span>
              </h2>

              <div className="space-y-16">
                {/* Andreas - Image Left, Text Right */}
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/2">
                    <img
                      src="/lovable-uploads/e3deec03-d101-45c7-9eeb-d1a9071d6306.png"
                      alt="Andreas während eines Workshops"
                      className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <Card className="bg-background/95 backdrop-blur-sm h-full">
                      <CardHeader>
                        <CardTitle className="text-2xl">Andreas - Business KI Trainer</CardTitle>
                        <CardDescription className="text-lg">Über 100 Technologie-Workshops und Vorträge</CardDescription>
                      </CardHeader>
                      <CardContent className="prose">
                        <p>
                          Andreas hat bereits über 100 Technologie-Workshops und Vorträge gehalten und dabei Konzerne und Mittelständler
                          zu neuen digitalen Geschäftsmodellen, Produkten und Patenten verholfen. Er zeichnet sich dadurch aus,
                          komplexe Sachverhalte durch greifbare Beispiele zu vermitteln.
                        </p>
                        <p>
                          Zudem setzt er auf Interaktion und hat immer das Ziel mit unseren Teilnehmern zur Lösung zu kommen.
                          Er vermittelt Wissen an sämtliche Teams und Mitarbeiter, die oftmals nur wenig technisches Verständnis haben,
                          aber dennoch mit neuen Technologien im Unternehmen neue Werte schaffen sollen.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Viktor - Text Left, Image Right */}
                <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
                  <div className="lg:w-1/2">
                    <img
                      src="/lovable-uploads/8a268a19-5761-424c-83b9-9cff0caf2149.png"
                      alt="Viktor bei einer KI-Präsentation"
                      className="w-full h-auto object-cover rounded-lg shadow-lg brightness-110 contrast-110"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <Card className="bg-background/95 backdrop-blur-sm h-full">
                      <CardHeader>
                        <CardTitle className="text-2xl">Viktor - KI-Entwickler-Trainer</CardTitle>
                        <CardDescription className="text-lg">Informatiker, CTO und erfahrener Firmengründer</CardDescription>
                      </CardHeader>
                      <CardContent className="prose">
                        <p>
                          Als Lehrerkind hat Viktor immer schon sein eigenes Talent gespürt, wenn es um die Wissensvermittlung von KI geht.
                          Als Informatiker und erfahrener Firmengründer, CTO und KI-Entwickler hat er genau den richtigen Expertisemix,
                          um Entwicklern ein tieferes Verständnis von KI zu vermitteln.
                        </p>
                        <p>
                          Seine Methodik konzentriert sich auf die praktische Erkundung von KI-Entwicklungstools in Kombination mit praxisnahen Programmieransätzen.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <Testimonials />

          {/* Workshop Information */}
          <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-primary/5 relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  KI verstehen und Anwendungsfälle fürs <span className="text-primary">Unternehmen entwickeln</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                <h3 className="text-2xl md:text-3xl font-medium text-muted-foreground">Praxis-Workshop für Nicht-Techies</h3>
              </div>

              <div className="max-w-7xl mx-auto mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                  {/* Zielsetzung */}
                  <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-background to-secondary/10 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <CardTitle className="text-2xl text-primary font-bold">Zielsetzung</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Die Teilnehmer entwickeln ein fundiertes Verständnis für die rechtskonforme Anwendung von KI im Unternehmen und erarbeiten konkrete Anwendungsfälle für ihren Arbeitsbereich.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Zielgruppe */}
                  <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-background to-secondary/10 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <CardTitle className="text-2xl text-primary font-bold">Zielgruppe</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Mitarbeiter im Unternehmen, die wenig technisches Verständnis haben, aber zukünftig oder bereits mit KI-Technologien im Unternehmen in Berührung kommen werden.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Methodik & Aufbau */}
                  <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-background to-secondary/10 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <CardTitle className="text-2xl text-primary font-bold">Methodik & Aufbau</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          <span className="font-semibold text-primary">Erster Teil:</span> Grundlagen der KI-Funktionsweise, Prompt Engineering und regulatorische Aspekte (DSGVO, NIS2, AI Act).
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          <span className="font-semibold text-primary">Zweiter Teil:</span> Praktische Entwicklung konkreter KI-Anwendungsfälle mit Bewertung nach Aufwand und Nutzen.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Results & Benefits */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-background hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="pb-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                        <CardTitle className="text-2xl text-primary font-bold">Mehrwert für Ihr Team</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6 text-lg text-muted-foreground">
                        <div className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                          <Users className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">Praktisches und theoretisches Verständnis über Einsatzmöglichkeiten von KI im Unternehmen</span>
                        </div>
                        <div className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                          <Target className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">Kenntnis der Limitationen und relevanten regulatorischen Rahmenwerke</span>
                        </div>
                        <div className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                          <Trophy className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">Deutliche Steigerung der Arbeitsproduktivität durch richtige KI-Anwendung</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-xl bg-gradient-to-br from-secondary/5 to-background hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="pb-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-secondary to-primary"></div>
                        <CardTitle className="text-2xl text-primary font-bold">Mehrwert für Ihr Unternehmen</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6 text-lg text-muted-foreground">
                        <div className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                          <Lightbulb className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">Mitarbeiter werden Teil der Lösung und unterstützen produktive KI-Implementierung</span>
                        </div>
                        <div className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                          <Target className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">Bewertungsmatrix zu Machbarkeit, Aufwand und Nutzen der erarbeiteten KI-Anwendungsfälle</span>
                        </div>
                        <div className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                          <Trophy className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">Strategische Grundlage für gewinnbringende KI-Anwendungsfälle</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Workshop-<span className="text-primary">Agenda</span>
                </h2>
              </div>
              
              <div className="max-w-4xl mx-auto mb-12">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                  <div className="text-left">
                    <div className="mb-8">
                      <h4 className="text-2xl font-bold mb-6 text-primary">BLOCK I: Verständnis über die Anwendung von KI im Unternehmen (4 Stunden)</h4>
                      
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-lg font-semibold text-foreground mb-2">1. Was ist künstliche Intelligenz? (~40 Minuten)</h5>
                          <ul className="text-muted-foreground ml-4 space-y-1">
                            <li>• Praktisches Beispiel mit Publikumsinteraktion</li>
                            <li>• Abgrenzung ähnlicher Begriffe wie Algorithmen, Machine Learning, Data Science etc.</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-lg font-semibold text-foreground mb-2">2. Richtiges "Prompten" der KI - Praktische Übung (~120 Minuten)</h5>
                          <ul className="text-muted-foreground ml-4 space-y-1">
                            <li>• Gute Prompts vs. schlechte Prompts</li>
                            <li>• KI erhält zweimal denselben Auftrag, liefert aber unterschiedliche Ergebnisse</li>
                            <li>• Verständnis darüber, wie KI gute und schlechte Ergebnisse liefern kann</li>
                            <li>• Ungewollte Effekte wie Biases und Halluzinationen werden erlebt und verstanden</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-lg font-semibold text-foreground mb-2">3. Grundzüge von Datenschutz & Sicherheit (~80 Minuten)</h5>
                          <ul className="text-muted-foreground ml-4 space-y-1">
                            <li>• Wichtige regulatorische Rahmen im Unternehmenskontext:</li>
                            <li className="ml-4">- DSGVO</li>
                            <li className="ml-4">- NIS 2</li>
                            <li className="ml-4">- AI Act</li>
                            <li className="ml-4">- Digital Markets & Services Act</li>
                            <li>• Multiple-Choice-Verständnistest</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-2xl font-bold mb-6 text-primary">BLOCK II: Anwendungsfälle für das Unternehmen erarbeiten (4 Stunden)</h4>
                      
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-lg font-semibold text-foreground mb-2">1. Anwendungsfälle identifizieren (~120 Minuten)</h5>
                          <ul className="text-muted-foreground ml-4 space-y-1">
                            <li>• Ideensammlung: Teilnehmer sammeln Prozesse, Aufgaben und Tätigkeiten, die als zeitraubend empfunden werden</li>
                            <li>• Ideenbewertung: Ideen werden nach Datenverfügbarkeit und Nutzen für Akteure im und außerhalb des Unternehmens bewertet</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-lg font-semibold text-foreground mb-2">2. Lösungsansatz (~120 Minuten)</h5>
                          <ul className="text-muted-foreground ml-4 space-y-1">
                            <li>• Top-Ideen werden in maximal 3 Gruppen ausgearbeitet</li>
                            <li>• Bewertung des Umsetzungsaufwands</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="https://meetings.hubspot.com/areichert" target="_blank" rel="noopener noreferrer">Workshop-Beratung vereinbaren</a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>;
};
export default Workshops;
