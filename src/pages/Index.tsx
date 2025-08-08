import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import WorkingApproach from "@/components/WorkingApproach";
import ExampleProjects from "@/components/ExampleProjects";
import ProjectProcess from "@/components/ProjectProcess";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import TrainingCertificates from "@/components/TrainingCertificates";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Team />
      <WorkingApproach />
      <ExampleProjects />
      <ProjectProcess />
      <Testimonials />
      <TrainingCertificates />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Index;
