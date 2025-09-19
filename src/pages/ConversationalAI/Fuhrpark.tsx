import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle, Phone, Truck, MessageSquare, Calendar, Settings, Clock, ArrowRight, Play, Pause, Target, BarChart3, Plug, TestTube, Radio } from "lucide-react";
import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import smartInboxImage from "@/assets/fuhrpark-smart-inbox-correct.png";
import verschlagwortungImage from "@/assets/fuhrpark-verschlagwortung-hq.png";
import followUpImage from "@/assets/fuhrpark-follow-up.png";
import smsInterfaceImage from "@/assets/fuhrpark-sms-left.png";
import callHistoryImage from "@/assets/fuhrpark-calls-final.png";
import fuhrparkHeroImage from "@/assets/fuhrpark-hero-telephony.jpg";

const Fuhrpark = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background/95 to-secondary/20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={fuhrparkHeroImage} 
            alt="Fuhrparkmanagement mit KI-Telefonassistent" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/75 to-secondary/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              KI-Telefonassistent für Fuhrparkmanagement
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">KI-Telefonassistent</span><br />
              mit smarter Inbox
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Automatisiert über 50% der Anrufe im Account Management und Customer Support. 
              Reduziert den Bearbeitungsaufwand für Kunden- und Nutzeranfragen auf ein Minimum.
            </p>
            
            {/* Audio Player */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                {/* Sound Wave Animation */}
                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse' : ''}`}>
                  {/* Radiating lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {Array.from({ length: 24 }, (_, i) => (
                      <div
                        key={i}
                        className={`absolute w-0.5 bg-primary/40 origin-bottom transition-all duration-300 ${
                          isPlaying ? 'animate-pulse' : ''
                        }`}
                        style={{
                          height: isPlaying ? '80px' : '60px',
                          transform: `rotate(${i * 15}deg) translateY(-50px)`,
                          animationDelay: `${i * 50}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Main Play Button */}
                <Button
                  onClick={toggleAudio}
                  variant="default"
                  size="lg"
                  className="relative z-10 w-32 h-32 rounded-full bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-strong border-4 border-background"
                >
                  {isPlaying ? (
                    <Pause className="h-12 w-12 text-white" />
                  ) : (
                    <Play className="h-12 w-12 text-white ml-1" />
                  )}
                </Button>
              </div>
              
              <audio
                ref={audioRef}
                onEnded={handleAudioEnded}
                preload="metadata"
              >
                <source src="/audio/fuhrpark-inspektion.m4a" type="audio/mp4" />
                Ihr Browser unterstützt das Audio-Element nicht.
              </audio>
            </div>
            
            {/* Audio Label */}
            <div className="mb-8">
              <p className="text-lg text-muted-foreground font-medium">
                So klingt Dolittle
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <a href="https://meetings.hubspot.com/areichert" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Demo anfragen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Das Problem bei der Fuhrparkverwaltung
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Card className="p-8 bg-red-50 border-red-200">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Typische Fuhrpark-Anfragen
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MessageSquare className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>"Wann muss ich meine Reifen wechseln und wo kann ich einen Termin machen?"</span>
                    </div>
                    <div className="flex items-start">
                      <Settings className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>"Mein Fahrzeug hat Probleme beim Laden, woran liegt das?"</span>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>"Wann ist mein nächster Inspektionstermin?"</span>
                    </div>
                    <div className="flex items-start">
                      <Truck className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>"Ich habe meine Tankkarte verloren, wie bekomme ich eine Neue?"</span>
                    </div>
                  </div>
                </Card>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Folgen für Fuhrparkverantwortliche
                </h3>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Ständige Unterbrechungen durch individuelle Telefon-, Mail- und Messenger-Anfragen
                  </p>
                  <p className="flex items-start">
                    <Settings className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Weniger Zeit für strategische Fuhrparksführung und -optimierung
                  </p>
                  <p className="flex items-start">
                    <MessageSquare className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Repetitive Beantwortung derselben Fragen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Die <span className="bg-gradient-primary bg-clip-text text-transparent">Dolittle</span> Lösung
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Schlauer durch Anpassung auf Ihre Kundenanfragen - mit Zugriff auf alle relevanten Daten
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Was macht uns anders?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Flexible Datenanbindung: Systemintegration, PDF- oder CSV-Exporte</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Zugriff auf Car Policies und Fahrzeugdaten</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>DSGVO-konforme Datenverarbeitung</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Intelligente Vorsortierung für Account Manager</span>
                    </div>
                  </div>
                </Card>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Weitere Kommunikationskanäle
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Sie wollen nicht nur Telefonate in der smarten Inbox sammeln, sondern sämtliche Anfragen? 
                  Wir können weitere Kanäle auf Wunsch individuell implementieren:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <ArrowRight className="w-4 h-4 text-primary mr-3" />
                    <span>E-Mail Integration</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-4 h-4 text-primary mr-3" />
                    <span>WhatsApp Business</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-4 h-4 text-primary mr-3" />
                    <span>Teams/Slack Integration</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-4 h-4 text-primary mr-3" />
                    <span>Web-Chat auf Ihrer Website</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                So funktioniert's: In 5 einfachen Schritten
              </h2>
              <p className="text-xl text-muted-foreground">
                Von der Analyse bis zum Live-Betrieb
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  step: "1",
                  title: "Anliegen definieren",
                  description: "Wir definieren gemeinsam, welche Anliegen der Dolittle Assistent direkt erledigen soll",
                  icon: Target
                },
                {
                  step: "2", 
                  title: "Datenanalyse",
                  description: "Wir prüfen, welche Daten für zufriedenstellende Antworten benötigt werden",
                  icon: BarChart3
                },
                {
                  step: "3",
                  title: "Integration planen", 
                  description: "Identifikation der kosteneffizientesten und DSGVO-konformen Datenbereitstellung",
                  icon: Plug
                },
                {
                  step: "4",
                  title: "Testbetrieb",
                  description: "Nach Datenanbindung prüfen wir die Qualität der automatisierten Antworten",
                  icon: TestTube
                },
                {
                  step: "5",
                  title: "Live-Gang",
                  description: "Dolittle nimmt Ihre Anrufe entgegen, fasst sie zusammen und transkribiert vollständig. Weiterleitung wird eingerichtet und neue Nebenstelle bereitgestellt",
                  icon: Radio
                }
              ].map((item, index) => (
                <Card key={index} className="p-8 hover:shadow-strong hover:scale-105 transition-all duration-300 group bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/40 relative overflow-hidden cursor-pointer">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex items-start space-x-6">
                    {/* Step Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold shadow-glow group-hover:scale-110 transition-transform duration-300">
                        {item.step}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <item.icon className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Arrow indicator */}
                  {index < 4 && (
                    <div className="flex justify-center mt-6">
                      <ArrowRight className="w-6 h-6 text-primary/40 group-hover:text-primary rotate-90 transition-all duration-300" />
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Screenshots Carousel */}
            <div className="mt-12 mb-4">
              <h3 className="text-3xl font-bold text-center text-foreground mb-8">
                Funktionen im Detail
              </h3>
              <Carousel className="w-full max-w-6xl mx-auto">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {/* Verschlagwortung Screenshot */}
                  <CarouselItem className="pl-2 md:pl-4">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-foreground mb-4">
                        Verschlagwortung & Kategorisierung
                      </h4>
                      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Definieren Sie individuelle Tags und Kategorien für verschiedene Anliegen. 
                        So können Sie Anfragen schnell filtern und priorisieren.
                      </p>
                      <div className="bg-white rounded-lg shadow-xl p-6 max-w-5xl mx-auto">
                        <img 
                          src={verschlagwortungImage} 
                          alt="Screenshot der Verschlagwortung und Kategorisierung im Fuhrpark KI-System"
                          className="w-full h-auto rounded-md shadow-lg"
                        />
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Smart Inbox Screenshot */}
                  <CarouselItem className="pl-2 md:pl-4">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-foreground mb-4">
                        Smart Inbox - Übersichtliche Anrufverwaltung
                      </h4>
                      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Alle Anrufe werden strukturiert aufgelistet mit Anrufer, Grund, Dauer und Status. 
                        Farbkodierte Tags ermöglichen schnelles Erfassen und Bearbeiten.
                      </p>
                      <div className="bg-white rounded-lg shadow-xl p-6 max-w-5xl mx-auto">
                        <img 
                          src={smartInboxImage} 
                          alt="Screenshot der Smart Inbox mit Anrufliste und farbkodierten Tags im Fuhrpark KI-System"
                          className="w-full h-auto rounded-md shadow-lg"
                        />
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Follow-up Screenshot */}
                  <CarouselItem className="pl-2 md:pl-4">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-foreground mb-4">
                        Follow-up & SMS-Kommunikation
                      </h4>
                      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Schnelle Rückmeldungen per SMS direkt aus dem System heraus. 
                        Vollständiger Anrufverlauf mit allen Kategorien und Bearbeitungsständen.
                      </p>
                      <div className="bg-white rounded-lg shadow-xl p-6 max-w-5xl mx-auto">
                        <img 
                          src={callHistoryImage} 
                          alt="Screenshot der Follow-up & SMS-Kommunikation mit Anrufverlauf im Fuhrpark KI-System"
                          className="w-full h-auto rounded-md shadow-lg"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="-left-12 top-1/2 -translate-y-1/2" />
                <CarouselNext className="-right-12 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Messbare Ergebnisse für Ihr Fuhrparkmanagement
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50%+</div>
                <p className="text-muted-foreground">weniger Anrufe für Ihr Team</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Verfügbarkeit für Fahrzeugnutzer</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                <p className="text-muted-foreground">Reduzierung der Bearbeitungszeit</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Mehr Zeit für strategische Fuhrparksführung statt administrativer Tätigkeiten
            </p>
            <Button asChild size="lg" className="px-8 py-4 text-lg">
              <a href="https://meetings.hubspot.com/areichert" target="_blank" rel="noopener noreferrer">
                Kostenlose Beratung für Ihr Fuhrparkmanagement
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fuhrpark;