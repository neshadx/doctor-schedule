import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  const navLinkStyle = ({ isActive }) =>
    `relative px-1 py-2 ${
    isActive 
      ? "relative text-black font-bold lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:w-full lg:after:h-[3px] lg:after:bg-black lg:after:scale-x-125 lg:after:origin-center"
      : "relative text-black hover:bg-[#e0e0e0] hover:rounded-md px-3 py-1 "
  }`
  return (
    <footer className="bg-white text-center pt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
   
        <Link
          to="/"
          className="flex justify-center items-center gap-2 text-xl font-bold mb-4"
        >
          <img src={logo} alt="logo" className="w-6 h-6" />
          MediMeet
        </Link>

      
        <div className="flex justify-center flex-wrap gap-6 mb-6 text-sm text-gray-600">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/bookings" className={navLinkStyle}>
            Bookings
          </NavLink>
          <NavLink to="/blogs" className={navLinkStyle}>
            Blogs
          </NavLink>
          <NavLink to="/contact" className={navLinkStyle}>
            Contact 
          </NavLink>
        </div>

     
        <hr className="mb-6 border-gray-400 w-full mx-auto" />

     
        <div className="flex justify-center gap-4 text-xl pb-10 flex-wrap">
          <a href="https://neshadmahmud.com/" target="_blank" rel="noreferrer">
            <FaGithub className="text-black-200 hover:scale-110 duration-200" />
          </a>
          <a href="https://x.com/0xNeshad" target="_blank" rel="noreferrer">
            <FaXTwitter className="text-black hover:scale-110 duration-200" />
          </a>
          <a href="https://neshad.com/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="text-sky-700 hover:scale-110 duration-200" />
          </a>
          <a href="https://youtu.be/KEP1UP5GGeQ?si=7RXo3N6v3Cbzc02Y" target="_blank" rel="noreferrer">
            <FaYoutube className="text-red-600 hover:scale-110 duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
