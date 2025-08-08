import { Card, CardContent } from "@/components/ui/card";

const ProjectProcess = () => {
  const phases = [{
    phase: "1",
    title: "Discovery & Analyse",
    description: "Stakeholder-Alignment, Use-Case-Validierung und Problemdefinition"
  }, {
    phase: "2",
    title: "Konzept & Prototyp",
    description: "Technische Machbarkeitsanalyse, Lösungsdesign und funktionierender Proof of Concept"
  }, {
    phase: "3",
    title: "Umsetzung & Rollout",
    description: "Infrastruktur-Blueprint, Change Management und Business Case Finalisierung"
  }, {
    phase: "4",
    title: "Hypercare",
    description: "Lifebetrieb überwachen und aufgrund der Ergebnisse weiter optimieren"
  }];

  return (
    <section id="project-process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unser <span className="bg-gradient-primary bg-clip-text text-transparent">Projektablauf</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In 4 strukturierten Phasen von der Idee zur erfolgreichen KI-Implementierung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full">
                    <span className="text-white font-bold text-lg">{phase.phase}</span>
                  </div>
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

export default ProjectProcess;