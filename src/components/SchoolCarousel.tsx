
const SchoolCarousel = () => {
  const schools = [
    "UC Berkeley", "Stanford", "UCLA", "USC", "UC San Diego", 
    "Cal Poly", "UC Davis", "UC Irvine", "Caltech", "UCSB"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by student founders across{" "}
            <span className="text-brightkit-orange">California</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {schools.map((school, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center w-32 h-20 bg-gray-100 rounded-lg border hover:shadow-md transition-shadow"
              >
                <span className="text-gray-600 font-medium text-sm text-center px-2">
                  {school}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {schools.map((school, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center w-32 h-20 bg-gray-100 rounded-lg border hover:shadow-md transition-shadow"
              >
                <span className="text-gray-600 font-medium text-sm text-center px-2">
                  {school}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolCarousel;
