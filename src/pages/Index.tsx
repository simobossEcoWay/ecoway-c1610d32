
import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Sections from "@/components/landing/Sections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-neutral-900">
      <Navigation />
      <Hero />
      <TrustedBy />
      <Features />
      <Sections />
      <Footer />
    </div>
  );
};

export default Index;
