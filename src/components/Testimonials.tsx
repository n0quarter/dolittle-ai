import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jens Naie",
      title: "CTO, Doodle AG",
      image: "https://ai.asdcode.com/jens.png",
      text: "Viktor's generative AI workshop was a resounding success! He skillfully brought our team, with varying levels of experience, to a shared understanding, addressing common AI anxieties with clarity and practical advice. The insights he provided on effective AI usage, and its limitations, were invaluable. The hands-on coding exercises with Cursor, coupled with his demonstration of TDD automated with AI, were incredibly impactful. He empowered us to see AI not as a threat, but as a powerful tool to enhance our development workflow. We left feeling inspired and equipped to integrate generative AI into our projects. Highly recommended!"
    },
    {
      name: "Tim Yevgrashyn",
      title: "CTO, Stepico",
      image: "https://ai.asdcode.com/tim.png",
      text: "The practical focus of this workshop was a game-changer for our development team. Instead of just discussing AI tools, our engineers actually learned how to implement them effectively in their day-to-day coding. The hands-on exercises and real-world applications delivered solid value that we're already seeing in our productivity metrics."
    },
    {
      name: "Julio",
      title: "Head of Engineering, Empion",
      image: "https://ai.asdcode.com/julio.jpeg",
      text: "The workshop was very insightful and gave us valuable hands-on experience. While the first day covered some familiar ground, we found the deep dive into Cursor, prompt techniques, and best practices especially useful. Day two was the highlight, with hands-on exercises that helped us explore Cursor in depth and apply what we've learned while building an app. Overall, it was an engaging and valuable experience. I'd recommend it if you're willing to know more about AI and how to use it more efficiently in our teams or daily workflows."
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
            Erfahrungen von Führungskräften, die bereits erfolgreich KI in ihren Unternehmen implementiert haben.
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="shadow-medium hover:shadow-strong transition-all duration-300 bg-card h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="flex-shrink-0">
                          <img 
                            src={testimonial.image} 
                            alt={`${testimonial.name} - ${testimonial.title}`}
                            className="w-20 h-20 rounded-full object-cover shadow-medium"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-1">{testimonial.name}</h3>
                          <p className="text-primary font-semibold">{testimonial.title}</p>
                        </div>
                      </div>

                      <div className="relative flex-1">
                        <div className="text-5xl text-primary/20 absolute -top-3 -left-3">"</div>
                        <blockquote className="text-lg text-muted-foreground leading-relaxed pl-8 pr-4">
                          {testimonial.text}
                        </blockquote>
                        <div className="text-5xl text-primary/20 absolute -bottom-3 right-0 rotate-180">"</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
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