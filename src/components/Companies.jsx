import link from "../assets/companies/logo.svg";
import hermes2 from "../assets/companies/hermes2.png";
import { Link } from "react-router-dom";
import logo from "../assets/Skynet-Logo.svg";
import union from "../assets/Union.png";
import screenshot from "../assets/skynet.png";
import sruk from "../assets/companies/sruk.png";
import builder from "../assets/companies/builderlogo.png";
import fitTechnologies from "../assets/companies/FitTechnologiesLLC.png";
import memorableWorld from "../assets/companies/MemorableWorldLTD..png";
import binZaid from "../assets/companies/binzaid.png";
import sevenSeas from "../assets/companies/sevenseas.png";
import holiday from "../assets/companies/holiday.png";
import selfReliance from "../assets/companies/selfreliance.png";
import fm from "../assets/companies/fm.png";

//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const handleClick = () => {
  console.log("hello there");
};

const Companies = () => {
  return (
    <div
      id="companies"
      className="min-h-screen w-full relative bg-[#081746] overflow-hidden shadow-lg"
    >
      <div className="section-container pb-3">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="pt-40 pb-12 flex flex-col gap-4"
        >
          <h2 className="text-[#D47E43] text-4xl font-semibold">
            OUR COMPANIES
          </h2>
          <p className="text-white-80 text-sm font-normal">
            We are living in a world where the global economic situation has
            left us with no option struggle to find ways and means to save
            energy by looking for cost effective and efficient solution. A great
            vision, an innovative approach and restless efforts are all-the-time
            proven tools to establish an organization and direct it
            successfully.
          </p>
        </motion.div>
        <div className="flex flex-wrap items-center gap-11 mt-11">
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Link to="https://www.linkandcrosslink.ae/">
              <img
                src={link}
                className="object-contain w-[160px] h-[80px] hover:scale-105 transition-all duration-500 ease-in-out"
                alt="link and crosslink"
              />
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Link to={"https://www.hermeslegal.ae/"}>
              <div className="object-contain hover:scale-105 transition-all duration-500 ease-in-out">
                <img src={hermes2} alt="hermes" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 1.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Link to={"https://www.sruk.org/about-us/"}>
              <div
                onClick={handleClick}
                className="object-contain hover:scale-110 transition-all shadow-lg w-[80px] h-[80px] duration-500 ease-in-out"
              >
                <img src={sruk} alt="sruk" />
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 1.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Link to={"https://sevenseashr.co.uk/"}>
              <div className="object-contain cursor-pointer hover:scale-105 transition-all shadow-lg duration-500 ease-in-out">
                <img src={builder} alt="builder" />
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 1.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Link to={""}>
              <div className="object-contain hover:scale-110 transition-all shadow-lg w-[80px] h-[80px] duration-500 ease-in-out">
                <img src={screenshot} alt="skynet" />
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 2.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Link to={""}>
              <div className="object-contain hover:scale-110 transition-all shadow-lg w-[293px] h-[32px] duration-500 ease-in-out">
                <img src={fitTechnologies} alt="fit technologies" />
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 2.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Link to={""}>
              <div className="object-contain hover:scale-110 transition-all shadow-lg w-[308px] h-[32px] duration-500 ease-in-out">
                <img src={memorableWorld} alt="momorable world" />
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 2.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Link to={""}>
              <div className="object-contain hover:scale-110 transition-all shadow-lg w-[161px] h-[90px] duration-500 ease-in-out">
                <img src={binZaid} alt="bin zaid trading" />
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 3.0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Link to={""}>
              <div className="object-contain hover:scale-110 transition-all shadow-lg w-[161px] h-[90px] duration-500 ease-in-out">
                <img src={sevenSeas} alt="seven seas hr management" />
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 3.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Link to={""}>
              <div className="object-contain hover:scale-110 transition-all shadow-lg md:w-[281px] md:h-[70px] w-[231px] h-[66px] duration-500 ease-in-out">
                <img src={holiday} alt="Holiday international" />
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 3.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Link to={""}>
              <div className="object-contain hover:scale-110 transition-all shadow-lg md:w-[145px] md:h-[102px] w-[95px] h-[50px] duration-500 ease-in-out">
                <img src={selfReliance} alt="self reliance" />
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 3.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Link to={""}>
              <div className="object-contain hover:scale-110 transition-all shadow-lg md:w-[60px] md:h-[60px] w-[50px] h-[50px] duration-500 ease-in-out">
                <img src={fm} alt="fm 91" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute w-[629px] h-[567px] -left-48 -top-96">
        <img src={union} alt="union" />
      </div>
    </div>
  );
};
export default Companies;
