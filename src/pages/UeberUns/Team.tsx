import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Team - Dolittle AI | Unsere KI-Experten</title>
        <meta name="description" content="Lernen Sie unser Expertenteam kennen. Andreas und Viktor bringen jahrelange Erfahrung in KI-Entwicklung und digitaler Transformation mit." />
        <meta name="keywords" content="KI Team, AI Experten, Andreas Dolittle, Viktor, KI Entwickler, AI Berater" />
        <link rel="canonical" href="/ueber-uns/team" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Unser <span className="text-primary">Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Lernen Sie die Experten hinter Dolittle AI kennen - erfahrene Professionals mit einer Leidenschaft für innovative KI-Lösungen.
              </p>
            </div>
          </section>

          <Team />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TeamPage;