import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, DollarSign } from "lucide-react";

const WorkingApproach = () => {
  const methods = [{
    icon: CheckCircle,
    title: "Pragmatisch & Lösungsorientiert",
    description: "Wir wollen mit Ihnen funktionierende Lösungen schaffen und sie nicht mit Powerpoint langweilen. Unser Fokus liegt darauf, die Probleme unserer Kunden zu lösen - wir beraten nicht nur, wir setzen um."
  }, {
    icon: DollarSign,
    title: "Kosteneffizient",
    description: "Bevor wir etwas Neues entwickeln, prüfen wir immer erst, ob es für Ihr Problem bereits bewährte und fertige Lösungen gibt. So sparen wir Zeit und Kosten."
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