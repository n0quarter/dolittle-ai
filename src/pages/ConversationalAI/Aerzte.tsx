import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Clock, Users, Calendar, MessageSquare, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Aerzte = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background/95 to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              KI-Telefonassistent für Arztpraxen
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Mehr Zeit für <span className="bg-gradient-primary bg-clip-text text-transparent">Patienten</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Unser KI-Telefonassistent entlastet Ihr Praxisteam bei Terminvereinbarungen, 
              Patientenanfragen und administrativen Aufgaben - rund um die Uhr verfügbar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Kostenlose Demo anfragen
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Lösung */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Die Herausforderung im Praxisalltag
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>Ihr Praxisteam verbringt täglich Stunden am Telefon:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Terminvereinbarungen und -verschiebungen</span>
                    </li>
                    <li className="flex items-start">
                      <MessageSquare className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Wiederkehrende Patientenfragen beantworten</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Weiterleitung an die richtige Abteilung</span>
                    </li>
                  </ul>
                  <p className="pt-4 font-medium text-foreground">
                    Zeit, die für die eigentliche Patientenbetreuung fehlt.
                  </p>
                </div>
              </div>
              <div>
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Unsere KI-Lösung
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Der Dolittle KI-Telefonassistent übernimmt automatisch:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span>Terminvereinbarungen 24/7</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span>Häufige Patientenfragen</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span>Intelligente Anrufweiterleitung</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span>Notfallpriorisierung</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Speziell für <span className="bg-gradient-primary bg-clip-text text-transparent">Arztpraxen</span> entwickelt
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integration in bestehende Praxismanagementsysteme und DSGVO-konform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Terminmanagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Automatische Terminvereinbarung mit Zugriff auf Ihren Kalender
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Freie Termine finden</li>
                  <li>• Termine verschieben</li>
                  <li>• Absagen verwalten</li>
                  <li>• Warteliste führen</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <MessageSquare className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Patientenkommunikation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Intelligente Beantwortung häufiger Fragen
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Sprechzeiten & Öffnungszeiten</li>
                  <li>• Vorbereitung auf Termine</li>
                  <li>• Rezeptanfragen</li>
                  <li>• Überweisungen</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Star className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Smarte Inbox</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Alle Anrufe strukturiert und priorisiert
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Notfälle erkennen</li>
                  <li>• Kategorisierung</li>
                  <li>• Vollständige Transkription</li>
                  <li>• Follow-up Erinnerungen</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Nachweisbare Entlastung für Ihr Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50%</div>
                <p className="text-muted-foreground">weniger Telefonanrufe für Ihr Team</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Erreichbarkeit auch außerhalb der Sprechzeiten</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2-3h</div>
                <p className="text-muted-foreground">täglich mehr Zeit für Patienten</p>
              </div>
            </div>
            <Button size="lg" className="px-8 py-4 text-lg">
              Kostenlose Beratung vereinbaren
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aerzte;