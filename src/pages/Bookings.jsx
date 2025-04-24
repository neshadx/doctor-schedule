
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import Chart from "./Chart";

// const Bookings = () => {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
//     setAppointments(savedAppointments);
//   }, []);

//   const cancelAppointment = (id) => {
//     const updatedAppointments = appointments.filter((appointment) => appointment.id !== id);
//     localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
//     setAppointments(updatedAppointments);
//     toast.error("Appointment Cancelled", {
//       position: "top-right",
//       autoClose: 500,
//     });
//   };

//   const handleCancelClick = (id) => {
//     setTimeout(() => cancelAppointment(id), 500);
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
//       <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-2">My Today Appointments</h2>
//       <p className="text-gray-600 text-center mb-6 text-sm sm:text-base font-medium">
//         Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
//       </p>

//       {appointments.length === 0 ? (
//         <div className="text-center mt-20">
//           <h3 className="text-xl font-semibold">No Appointments Found</h3>
//           <Link
//             to="/"
//             className="inline-block mt-4 bg-blue-600 text-white px-5 py-2.5 rounded-3xl hover:bg-blue-700 transition"
//           >
//             Go to Homepage
//           </Link>
//         </div>
//       ) : (
//         <div>
//           {/* Chart Container */}
//           <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-md mb-8">
//             <Chart appointments={appointments} />
//           </div>

//           {/* Appointment Cards */}
//           <div className="grid gap-6 grid-cols-1">
//             {appointments.map((doctor) => (
//               <div
//                 key={doctor.id}
//                 className="bg-white p-6 rounded-3xl w-full shadow-sm border"
//               >
//                 <div className="flex justify-between items-start border-b pb-4">
//                   <div>
//                     <h3 className="text-base sm:text-lg font-semibold">{doctor.name}</h3>
//                     <p className="text-sm text-gray-600">{doctor.education}</p>
//                   </div>
//                   <p className="text-sm text-right text-gray-700 font-medium">
//                     Appointment Fee: {doctor.fee}
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => handleCancelClick(doctor.id)}
//                   className="mt-6 w-full text-center text-sm font-semibold text-red-600 border border-red-400 rounded-full py-2 hover:bg-red-600 hover:text-white transition duration-200"
//                 >
//                   Cancel Appointment
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Bookings;



import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Chart from "./Chart";

const Bookings = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(savedAppointments);
  }, []);

  const cancelAppointment = (id) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== id);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);
    toast.error("Appointment Cancelled", {
      position: "top-right",
      autoClose: 500,
    });
  };

  const handleCancelClick = (id) => {
    setTimeout(() => cancelAppointment(id), 500);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
      {appointments.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          You Have Not Booked Any Appointment Yet
        </h1>
        <p className=" text-base md:text-lg text-gray-700 mb-6">
        You haven’t set up an appointment yet - no stress! Finding the perfect doctor is fast and effortless. Check out our trusted specialists and book your visit in just a few clicks. Your wellness journey starts today.
        </p>
        <Link
          to="/"
          className="bg-[#155DFC] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
        >
          Book An Appointment
        </Link>
      </div>
      
      ) : (
        <div>
          {/* Chart Container */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-md mb-8">
            <Chart appointments={appointments} />
          </div>

          {/* Heading + Subtitle (After Chart) */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              My Today's Appointment
            </h2>
            <p className="mt-2 text-gray-600 font-medium max-w-xl mx-auto text-sm sm:text-base">
              Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
            </p>
          </div>

          {/* Appointment Cards */}
          <div className="grid gap-6 grid-cols-1">
            {appointments.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white p-6 rounded-3xl w-full shadow-sm "
              >
                <div className="flex justify-between items-start border-b border-dashed pb-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">{doctor.name}</h3>
                    <p className="text-sm text-gray-600">{doctor.education}</p>
                  </div>
                  <p className="text-sm text-right text-gray-700 font-medium">
                    Appointment Fee: {doctor.fee}
                  </p>
                </div>

                <button
                  onClick={() => handleCancelClick(doctor.id)}
                  className="mt-6 w-full text-center text-sm font-semibold text-[#FF0000] border border-red-400 rounded-full py-2 hover:bg-red-400 hover:text-white transition duration-200 cursor-pointer"
                >
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;







