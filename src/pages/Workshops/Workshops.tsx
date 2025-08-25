import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Workshop anfragen
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
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                  Viele Geschäftsführer reden das Thema KI tot, obwohl sie große Potentiale heben könnten. 
                  Ganz einfach, weil sie davon ausgehen, dass Abteilungen oder einzelne Mitarbeiter das Thema nicht umsetzen oder es sogar blockieren.
                  Aus diesem Grund nehmen wir bei unseren Workshops das Team bei der Lösungsfindung mit.
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
                Unsere <span className="text-primary">Trainer</span>
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
                        <CardTitle className="text-2xl">Andreas - Der Business KI Trainer</CardTitle>
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
                        <CardTitle className="text-2xl">Viktor - Der KI-Entwickler-Trainer</CardTitle>
                        <CardDescription className="text-lg">Informatiker, CTO und erfahrener Firmengründer</CardDescription>
                      </CardHeader>
                      <CardContent className="prose">
                        <p>
                          Als Lehrerkind hat Viktor immer schon sein eigenes Talent gespürt, wenn es um die Wissensvermittlung von KI geht. 
                          Als Informatiker und erfahrener Firmengründer, CTO und KI-Entwickler hat er genau den richtigen Expertisemix, 
                          um Entwicklern ein tieferes Verständnis von KI zu vermitteln.
                        </p>
                        <p>
                          Sein inhaltlicher Fokus liegt dabei weniger auf den Tiefen des Machine Learnings als vielmehr auf der 
                          Vermittlung der Fähigkeiten das Potential von Agentic AI zu vermitteln.
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

          {/* Approach */}
          <section className="py-20 bg-secondary/10">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Unser <span className="text-primary">Ansatz</span>
              </h2>
              <div className="max-w-4xl mx-auto mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Der Schlüssel zur KI-Akzeptanz</h3>
                <div className="prose prose-lg mx-auto text-muted-foreground mb-8">
                  <p>
                    Sei es aufgrund von Angst vor dem Verlust des Arbeitsplatzes oder aus Sicherheits- und Etikbedenken. 
                    Das ist schade, denn meistens würden diese Bedenkenträger am meisten von mehr Automatisierung und Arbeitserleichterung 
                    bei Routineaufgaben profitieren, die mit KI-Lösungen einhergehen und könnten mehr Zeit mit strategischere und kreativere Aufgaben zu verbringen.
                  </p>
                  <p>
                    Der Schlüssel zur KI-Akzeptanz im Unternehmen liegt dabei in einem Bottom-up-Ansatz. Mitarbeiter müssen selbst erkennen, 
                    bei welchen Tätigkeiten unnötig Zeit verschwendet wird und bei welchen Tätigkeiten sie wenig Freude erleben. 
                    Genau hier entsteht ein WIN-WIN-Ansatz!
                  </p>
                  <p>
                    Statt ihnen von oben neue Prozesse und Tools aufzudrücken, sollten die Mitarbeiter aus Abteilungen mit hohem Automatisierungspotential 
                    bereits bei der Ideenentwicklung miteinbezogen werden. Das hat zwei positive Effekte: Zum einen kennen Mitarbeiter die Vor- und Nachteile 
                    vieler Unternehmensprozesse besser als die Geschäftsführung und zum anderen begleiten Menschen eher einen Wandel, den sie selbst gestalten können.
                  </p>
                </div>
              </div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
                Aus diesem Grund gestalten wir unsere Workshops mit einem hohen Grad an Interaktion, 
                um das Thema KI als Chance und nicht nur als Bedenken zu etablieren. Zudem sehen wir uns als Geschichtenerzähler, 
                die es schaffen wichtige Funktionsweisen, Möglichkeiten und Grenzen von KI im Unternehmen anhand von Beispielen und Experimenten zu vermitteln.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Workshop-Beratung vereinbaren
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>;
};
export default Workshops;