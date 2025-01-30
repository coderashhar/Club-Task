export default function SponsorsSection() {
    const sponsors = [
      { id: 1, name: "Frontify", logo: "public/svg/logo1.svg" },
      { id: 2, name: "Swiggy", logo: "public/svg/logo8.svg" },
      { id: 3, name: "highradius", logo: "public/svg/logo3.svg" },
      { id: 4, name: "Multiplier", logo: "public/svg/logo4.svg" },
      { id: 5, name: "NordVPN", logo: "public/svg/logo5.svg" },
      { id: 6, name: "MongoDB", logo: "public/svg/logo6.svg" },
      { id: 7, name: "Jotform", logo: "public/svg/logo7.svg" },
      { id: 8, name: "GoodData", logo: "public/svg/logo2.svg" },
    ];
  
    return (
      <div className="py-16 mb-15 mt-20">
        <h2 className="text-4xl text-center text-white mb-8">
          Our Sponsors
        </h2>
        <p className="text-center text-blue-500 mb-12">
          A huge thanks to our incredible sponsors for supporting us and making our events possible.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105 h-32" 
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }