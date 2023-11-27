import { Link } from "react-router-dom";

import { MapPin, Mail, Phone } from "lucide-react";
import logo from "../assets/logo.webp";

export const Footer = () => {
  return (
    <>
      {/* <div className="h-28 bg-gradient-to-b from-[#f4f0fc] to-teal-200"></div> */}
      <footer className="py-28 bg-teal-200">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 text-lg gap-6">
            <div className="col-span-2">
              <img src={logo} className="h-[100px] aspect-auto" />
              <p className="text-lg leading-7 mt-6 max-w-lg">
                Extending the core journalistic principles of Trust, Knowledge
                and Public Service, Bennett, Coleman and Co. Ltd. (BCCL)
                established over 178 years ago, has continually undertaken
                initiatives for the betterment of Indian society.
              </p>
            </div>

            <div>
              <h6 className="mb-6">
                <span className="text-2xl font-bold block">Quick Links</span>
                <span className="w-20 h-1 absolute bg-teal-400 rounded-2xl"></span>
              </h6>
              <ul className="flex flex-col divide-y text-lg">
                <li className="py-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="py-2">
                  <Link to="/about">About us</Link>
                </li>
                <li className="py-2">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="py-2">
                  <a href="">Programs</a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="mb-6">
                <span className="text-2xl font-bold block">Contact us</span>
                <span className="w-20 h-1 absolute bg-teal-400 rounded-2xl"></span>
              </h6>
              <ul className="flex flex-col gap-6">
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
                    <p className="text-sm leading-3">
                      admissions@bennett.edu.in
                    </p>
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
        </div>
      </footer>
    </>
  );
};
