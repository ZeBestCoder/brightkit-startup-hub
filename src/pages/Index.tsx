
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SchoolCarousel from "@/components/SchoolCarousel";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <SchoolCarousel />
      <FinalCTA />
    </div>
  );
};

export default Index;
