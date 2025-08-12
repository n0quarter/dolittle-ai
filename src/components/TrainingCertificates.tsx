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

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((item) => (
            <article key={item.title} className="h-full">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover rounded-md"
                    />
                  </AspectRatio>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingCertificates;
