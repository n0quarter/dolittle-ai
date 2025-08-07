import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkingMethod from "@/components/WorkingMethod";
import ExampleProjects from "@/components/ExampleProjects";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WorkingMethod />
      <ExampleProjects />
      <Team />
      <Testimonials />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Index;
