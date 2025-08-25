import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const certificates = [
  {
    title: "Datenschutz – Grundlagen 2025",
    src: "/lovable-uploads/d7505eaa-2501-400a-898f-aad0f4c01375.png",
    alt: "Abschlusszertifikat Datenschutz – Grundlagen 2025",
  },
  {
    title: "Homeoffice & Mobiles Arbeiten 2024",
    src: "/lovable-uploads/14d2d683-05ea-4f64-9016-da0c2b58f8f6.png",
    alt: "Abschlusszertifikat Homeoffice & Mobiles Arbeiten 2024",
  },
  {
    title: "Informationssicherheit – Grundlagen 2025",
    src: "/lovable-uploads/70821974-90e5-417a-89c7-14fed5137b94.png",
    alt: "Abschlusszertifikat Informationssicherheit – Grundlagen 2025",
  },
  {
    title: "NIS2 Grundlagen",
    src: "/lovable-uploads/acfea587-13ac-4e15-9c22-9291bb655556.png",
    alt: "Abschlusszertifikat NIS2 Grundlagen",
  },
  {
    title: "Phishing – Grundlagen 2025",
    src: "/lovable-uploads/97bae526-0832-4bb0-b59c-8dd85b256922.png",
    alt: "Abschlusszertifikat Phishing – Grundlagen 2025",
  },
];

const TrainingCertificates = () => {
  return (
    <section id="datenschutzschulungen" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 break-words leading-tight">
            Unsere <span className="bg-gradient-primary bg-clip-text text-transparent">Datenschutzschulungen</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ein Einblick in die Bereiche, in denen wir zertifizierte Schulungen
            erfolgreich abgeschlossen haben.
          </p>
        </header>

        {/* Fanned Certificate Stack */}
        <div className="relative max-w-4xl mx-auto h-96 md:h-[500px] flex items-center justify-center">
          {certificates.map((item, index) => {
            // Calculate rotation and position for each certificate
            const rotation = (index - 2) * 8; // Center certificate at 0°, others at ±8°, ±16°
            const translateX = (index - 2) * 20; // Slight horizontal offset
            const translateY = (index - 2) * 10; // Slight vertical offset
            const zIndex = certificates.length - Math.abs(index - 2); // Center certificate on top
            
            return (
              <div
                key={item.title}
                className="absolute transition-all duration-300 hover:z-50 hover:scale-110 cursor-pointer group"
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg)`,
                  zIndex: zIndex,
                }}
              >
                <Card className="w-64 md:w-80 shadow-strong group-hover:shadow-glow transition-all duration-300 bg-card/95 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm md:text-base text-center leading-tight">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AspectRatio ratio={16 / 11}>
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="h-full w-full object-cover rounded-md"
                      />
                    </AspectRatio>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Certificate Titles for better accessibility */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Hover über die Zertifikate für eine bessere Ansicht
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {certificates.map((item, index) => (
              <span
                key={item.title}
                className="px-3 py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground"
              >
                {item.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCertificates;
