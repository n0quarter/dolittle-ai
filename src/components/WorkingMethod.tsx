import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target } from "lucide-react";

const WorkingMethod = () => {
  const methods = [
    {
      icon: CheckCircle,
      title: "Pragmatisch",
      description: "Fokus aufs Wesentliche"
    },
    {
      icon: Target,
      title: "Lösungsmindset",
      description: "Wir wollen die Probleme unserer Kunden lösen. Wir beraten nicht nur, wir setzen um."
    }
  ];

  const phases = [
    {
      phase: "1-2",
      title: "Discovery & Analyse",
      duration: "3 Wochen",
      description: "Stakeholder-Alignment, Use-Case-Validierung und Problemdefinition"
    },
    {
      phase: "3-4",
      title: "Konzept & Prototyp",
      duration: "5 Wochen",
      description: "Technische Machbarkeitsanalyse, Lösungsdesign und funktionierender Proof of Concept"
    },
    {
      phase: "5-7",
      title: "Umsetzung & Rollout",
      duration: "3 Wochen",
      description: "Infrastruktur-Blueprint, Change Management und Business Case Finalisierung"
    }
  ];

  return (
    <section id="working-method" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="bg-gradient-primary bg-clip-text text-transparent">Arbeitsweise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unser Ansatz ist klar definiert: effizient, praxisorientiert und ergebnisorientiert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {methods.map((method, index) => (
            <Card key={index} className="text-center shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{method.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Unser <span className="bg-gradient-primary bg-clip-text text-transparent">Projektablauf</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In 7 strukturierten Phasen von der Idee zur erfolgreichen KI-Implementierung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full">
                    <span className="text-white font-bold text-lg">Phase {phase.phase}</span>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {phase.duration}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{phase.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingMethod;