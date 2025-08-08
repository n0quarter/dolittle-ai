import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, TrendingDown, Zap, Target } from "lucide-react";
const Benefits = () => {
  const benefits = [{
    icon: Shield,
    title: "100% DSGVO-konform",
    description: "Alle unsere KI-Lösungen erfüllen höchste Datenschutzstandards und sind vollständig DSGVO-konform implementiert."
  }, {
    icon: TrendingDown,
    title: "Prozesskosten senken",
    description: "Reduzieren Sie Ihre operativen Kosten durch intelligente Automatisierung und optimierte Workflows um bis zu 40%."
  }, {
    icon: Zap,
    title: "Schnelle Implementierung",
    description: "Von der Konzeption bis zur Umsetzung - wir bringen Ihre KI-Projekte in kürzester Zeit produktiv zum Einsatz."
  }, {
    icon: Target,
    title: "Unternehmensfokussiert",
    description: "Speziell entwickelte Lösungen für Unternehmen mit pragmatischen, kosteneffizienten Ansätzen."
  }];
  return <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Warum <span className="bg-gradient-primary bg-clip-text text-transparent">Dolittle AI</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Wir verstehen die besonderen Herausforderungen von Unternehmen und entwickeln maßgeschneiderte KI-Lösungen.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => <Card key={index} className="text-center shadow-medium hover:shadow-strong transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white shadow-strong">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für den nächsten Schritt?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam herausfinden, wie KI Ihr Unternehmen voranbringen kann. 
            Vereinbaren Sie noch heute Ihr kostenloses Beratungsgespräch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://meetings.hubspot.com/areichert" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-medium">
              Kostenlose Beratung buchen
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Benefits;