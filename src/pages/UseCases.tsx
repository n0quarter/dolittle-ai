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
import useCasesHeroBg from "@/assets/use-cases-hero-bg.jpg";
import pressAutomationBg from "@/assets/press-automation-bg.jpg";
import supplierAutomationBg from "@/assets/supplier-automation-bg.jpg";

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
      title: "Internes Wissenstool",
      description: "Das verschiedene Unternehmensinterne Systeme wie ERP CRM mit einem Chat bot verbindet",
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
          <section className="py-32 relative overflow-hidden" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${useCasesHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div className="container mx-auto px-6 text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                KI <span className="text-primary">Use Cases</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
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
                <Card className="p-8 hover:shadow-xl transition-shadow relative overflow-hidden" style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${pressAutomationBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
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
                        <li>• Lokale LLM-Nutzung (Deepseek, Mistral) oder EU-Endpunkte (Azure OpenAI, GCP/Gemini)</li>
                        <li>• Datenspeicherung in interner Datenbank / EU-Cloud</li>
                        <li>• DSGVO-konforme Verarbeitung aller Unternehmensdaten</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Case 2: Automatisierte Lieferantenbewertung */}
                <Card className="p-8 hover:shadow-xl transition-shadow relative overflow-hidden" style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${supplierAutomationBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <ShoppingCart className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Automatisierte Lieferantenbewertung</h3>
                      <p className="text-muted-foreground">Intelligente Beschaffungsoptimierung ohne Machine Learning</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">🎯 Problemstellung:</h4>
                      <p className="text-muted-foreground">
                        Einkaufsabteilungen verbringen bis zu 60% ihrer Zeit mit manueller Lieferantenrecherche,
                        Angebotsvergleichen und Compliance-Prüfungen. Oft werden dabei günstigere oder bessere
                        Alternativen übersehen, da die Datenmenge zu groß ist.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-primary">⚙️ Agenten-Lösung:</h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-primary/30 pl-4">
                          <h5 className="font-medium mb-1">1. Marktanalyse-Agent</h5>
                          <p className="text-sm text-muted-foreground">
                            Durchsucht automatisch öffentliche Preisdatenbanken, Herstellerportale und B2B-Marktplätze.
                            Sammelt aktuelle Preise, Verfügbarkeiten und Lieferzeiten für angefragte Produkte.
                          </p>
                        </div>
                        <div className="border-l-4 border-primary/30 pl-4">
                          <h5 className="font-medium mb-1">2. Compliance-Prüf-Agent</h5>
                          <p className="text-sm text-muted-foreground">
                            Überprüft automatisch Zertifizierungen, Nachhaltigkeitsstandards und gesetzliche Anforderungen.
                            Gleicht Lieferantendaten mit internen Compliance-Regeln und Branchen-Blacklists ab.
                          </p>
                        </div>
                        <div className="border-l-4 border-primary/30 pl-4">
                          <h5 className="font-medium mb-1">3. Bewertungs-Agent</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Erstellt automatisch Lieferanten-Scorings basierend auf definierten Kriterien</li>
                            <li>• Berücksichtigt Preis, Qualität, Lieferzeit, Zahlungsbedingungen</li>
                            <li>• Integriert historische Lieferperformance aus ERP-System</li>
                          </ul>
                        </div>
                        <div className="border-l-4 border-primary/30 pl-4">
                          <h5 className="font-medium mb-1">4. Monitoring-Agent</h5>
                          <p className="text-sm text-muted-foreground">
                            Überwacht kontinuierlich Preisänderungen, Lieferengpässe und neue Marktakteure.
                            Sendet automatische Alerts bei kritischen Änderungen oder besseren Alternativen.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-primary">🚀 Konkrete Umsetzung:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                          Regelbasierte Logik statt kostenintensivem Machine Learning
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                          API-Integration in bestehende ERP- und Beschaffungssysteme
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                          Automatische Generierung von Ausschreibungsunterlagen
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                          Dashboard mit Echtzeit-Marktanalysen und Empfehlungen
                        </li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-primary">📊 Typische Einsparungen:</h4>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">15-25%</div>
                          <div className="text-muted-foreground">Kosteneinsparung</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">70%</div>
                          <div className="text-muted-foreground">Zeitersparnis</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">3 Tage</div>
                          <div className="text-muted-foreground">Setup-Zeit</div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-primary/20 bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-primary">💡 Warum ohne Machine Learning?</h4>
                      <p className="text-sm text-muted-foreground">
                        Beschaffungsentscheidungen basieren oft auf klar definierbaren Regeln und Kriterien.
                        Durch regelbasierte Agenten erreichen wir 95% der Effizienz von ML-Lösungen bei nur
                        20% der Implementierungskosten und ohne lange Trainingsphasen.
                      </p>
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
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="https://meetings.hubspot.com/areichert" target="_blank" rel="noopener noreferrer">Kostenlose Beratung vereinbaren</a>
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
