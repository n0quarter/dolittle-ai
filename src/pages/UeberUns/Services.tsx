import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services - Dolittle AI | KI-Strategieberatung & Framework Entwicklung</title>
        <meta name="description" content="Entdecken Sie unsere KI-Services: Strategieberatung, Framework Entwicklung, Agenten & Workflows, Workshops & Training. DSGVO-konforme Lösungen." />
        <meta name="keywords" content="KI Services, AI Strategieberatung, Framework Entwicklung, KI Workflows, AI Agenten" />
        <link rel="canonical" href="/ueber-uns/services" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Unsere <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Comprehensive KI-Lösungen für Ihr Unternehmen - von der Strategieentwicklung bis zur technischen Umsetzung.
              </p>
            </div>
          </section>

          <Services />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;