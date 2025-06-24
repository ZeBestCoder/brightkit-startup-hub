
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-brightkit-light border-b border-gray-200 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-brightkit-orange to-brightkit-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">BrightKit</span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-brightkit-blue transition-colors"
            >
              Log in
            </Button>
            <Button 
              className="bg-brightkit-orange hover:bg-brightkit-orange/90 text-white px-6 py-2 rounded-lg font-medium transition-all hover:scale-105"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
