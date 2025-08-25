import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  FileText, 
  MessageSquare, 
  ShoppingCart, 
  Users, 
  TrendingUp,
  Clock,
  Shield,
  Zap
} from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Bot,
      title: "Intelligente Chatbots",
      description: "24/7 Kundenbetreuung mit DSGVO-konformen KI-Chatbots",
      benefits: ["Automatisierte Anfragen", "Mehrsprachig", "Lernfähig"],
      industry: "E-Commerce, Support"
    },
    {
      icon: FileText,
      title: "Dokumentenanalyse",
      description: "Automatische Verarbeitung und Kategorisierung von Dokumenten",
      benefits: ["Zeit sparen", "Fehler reduzieren", "Compliance sichern"],
      industry: "Verwaltung, Recht"
    },
    {
      icon: MessageSquare,
      title: "E-Mail Automatisierung", 
      description: "Intelligente E-Mail-Klassifizierung und Antwortvorschläge",
      benefits: ["Schnellere Bearbeitung", "Konsistente Antworten", "Entlastung"],
      industry: "Customer Service"
    },
    {
      icon: ShoppingCart,
      title: "Personalisierte Empfehlungen",
      description: "KI-basierte Produktempfehlungen für Online-Shops",
      benefits: ["Höhere Conversion", "Bessere UX", "Umsatzsteigerung"],
      industry: "E-Commerce, Retail"
    },
    {
      icon: Users,
      title: "HR & Recruiting",
      description: "Automatisierte Bewerbungsauswertung und Kandidatenmatching",
      benefits: ["Objektive Auswahl", "Zeit sparen", "Bessere Matches"],
      industry: "Human Resources"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Vorhersage von Trends und Geschäftsentwicklungen",
      benefits: ["Bessere Planung", "Risiken minimieren", "Chancen nutzen"],
      industry: "Finance, Controlling"
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Effizienzsteigerung",
      description: "Bis zu 40% Zeitersparnis bei Routineaufgaben"
    },
    {
      icon: Shield,
      title: "DSGVO-Konform",
      description: "Alle Lösungen entsprechen deutschen Datenschutzstandards"
    },
    {
      icon: Zap,
      title: "Schnelle Umsetzung",
      description: "Von der Konzeption bis zur Implementierung in wenigen Wochen"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Use Cases - Dolittle AI | KI-Anwendungsfälle für Ihr Unternehmen</title>
        <meta name="description" content="Entdecken Sie praktische KI-Use Cases für Ihr Unternehmen. Von Chatbots bis Predictive Analytics - DSGVO-konforme AI-Lösungen." />
        <meta name="keywords" content="KI Use Cases, AI Anwendungen, Chatbots, Dokumentenanalyse, KI im Unternehmen" />
        <link rel="canonical" href="/use-cases" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                KI <span className="text-primary">Use Cases</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Entdecken Sie praktische KI-Anwendungsfälle für Ihr Unternehmen. 
                Von der Automatisierung bis zur intelligenten Datenanalyse.
              </p>
            </div>
          </section>

          {/* Use Cases Grid */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Bewährte <span className="text-primary">Anwendungsfälle</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Diese KI-Lösungen haben sich in der Praxis bewährt und bieten messbaren Mehrwert für Unternehmen.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <useCase.icon className="h-12 w-12 text-primary mb-4" />
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      <CardDescription>{useCase.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Vorteile:</h4>
                          <ul className="space-y-1">
                            {useCase.benefits.map((benefit, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-center">
                                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <Badge variant="secondary">{useCase.industry}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Detailed Example Cases */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Detaillierte <span className="text-primary">Lösungsbeispiele</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  So lösen wir konkrete Unternehmensprobleme mit maßgeschneiderten KI-Lösungen.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                {/* Case 1: Automatisierte Presseartikel */}
                <Card className="p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Automatisierte Presseartikel</h3>
                      <p className="text-muted-foreground">KI-Agenten mit Stil- und Kontextanpassung</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">🎯 Zielsetzung:</h4>
                      <p className="text-muted-foreground">
                        Automatische Erstellung von Pressemitteilungen, die stilistisch zu bisherigen Veröffentlichungen passen 
                        und aktuelle Themen integrieren. Reduzierung des Aufwands von 4-6 Stunden auf 15 Minuten pro Artikel.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-primary">⚙️ Lösungsansatz:</h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-primary/30 pl-4">
                          <h5 className="font-medium mb-1">1. Trainingsphase</h5>
                          <p className="text-sm text-muted-foreground">
                            Bestehende Pressemitteilungen werden DSGVO-konform in ein lokales Fine-Tuning-Modell eingespeist. 
                            Das Modell lernt Tonalität, Satzstruktur, bevorzugte Formulierungen und Stilregeln.
                          </p>
                        </div>
                        <div className="border-l-4 border-primary/30 pl-4">
                          <h5 className="font-medium mb-1">2. Themeneingabe</h5>
                          <p className="text-sm text-muted-foreground">
                            Redaktionsteam gibt nur noch Thema oder Ereignis ein (z.B. "Neuer Produktlaunch Q4 2025"). 
                            Optional: Aktuelle Themen-Feeds werden automatisch integriert.
                          </p>
                        </div>
                        <div className="border-l-4 border-primary/30 pl-4">
                          <h5 className="font-medium mb-1">3. Agenten-Struktur</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• <strong>Agent 1:</strong> Kontext-Sammler – prüft aktuelle Nachrichtenquellen (EU-konform)</li>
                            <li>• <strong>Agent 2:</strong> Tonalitäts-Agent – passt Rohtext an Unternehmenssstil an</li>
                            <li>• <strong>Agent 3:</strong> Fakten & DSGVO-Check – verifiziert Daten und Compliance</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-primary">🚀 Ergebnis:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                          Fertige Pressemitteilung inklusive alternativer Versionen
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                          Vollständig im gewohnten Stil mit aktuellen Bezügen
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                          Automatische Veröffentlichung via CMS-Integration möglich
                        </li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-primary">💻 Technische Umsetzung:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Lokale LLM-Nutzung (Llama 3.1, Mistral Large) oder Azure OpenAI EU-Endpunkte</li>
                        <li>• Datenspeicherung in interner Datenbank / EU-Cloud</li>
                        <li>• DSGVO-konforme Verarbeitung aller Unternehmensdaten</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Case 2: Intelligente Kundenanfragen-Bearbeitung */}
                <Card className="p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MessageSquare className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Intelligente Kundenanfragen-Bearbeitung</h3>
                      <p className="text-muted-foreground">Automatisierte E-Mail-Klassifizierung mit Antwortvorschlägen</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">🎯 Zielsetzung:</h4>
                      <p className="text-muted-foreground">
                        Automatische Kategorisierung eingehender Kundenanfragen und Generierung passender Antwortvorschläge. 
                        Reduzierung der Bearbeitungszeit von 45 Minuten auf 5 Minuten pro Anfrage.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-primary">⚙️ Lösungsansatz:</h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-primary/30 pl-4">
                          <h5 className="font-medium mb-1">1. E-Mail-Analyse</h5>
                          <p className="text-sm text-muted-foreground">
                            Eingehende E-Mails werden automatisch analysiert und in Kategorien eingeteilt: 
                            Beschwerde, Produktanfrage, Technischer Support, Rechnungsanfrage, etc.
                          </p>
                        </div>
                        <div className="border-l-4 border-primary/30 pl-4">
                          <h5 className="font-medium mb-1">2. Kontext-Verständnis</h5>
                          <p className="text-sm text-muted-foreground">
                            KI erkennt Dringlichkeit, Kundenstatus (Neukunde/Bestandskunde) und 
                            relevante Vorgeschichte aus CRM-System und früheren Kommunikationen.
                          </p>
                        </div>
                        <div className="border-l-4 border-primary/30 pl-4">
                          <h5 className="font-medium mb-1">3. Antwort-Generierung</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Automatische Erstellung passender Antwortvorschläge</li>
                            <li>• Integration von Produktinformationen und FAQ-Inhalten</li>
                            <li>• Anpassung an Unternehmens-Tonalität und Kundenhistorie</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-primary">🚀 Ergebnis:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                          Automatische Priorisierung nach Dringlichkeit und Kundenwert
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                          Fertige Antwortvorschläge zur finalen Überprüfung
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                          Weiterleitung an spezialisierten Mitarbeiter bei komplexen Fällen
                        </li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-primary">📊 Messbare Erfolge:</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">89%</div>
                          <div className="text-muted-foreground">Zeitersparnis</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">24h</div>
                          <div className="text-muted-foreground">Ø Antwortzeit</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Advantages */}
          <section className="py-20 bg-secondary/10">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Warum <span className="text-primary">Dolittle AI</span>?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Unsere KI-Lösungen bieten konkrete Vorteile für Ihr Unternehmen.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {advantages.map((advantage, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-8">
                      <advantage.icon className="h-16 w-16 text-primary mx-auto mb-6" />
                      <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Bereit für Ihre KI-Lösung?</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Lassen Sie uns gemeinsam herausfinden, welche KI-Anwendungsfälle 
                  das größte Potential für Ihr Unternehmen bieten.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Kostenlose Beratung vereinbaren
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default UseCases;