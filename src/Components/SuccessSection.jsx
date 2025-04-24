import CountUp from "react-countup";

const SuccessSection = () => {
  const stats = [
    {
      id: 1,
      icon: "https://i.ibb.co.com/DHLJq1J0/medical-team-2.png",
      number: 300,
      label: "Total Doctors"
    },
    {
      id: 2,
      icon: "https://i.ibb.co.com/DPHYqpvp/satisfaction.png",
      number: 500,
      label: "Total Reviews"
    },
    {
      id: 3,
      icon: "https://i.ibb.co.com/JwbwNqkN/supporting.png",
      number: 2700,
      label: "Patients"
    },
    {
      id: 4,
      icon: "https://i.ibb.co.com/Vc2mXL1q/team.png",
      number: 900,
      label: "Total Staffs"
    }
  ];

  return (
    <section className="bg-[#E7E9ED] py-16 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          We Provide Best Medical Services
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ id, icon, number, label }) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow p-6 flex flex-col items-start"
            >
              <img
                src={icon}
                alt={label}
                className="w-12 h-12 object-contain mb-3"
              />
              <h3 className="text-3xl font-bold text-black">
                <CountUp end={number} duration={2} />+
              </h3>
              <p className="text-gray-700 mt-1 text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
