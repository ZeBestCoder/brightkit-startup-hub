
import { Users, CheckSquare, DollarSign } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Collaboration",
      description: "Connect with like-minded student entrepreneurs and build your dream team with powerful collaboration tools."
    },
    {
      icon: CheckSquare,
      title: "Task Management",
      description: "Stay organized and track progress with intuitive project management features designed for student teams."
    },
    {
      icon: DollarSign,
      title: "Access to Funding",
      description: "Discover funding opportunities, grants, and investor connections specifically curated for student startups."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to{" "}
            <span className="text-brightkit-blue">Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From idea to execution, BrightKit provides the tools and connections 
            student entrepreneurs need to thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-brightkit-orange to-brightkit-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
