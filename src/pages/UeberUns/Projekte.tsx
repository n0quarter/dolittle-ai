import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExampleProjects from "@/components/ExampleProjects";

const ProjektePage = () => {
  return (
    <>
      <Helmet>
        <title>Projekte - Dolittle AI | Erfolgreiche KI-Implementierungen</title>
        <meta name="description" content="Entdecken Sie unsere erfolgreich umgesetzten KI-Projekte. Von Automatisierung bis hin zu intelligenten Workflows - sehen Sie unsere Referenzen." />
        <meta name="keywords" content="KI Projekte, AI Referenzen, Beispielprojekte, KI Implementierung, AI Use Cases" />
        <link rel="canonical" href="/ueber-uns/projekte" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Unsere <span className="text-primary">Projekte</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Entdecken Sie unsere erfolgreich realisierten KI-Projekte und lassen Sie sich von den Möglichkeiten inspirieren.
              </p>
            </div>
          </section>

          <ExampleProjects />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProjektePage;