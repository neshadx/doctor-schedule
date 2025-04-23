import React from "react";


const HeroSection = () => {
  return (
    <section
      className="border rounded-4xl m-8 border-white bg-gradient-to-t from-white to-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Dependable Care, Backed by Trusted <br /> Professionals.
        </h1>

       
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Our platform connects you with verified, experienced doctors across various specialties —
          all at your convenience. Whether it’s a routine checkup or urgent consultation, book
          appointments in minutes and receive quality care you can trust.
        </p>

        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search any doctor..."
            className="w-full px-6 py-2 border-[#E7E9ED] rounded-full shadow outline-none bg-white"
          />
          <button className="w-2xs bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all cursor-pointer">
            Search Now
          </button>
        </div>

  


      
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <img
            src="https://i.ibb.co.com/TM2TVYGq/p-001myambulance2019pxd287igyd9ihigxa7ao.jpg"
            alt="Doctor 1"
            className="rounded-2xl shadow-md w-full md:w-1/2 object-cover"
          />
          <img
            src="https://i.ibb.co.com/zhHZXFgs/Screenshot-19.png"
            alt="Doctor 2"
            className="rounded-2xl shadow-md w-full md:w-1/2 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
