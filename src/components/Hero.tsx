
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Ideas Deserve a{" "}
            <span className="bg-gradient-to-r from-brightkit-orange to-brightkit-blue bg-clip-text text-transparent">
              Team
            </span>
            .
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            BrightKit helps student entrepreneurs collaborate, plan, and access resources 
            to turn their brightest ideas into successful ventures.
          </p>
          
          <Button 
            size="lg"
            className="bg-brightkit-orange hover:bg-brightkit-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-lg"
          >
            Join BrightKit
          </Button>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-64 h-64 bg-gradient-to-r from-brightkit-orange to-brightkit-blue rounded-full blur-3xl animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
