import { FaLinkedinIn } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import logo from "../assets/Skynet-Logo.svg";
import union2 from "../assets/Union2.png";

const footer = () => {
  return (
    <div className="section-container w-full bg-[#081746] relative overflow-hidden">
      <div className="py-14 text-white flex md:flex-row flex-col md:justify-around  gap-10">
        <div className="space-y-7">
          <img className="w-[80px] h-[80px]" src={logo} alt="logo" />
          <p className="text-sm">(+44)-203-813-0177</p>
          <p className="text-sm">(+971)-600-522-528</p>
          <p className="text-sm">info@skynetgroup.ae</p>
          <p className="text-sm">
            Company Address: 3 Briton Street, Leicester, England, LE3 0AA
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-base font-bold text-[#F9A368]">OUR GROUPS</h1>
          <div className="space-y-7 text-xs">
            <p className="hover:text-[#F9A368] transition-all duration-300 ease-in-out cursor-pointer">
              Freight Forwarding & Logistics
            </p>
            <p className="hover:text-[#F9A368] transition-all duration-300 ease-in-out cursor-pointer">
              General Trading
            </p>
            <p className="hover:text-[#F9A368] transition-all duration-300 ease-in-out cursor-pointer">
              Real Estate & Development
            </p>
            <p className="hover:text-[#F9A368] transition-all duration-300 ease-in-out cursor-pointer">
              Travel & Tourism
            </p>
            <p className="hover:text-[#F9A368] transition-all duration-300 ease-in-out cursor-pointer">
              Marketing & Advertising
            </p>
            <p className="hover:text-[#F9A368] transition-all duration-300 ease-in-out cursor-pointer">
              Event Management
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-base font-bold text-[#F9A368]">SITE MAP</h1>
          <div className="flex flex-col space-y-7 text-xs">
            <a
              href="#header"
              className="hover:text-[#F9A368] transition-all duration-300 ease-in-out cursor-pointer"
            >
              Home
            </a>
            <a className="hover:text-[#F9A368] transition-all duration-300 ease-in-out cursor-pointer">
              About Us
            </a>
            <a
              href="#companies"
              className="hover:text-[#F9A368] transition-all duration-300 ease-in-out cursor-pointer"
            >
              Our Companies
            </a>
            <a className="hover:text-[#F9A368] transition-all duration-300 ease-in-out cursor-pointer">
              Contact Us
            </a>
            <p className="hover:text-[#F9A368] transition-all duration-300 ease-in-out cursor-pointer">
              Privacy Policy
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-base font-bold text-[#F9A368]">FOLLOW US</h1>
          <div className="flex gap-2 ">
            <div className="w-[35px] h-[35px] rounded-full bg-[#e39c11] flex justify-center items-center cursor-pointer">
              <CgFacebook className="text-2xl" />
            </div>
            <div className="w-[35px] h-[35px] rounded-full bg-[#e39c11] flex justify-center items-center cursor-pointer">
              <AiOutlineTwitter className="text-2xl" />
            </div>
            <div className="w-[35px] h-[35px] rounded-full bg-[#e39c11] flex justify-center items-center cursor-pointer">
              <FaLinkedinIn className="text-xl" />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-1 bg-white rounded-full" />
      <div className="px-6 pt-4 pb-16">
        <p className="text-white text-sm">
          copyright @{new Date().getFullYear()} Skynet. All Rights Reserved
        </p>
      </div>
      <div className="absolute w-[629px] h-[567px] -bottom-56 -right-96 overflow-hidden">
        <img src={union2} alt="union" />
      </div>
    </div>
  );
};
export default footer;
