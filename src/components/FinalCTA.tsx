
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brightkit-soft">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brightkit-orange/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brightkit-blue/10 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Turn Your{" "}
            <span className="bg-gradient-to-r from-brightkit-orange to-brightkit-blue bg-clip-text text-transparent">
              Ideas Into Reality
            </span>
            ?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of student entrepreneurs who are already building 
            the future with BrightKit.
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-brightkit-orange to-brightkit-blue hover:from-brightkit-orange/90 hover:to-brightkit-blue/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-xl"
          >
            Join BrightKit Today
          </Button>

          <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-500">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Free to start
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              No credit card required
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Student-friendly
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
