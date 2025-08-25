import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
            
            return (
              <Dialog key={item.title}>
                <DialogTrigger asChild>
                  <div
                    className="absolute transition-all duration-500 cursor-pointer group"
                    style={{
                      transform: isHovered 
                        ? `translateX(${translateX * 2}px) translateY(${translateY}px) rotate(0deg) scale(1.1)`
                        : isOtherHovered
                        ? `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg) scale(0.9)`
                        : `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg)`,
                      zIndex: isHovered ? 100 : zIndex,
                      opacity: isOtherHovered ? 0.6 : 1,
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Card className="w-64 md:w-80 shadow-strong hover:shadow-glow transition-all duration-500 bg-card/95 backdrop-blur-sm border-2 hover:border-primary/50">
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
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-hidden p-0">
                  <div className="relative">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto object-contain max-h-[85vh]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm">Klicken Sie außerhalb des Bildes, um zu schließen</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        {/* Certificate Titles for better accessibility */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Bewegen Sie die Maus über die Zertifikate und klicken Sie für eine vergrößerte Ansicht
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
