
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DoctorNotFound from "../Components/DoctorNotFound";

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/doctors.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((doc) => doc.id === id);
        setDoctor(found || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading doctor data:", error);
        setLoading(false);
      });
  }, [id]);

  const handleBooking = () => {
    if (!doctor) return;

    const existingBookings = JSON.parse(localStorage.getItem("appointments")) || [];
    const alreadyBooked = existingBookings.some((item) => item.id === doctor.id);

    toast.dismiss();

    if (alreadyBooked) {
      toast.error("Already Booked!", {
        position: "top-right",
        autoClose: 500,
      });
      return;
    }

    const newBooking = {
      id: doctor.id,
      name: doctor.name,
      education: doctor.education,
      speciality: doctor.speciality,
      fee: doctor.fee,
    };

    const updatedBookings = [...existingBookings, newBooking];
    localStorage.setItem("appointments", JSON.stringify(updatedBookings));

    toast.success(`Booked with ${doctor.name}`, {
      position: "top-right",
      autoClose: 500,
    });

    setTimeout(() => {
      navigate("/bookings");
    }, 500);
  };

  if (loading) return <div className="text-center p-10">Loading...</div>;

  if (!doctor) return <DoctorNotFound reg={id} />;

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
      {/* Profile Summary */}
      <div className="bg-white rounded-3xl p-10 text-center shadow-sm">
  <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
    Doctor’s Profile Details
  </h2>
  <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg">
    Get to know your doctor before your appointment. View detailed profiles including qualifications, specialties, experience, patient reviews, and consultation availability — all in one place. We believe informed choices lead to better care.
  </p>
  <div className="mt-6 flex justify-center">
    <div className="animate-bounce">
      <svg
        className="w-6 h-6 text-gray-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</div>


      <br />

      {/* Doctor Details */}
      <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col md:flex-row gap-6 items-center md:items-start w-full">
  <img
    src={doctor.image}
    alt={doctor.name}
    className="w-64 h-64 object-cover rounded-2xl shadow"
  />

  <div className="flex-1 text-center md:text-left">
    <h3 className="text-2xl font-bold mb-2">{doctor.name}</h3>

    <p className="text-gray-700 mb-2">{doctor.education}</p>

    <p className="mb-2 text-gray-800 font-medium">
      Working At <br />
      <span className="font-bold ">{doctor.work}</span>
    </p>

    <div className="flex items-center justify-center md:justify-start text-gray-600 text-sm gap-1 mb-4 mt-4 border-t border-b border-dashed pt-2 pb-2">
      <span>Ⓡ</span>
      <span >Reg No : {doctor.registration}</span>
    </div>

    <p className="font-semibold mb-1 flex flex-wrap items-center gap-2 justify-center md:justify-start">Availability {doctor.availliblity?.split(',').map((day, index) => (
        <span
          key={index}
          className="bg-yellow-100 text-gray-700 text-sm px-4 py-1 rounded-full border border-yellow-300 "
        >
          {day.trim()}
        </span>
      ))}</p>

{/* <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start ">
  <p className="font-semibold">Availability:</p>
  {doctor.availliblity?.split(',').map((day, index) => (
    <span
      key={index}
      className="bg-yellow-100 text-gray-700 text-sm px-4 py-1 rounded-full border border-yellow-300"
    >
      {day.trim()}
    </span>
  ))}
</div> */}
    <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
      
    </div>

    <p className="text-sm text-gray-700">
      Consultation Fee:{" "}
      <span className="text-blue-600 font-semibold">
        Taka : {doctor.fee}
      </span>{" "}
      (incl. Vat)
      <a href="#" className="text-blue-500 ml-1">
        Per consultation
      </a>
    </p>
  </div>
</div>


      <br />

      {/* Booking */}
      <div className="bg-white p-6 rounded-2xl shadow-sm w-full">
  <h2 className="text-center text-xl font-bold mb-4">Book an Appointment</h2>

  <div className="border-t border-dashed pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
    <p className="font-medium text-gray-800">Availability</p>
    <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold">
      Doctor Available Today
    </span>
  </div>

  <div className="bg-yellow-100 text-yellow-800 text-sm flex items-center gap-2 px-4 py-3 rounded-xl mb-6">
    <span className="text-lg">⚠️</span>
    <span>
      Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
    </span>
  </div>

  <button
    onClick={handleBooking}
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full text-center transition-all duration-200 cursor-pointer"
  >
    Book Appointment Now
  </button>
</div>

    </div>
  );
};

export default DoctorDetails;
