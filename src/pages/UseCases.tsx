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