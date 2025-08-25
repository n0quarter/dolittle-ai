import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Team = () => {
  const teamMembers = [
    {
      name: "Andreas Reichert",
      role: "Gründer & CEO",
      photo: "/lovable-uploads/3edae817-71ad-494d-9af9-798fed02a2af.png",
      experience: "12 Jahre Erfahrung im Aufbau und Beratung digitaler Firmen, Geschäftsmodelle & Produkte für Konzerne und Mittelständler. Audibusiness Innovation GmbH und mantro GmbH",
      highlights: [
        "Gründer und Geschäftsführer von MOBIKO, dem Marktführer für Mobilitätsbudget gegründet mit Konzernpartnern",
        "Gründung DocDolittle, die smarte Inbox mit KI-Telefonassistenten für Ärzte",
        "Audibusiness Innovation GmbH und mantro GmbH"
      ],
      expertise: ["Digitale Geschäftsmodelle", "Strategieberatung", "Unternehmensgründung", "KI für Healthcare"]
    },
    {
      name: "Viktor Shcherban",
      role: "Gründer, CTO & Softwareentwickler seit 2006",
      photo: "/lovable-uploads/e1b4c386-8c58-42ec-b26b-8a19ef8466f7.png",
      experience: "5 Firmen gegründet. 4 davon noch operativ und eines (Timberbase) wurde von einer NASDAQ gelisteten U.S. Firma akquiriert",
      highlights: [
        "Seit 2,5 Jahren Durchführung von KI Beratungsprojekten & Appentwicklung",
        "Gründung DocDolittle, die smarte Inbox mit KI-Telefonassistenten für Ärzte"
      ],
      expertise: ["Softwareentwicklung", "KI-Implementierung", "Unternehmensgründung", "Tech Leadership"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Die <span className="bg-gradient-primary bg-clip-text text-transparent">Gründer & Geschäftsführung</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Langjährige Erfahrung in der Entwicklung und Implementierung digitaler Lösungen für Unternehmen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <img
                      src={member.photo}
                      alt={`${member.name} - ${member.role}`}
                      className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover object-top shadow-medium border-4 border-border"
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: "center 15%" }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 break-words">{member.name}</h3>
                    <p className="text-primary font-semibold text-lg break-words">{member.role}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-muted-foreground leading-relaxed break-words">{member.experience}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Highlights:</h4>
                  <ul className="space-y-2">
                    {member.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
