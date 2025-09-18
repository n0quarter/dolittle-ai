import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Truck, MessageSquare, Calendar, Settings, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import smartInboxImage from "@/assets/fuhrpark-smart-inbox.png";
import verschlagwortungImage from "@/assets/fuhrpark-verschlagwortung.png";
import followUpImage from "@/assets/fuhrpark-follow-up.png";

const Fuhrpark = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background/95 to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              KI-Telefonassistent für Fuhrparkmanagement
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">KI-Telefonassistent</span><br />
              mit smarter Inbox
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Automatisiert über 50% der Anrufe im Account Management und Customer Support. 
              Reduziert den Bearbeitungsaufwand für Kunden- und Nutzeranfragen auf ein Minimum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Demo anfragen
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Das Problem bei der Fuhrparkverwaltung
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Card className="p-8 bg-red-50 border-red-200">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Typische Fuhrpark-Anfragen
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MessageSquare className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>"Wann muss ich meine Reifen wechseln und wo kann ich einen Termin machen?"</span>
                    </div>
                    <div className="flex items-start">
                      <Settings className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>"Mein Fahrzeug hat Probleme beim Laden, woran liegt das?"</span>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>"Wann ist mein nächster Inspektionstermin?"</span>
                    </div>
                    <div className="flex items-start">
                      <Truck className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>"Welche Car Policy gilt für mein Fahrzeug?"</span>
                    </div>
                  </div>
                </Card>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Folgen für Fuhrparkverantwortliche
                </h3>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Ständige Unterbrechungen durch individuelle Telefon-, Mail- und Messenger-Anfragen
                  </p>
                  <p className="flex items-start">
                    <Settings className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Weniger Zeit für strategische Fuhrparksführung und -optimierung
                  </p>
                  <p className="flex items-start">
                    <MessageSquare className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Repetitive Beantwortung derselben Fragen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Die <span className="bg-gradient-primary bg-clip-text text-transparent">Dolittle</span> Lösung
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Schlauer durch Anpassung auf Ihre Kundenanfragen - mit Zugriff auf alle relevanten Systeme
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Was macht uns anders?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Integration mit CRM-System, Fuhrparkmanagementsoftware oder Excel-Sheets</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Zugriff auf Car Policies und Fahrzeugdaten</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>DSGVO-konforme Datenverarbeitung</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Intelligente Vorsortierung für Account Manager</span>
                    </div>
                  </div>
                </Card>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Weitere Kommunikationskanäle
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Sie wollen nicht nur Telefonate in der smarten Inbox sammeln, sondern sämtliche Anfragen? 
                  Wir können weitere Kanäle auf Wunsch individuell implementieren:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <ArrowRight className="w-4 h-4 text-primary mr-3" />
                    <span>E-Mail Integration</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-4 h-4 text-primary mr-3" />
                    <span>WhatsApp Business</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-4 h-4 text-primary mr-3" />
                    <span>Teams/Slack Integration</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-4 h-4 text-primary mr-3" />
                    <span>Web-Chat auf Ihrer Website</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                So funktioniert's: In 6 einfachen Schritten
              </h2>
              <p className="text-xl text-muted-foreground">
                Von der Analyse bis zum Live-Betrieb
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Anliegen definieren",
                  description: "Wir definieren gemeinsam, welche Anliegen der Dolittle Assistent direkt erledigen soll"
                },
                {
                  step: "2", 
                  title: "Datenanalyse",
                  description: "Wir prüfen, welche Daten für zufriedenstellende Antworten benötigt werden"
                },
                {
                  step: "3",
                  title: "Integration planen", 
                  description: "Identifikation der kosteneffizientesten und DSGVO-konformen Datenbereitstellung"
                },
                {
                  step: "4",
                  title: "Testbetrieb",
                  description: "Nach Datenanbindung prüfen wir die Qualität der automatisierten Antworten"
                },
                {
                  step: "5",
                  title: "Live-Gang",
                  description: "Dolittle nimmt Ihre Anrufe entgegen, fasst sie zusammen und transkribiert vollständig"
                },
                {
                  step: "8",
                  title: "Follow-up",
                  description: "Rückfragen können schnell per SMS oder anderen Kanälen beantwortet werden"
                }
              ].map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </Card>
              ))}
            </div>

            {/* Screenshots for Verschlagwortung and Smart Inbox */}
            <div className="mt-16 space-y-12">
              {/* Verschlagwortung Screenshot */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Schritt 6: Verschlagwortung & Kategorisierung
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Definieren Sie individuelle Tags und Kategorien für verschiedene Anliegen. 
                  So können Sie Anfragen schnell filtern und priorisieren.
                </p>
                <div className="bg-white rounded-lg shadow-lg p-4 max-w-4xl mx-auto">
                  <img 
                    src={verschlagwortungImage} 
                    alt="Screenshot der Verschlagwortung und Kategorisierung im Fuhrpark KI-System"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>

              {/* Smart Inbox Screenshot */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Schritt 7: Smart Inbox - Übersichtliche Anrufverwaltung
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Alle Anrufe werden strukturiert aufgelistet mit Anrufer, Grund, Dauer und Status. 
                  Farbkodierte Tags ermöglichen schnelles Erfassen und Bearbeiten.
                </p>
                <div className="bg-white rounded-lg shadow-lg p-4 max-w-4xl mx-auto">
                  <img 
                    src={smartInboxImage} 
                    alt="Screenshot der Smart Inbox mit Anrufliste und farbkodierten Tags im Fuhrpark KI-System"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>

              {/* Follow-up Screenshot */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Schritt 8: Follow-up & SMS-Kommunikation
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Schnelle Rückmeldungen per SMS direkt aus dem System heraus. 
                  Vollständiger Anrufverlauf mit allen Kategorien und Bearbeitungsständen.
                </p>
                <div className="bg-white rounded-lg shadow-lg p-4 max-w-lg mx-auto">
                  <img 
                    src={followUpImage} 
                    alt="Screenshot der SMS-Follow-up Funktion und des Anrufverlaufs im Fuhrpark KI-System"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Messbare Ergebnisse für Ihr Fuhrparkmanagement
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50%+</div>
                <p className="text-muted-foreground">weniger Anrufe für Ihr Team</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Verfügbarkeit für Fahrzeugnutzer</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                <p className="text-muted-foreground">Reduzierung der Bearbeitungszeit</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Mehr Zeit für strategische Fuhrparksführung statt administrativer Tätigkeiten
            </p>
            <Button size="lg" className="px-8 py-4 text-lg">
              Kostenlose Beratung für Ihr Fuhrparkmanagement
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fuhrpark;