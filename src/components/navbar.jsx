import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import logo from "../assets/logo.webp";

export const Navbar = () => {
  return (
    <header className="container mx-auto">
      <div className="py-6 flex justify-between border-b items-center">
        <div className="uppercase flex flex-col">
          <img src={logo} alt="logo" className="w-[180px]" />
        </div>
        <div>
          <ul className="flex gap-6">
            <li className="flex shrink">
              <span className="bg-green-300 rounded-2xl w-11 h-11 flex justify-center items-center">
                <MapPin className="w-6 h-6 text-zinc-600" />
              </span>
              <div className="flex-1 pl-2">
                <h5 className="font-semibold">Address</h5>
                <p className="text-sm leading-3">
                  Plot Nos 8-11, Greater Noida 201310
                </p>
              </div>
            </li>
            <li className="flex shrink">
              <span className="bg-sky-300 rounded-2xl w-11 h-11 flex justify-center items-center">
                <Mail className="w-6 h-6 text-zinc-600" />
              </span>
              <div className="flex-1 pl-2">
                <h5 className="font-semibold">Email</h5>
                <p className="text-sm leading-3">admissions@bennett.edu.in</p>
              </div>
            </li>
            <li className="flex shrink">
              <span className="bg-teal-300 rounded-2xl w-11 h-11 flex justify-center items-center">
                <Phone className="w-6 h-6 text-zinc-600" />
              </span>
              <div className="flex-1 pl-2">
                <h5 className="font-semibold">Phone</h5>
                <p className="text-sm leading-3">1800-103-8484</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-6">
        <div className="flex justify-between items-center">
          <nav className="flex gap-6 text-zinc-800">
            <Link to="/" className="font-medium text-lg">
              Home
            </Link>
            <Link to="/about" className="font-medium text-lg">
              About
            </Link>
            <Link to="/contact" className="font-medium text-lg">
              Contact
            </Link>
          </nav>
          <a
            href="#"
            className="bg-green-300 rounded-full flex justify-center items-center max-w-fit py-4 px-6"
          >
            <span className="flex gap-3">Enroll</span>
          </a>
        </div>
      </div>
    </header>
  );
};
