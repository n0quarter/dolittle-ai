import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Team from "@/components/Team";
import ExampleProjects from "@/components/ExampleProjects";

const UeberUns = () => {
  return (
    <>
      <Helmet>
        <title>Über uns - Dolittle AI | Ihr KI-Experten Team</title>
        <meta name="description" content="Lernen Sie das Dolittle AI Team kennen. Experten für KI-Strategieberatung, Framework Entwicklung und DSGVO-konforme AI-Lösungen." />
        <meta name="keywords" content="KI Team, AI Experten, KI Beratung, Andreas Dolittle, Viktor" />
        <link rel="canonical" href="/ueber-uns" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Über <span className="text-primary">Dolittle AI</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Wir sind Ihr Partner für DSGVO-konforme KI-Lösungen. 
                Von der Strategieentwicklung bis zur Implementierung begleiten wir Sie auf Ihrem Weg zur erfolgreichen KI-Integration.
              </p>
            </div>
          </section>

          <Team />
          <Services />
          <ExampleProjects />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default UeberUns;