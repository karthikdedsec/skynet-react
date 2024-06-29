import { RxHamburgerMenu } from "react-icons/rx";
import { BiPhoneCall } from "react-icons/bi";

import backgroundImage1 from "../assets/Rectangle5.png";
import logo from "../assets/Skynet-Logo.svg";
import skynet from "../assets/Ellipse.png";
import person from "../assets/person.jpg";
import property from "../assets/property.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//motion
import { motion } from "framer-motion";
//variants
import { fadeIn, fadeIn4 } from "../variants";

const Header = ({ onClickButton }) => {
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();
  // const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 29) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (event) => {
    event.preventDefault();
    document.getElementById("groups").scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleScrollToSection2 = (event) => {
    event.preventDefault();
    document.getElementById("companies").scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleScrollToSection3 = (event) => {
    event.preventDefault();
    document.getElementById("header").scrollIntoView({
      behavior: "smooth",
    });
  };

  const homeNavigate = () => {
    navigate("#header");
  };

  return (
    <div
      id="header"
      className="relative w-full pb-7"
      style={{
        backgroundImage: `url(${backgroundImage1})`,
        backgroundSize: "cover",
      }}
    >
      {/* navbar section */}
      <header className="flex flex-col">
        <div
          className={`w-full h-[88px] flex items-center z-50 ${
            sticky
              ? "fixed bg-[#061636] transition-all duration-500 ease-in-out shadow-2xl"
              : ""
          } `}
        >
          <div className="section-container flex items-center justify-between">
            <div className="w-[63px] h-[63px]">
              <img
                onClick={handleScrollToSection3}
                src={logo}
                className="hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
                alt="skynet logo"
              />
            </div>
            <ul className="z-20 text-white font-normal flex items-center gap-6 cursor-pointer">
              <a
                onClick={handleScrollToSection3}
                href="#header"
                className="hover:text-[#C67035] transition-all duration-300 ease-in-out md:flex hidden"
              >
                HOME
              </a>
              <li className="hover:text-[#C67035] transition-all duration-300 ease-in-out md:flex hidden">
                ABOUT US
              </li>
              <a
                onClick={handleScrollToSection2}
                href="#companies"
                className="hover:text-[#C67035] transition-all duration-300 ease-in-out md:flex hidden"
              >
                OUR COMPANIES
              </a>
              <a
                href="#groups"
                onClick={handleScrollToSection}
                className="hover:text-[#C67035] transition-all duration-300 ease-in-out md:flex hidden"
              >
                OUR GROUPS
              </a>
              <button className="flex hover:text-black hover:bg-white hover:border-black transition-all duration-300   gap-1 items-center bg-black text-white px-4 py-2 rounded-full">
                <BiPhoneCall className="h-6 w-6" />
                <p className="font-normal">contact us</p>
              </button>
              <RxHamburgerMenu
                onClick={onClickButton}
                className="md:hidden text-xl"
              />
            </ul>
          </div>
        </div>

        {/* <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
          }}
          className="w-[380px] h-[50px] bg-white self-end mr-8 mt-1"
        >
          <div className="flex items-center justify-center pt-1 gap-2">
            <p className="text-black font-medium">(+44)-203-813-0177</p>
            <button className="flex hover:text-slate-300 transition-all duration-300   gap-1 items-center bg-black text-white px-4 py-2 rounded-full">
              <BiPhoneCall className="h-6 w-6" />
              <p className="font-normal">contact us</p>
            </button>
          </div>
        </div> */}
      </header>
      {/* <img className="fixed" src={skynet} alt="skynet logo" /> */}

      {/* content section */}
      <div className="section-container flex flex-col md:flex-row gap-8 md:mt-32 mt-14 md:animate-fade-in">
        <div className=" flex flex-wrap flex-col gap-4 space-y-6">
          <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold">
            Your <span className="text-[#D47E43]">partner</span> in Property and
            events
          </h1>
          <p className="text-[rgba(255,255,255,0.80)] md:text-sm md:leading-8 text-xs leading-7">
            We are living in a world where the global economic situation has
            left us with no option struggle to find ways and means to save
            energy by looking for cost effective and efficient solution. A great
            vision, an innovative approach and restless efforts are all-the-time
            proven tools to establish an organization and direct it
            successfully.
          </p>

          <div className="text-white flex gap-8">
            <div className="border-[#C67035] border-2 hover:bg-[#B55F24] transition-all duration-300 ease-in-out cursor-pointer flex justify-center items-center w-[185px] h-[55px] font-semibold rounded-md">
              Our Services
            </div>
            <div className="border-white cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out flex justify-center items-center border-2 w-[185px] h-[55px] rounded-md gap-2">
              <BiPhoneCall className=" hover:text-black h-6 w-6" />
              <p className="font-semibold">Contact Us</p>
            </div>
          </div>
        </div>
        <img
          className="md:w-[411px] md:h-[560px] shadow-xl object-cover"
          src={person}
          alt="person and cargo"
        />
      </div>
    </div>
  );
};
export default Header;
