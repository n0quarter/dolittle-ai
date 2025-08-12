import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Brain, Cog, Users, BookOpen } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "KI-Strategieberatung",
      description:
        "Entwicklung maßgeschneiderter KI-Lösungen für Ihr Unternehmen. Wir analysieren Ihre Prozesse und identifizieren KI-Potentiale.",
      features: ["Prozessanalyse", "ROI-Bewertung", "Roadmap-Entwicklung", "Technologie-Auswahl"],
      imageSrc:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=70",
      imageAlt: "Illustration: KI-Strategieberatung – Analyse und Roadmap"
    },
    {
      icon: Cog,
      title: "KI-Framework Entwicklung",
      description:
        "Implementierung und Entwicklung von KI-Frameworks, die perfekt auf Ihre Unternehmensanforderungen zugeschnitten sind.",
      features: [
        "Custom AI-Lösungen",
        "Integration bestehender Systeme",
        "Skalierbare Architekturen",
        "DSGVO-Compliance",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=70",
      imageAlt: "Illustration: KI-Frameworks – skalierbare Architekturen"
    },
    {
      icon: Users,
      title: "Agenten & Workflows",
      description:
        "Intelligente Automatisierung durch KI-Agenten und optimierte Workflows für maximale Effizienzsteigerung.",
      features: [
        "Intelligente Automatisierung",
        "Workflow-Optimierung",
        "24/7 KI-Assistenten",
        "Prozesskosten-Reduktion",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1600&q=70",
      imageAlt: "Illustration: KI-Agenten & Workflows – Automatisierung"
    },
    {
      icon: BookOpen,
      title: "Workshops & Training",
      description:
        "Schulungen und Workshops für Ihr Team, um KI-Technologien erfolgreich im Unternehmen einzusetzen.",
      features: [
        "Mitarbeiter-Schulungen",
        "Hands-on Workshops",
        "Change Management",
        "Kontinuierlicher Support",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=70",
      imageAlt: "Illustration: Workshops & Training – Team Schulung"
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von der Strategieentwicklung bis zur Implementierung - wir begleiten Sie auf dem Weg zur KI-getriebenen Digitalisierung.
          </p>
        </div>

        {/* LLM logo strip */}
        <aside aria-label="Unterstützte LLMs" className="mb-12">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-90">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" alt="OpenAI Logo" loading="lazy" className="h-8 md:h-10 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" alt="Anthropic Logo" loading="lazy" className="h-8 md:h-10 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" alt="Google Gemini Logo" loading="lazy" className="h-8 md:h-10 w-auto" />
          </div>
        </aside>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <div className="px-6 -mt-2">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-md"
                  />
                </AspectRatio>
              </div>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                {service.title === "Agenten & Workflows" && (
                  <aside aria-label="Unterstützte Modelle" className="mb-6">
                    <div className="flex flex-wrap items-center gap-6 opacity-90">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" alt="OpenAI Logo" loading="lazy" className="h-6 md:h-8 w-auto" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" alt="Anthropic Logo" loading="lazy" className="h-6 md:h-8 w-auto" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" alt="Google Gemini Logo" loading="lazy" className="h-6 md:h-8 w-auto" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Meta_Platforms_Inc._logo.svg" alt="Meta (Llama) Logo" loading="lazy" className="h-6 md:h-8 w-auto" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mistral_AI_logo_%282025%E2%80%93%29.svg" alt="Mistral AI Logo" loading="lazy" className="h-6 md:h-8 w-auto" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/DeepSeek_logo.svg" alt="DeepSeek Logo" loading="lazy" className="h-6 md:h-8 w-auto" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Perplexity_AI_logo.svg" alt="Perplexity Logo" loading="lazy" className="h-6 md:h-8 w-auto" />
                    </div>
                  </aside>
                )}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;