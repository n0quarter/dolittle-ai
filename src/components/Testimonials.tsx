import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jens Naie",
      title: "CTO, Doodle AG",
      image: "https://ai.asdcode.com/jens.png",
      text: "Viktors generative KI-Workshop war ein durchschlagender Erfolg! Er brachte unser Team mit unterschiedlichen Erfahrungsebenen geschickt zu einem gemeinsamen Verständnis und ging auf häufige KI-Ängste mit Klarheit und praktischen Ratschlägen ein. Die Einblicke, die er zur effektiven KI-Nutzung und deren Grenzen vermittelte, waren von unschätzbarem Wert. Die praktischen Programmierübungen mit Cursor, gepaart mit seiner Demonstration von TDD automatisiert mit KI, waren unglaublich wirkungsvoll. Er befähigte uns, KI nicht als Bedrohung, sondern als mächtiges Werkzeug zur Verbesserung unseres Entwicklungsworkflows zu sehen. Wir gingen inspiriert und ausgerüstet heraus, um generative KI in unsere Projekte zu integrieren. Sehr empfehlenswert!"
    },
    {
      name: "Tim Yevgrashyn",
      title: "CTO, Stepico",
      image: "https://ai.asdcode.com/tim.png",
      text: "Der praktische Fokus dieses Workshops war ein Wendepunkt für unser Entwicklungsteam. Anstatt nur über KI-Tools zu diskutieren, lernten unsere Ingenieure tatsächlich, wie sie diese effektiv in ihre tägliche Programmierarbeit implementieren können. Die praktischen Übungen und realen Anwendungen lieferten soliden Wert, den wir bereits in unseren Produktivitätskennzahlen sehen."
    },
    {
      name: "Julio",
      title: "Head of Engineering, Empion",
      image: "https://ai.asdcode.com/julio.jpeg",
      text: "Der Workshop war sehr aufschlussreich und gab uns wertvolle praktische Erfahrungen. Während der erste Tag einige vertraute Themen abdeckte, fanden wir die Vertiefung in Cursor, Prompt-Techniken und bewährte Praktiken besonders nützlich. Der zweite Tag war das Highlight, mit praktischen Übungen, die uns halfen, Cursor tiefgehend zu erkunden und das Gelernte beim Erstellen einer App anzuwenden. Insgesamt war es eine ansprechende und wertvolle Erfahrung. Ich würde es empfehlen, wenn Sie mehr über KI erfahren und lernen möchten, wie Sie sie effizienter in unseren Teams oder täglichen Arbeitsabläufen einsetzen können."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Was <span className="bg-gradient-primary bg-clip-text text-transparent">Kunden</span> über uns sagen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Erfahrungen von Führungskräften, die unsere Workshops in Auftrag gegeben haben.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300 bg-card h-full">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex-shrink-0">
                            <img 
                              src={testimonial.image} 
                              alt={`${testimonial.name} - ${testimonial.title}`}
                              className="w-16 h-16 rounded-full object-cover shadow-medium"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-foreground mb-1">{testimonial.name}</h3>
                            <p className="text-primary font-semibold text-sm">{testimonial.title}</p>
                          </div>
                        </div>

                        <div className="relative flex-1">
                          <div className="text-4xl text-primary/20 absolute -top-2 -left-2">"</div>
                          <blockquote className="text-muted-foreground leading-relaxed pl-6 pr-4 text-sm">
                            {testimonial.text}
                          </blockquote>
                          <div className="text-4xl text-primary/20 absolute -bottom-2 right-0 rotate-180">"</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;