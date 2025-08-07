import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target } from "lucide-react";

const WorkingApproach = () => {
  const methods = [{
    icon: CheckCircle,
    title: "Pragmatisch",
    description: "Wir wollen mit Ihnen funktionierende Lösungen schaffen und sie nicht mit Powerpoint beeindrucken."
  }, {
    icon: Target,
    title: "Lösungsmindset",
    description: "Wir wollen die Probleme unserer Kunden lösen. Wir beraten nicht nur, wir setzen um."
  }];

  return (
    <section id="working-approach" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="bg-gradient-primary bg-clip-text text-transparent">Arbeitsweise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unser Ansatz ist klar definiert: effizient, praxisorientiert und ergebnisorientiert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
      </div>
    </section>
  );
};

export default WorkingApproach;