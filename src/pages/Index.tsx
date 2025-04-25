
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import DonateSection from "@/components/DonateSection";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <DonateSection />
      <Features />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
