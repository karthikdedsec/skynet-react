import { BiRightArrowAlt } from "react-icons/bi";
import tint from "../assets/Rectangle13.png";
import trading from "../assets/Rectangle18.png";
import events from "../assets/Rectangle19.png";
import travel from "../assets/Rectangle20.png";
import logistics from "../assets/Rectangle21.png";
import development from "../assets/development.png";
import marketing from "../assets/marketing.png";

//motion
import { motion } from "framer-motion";
//variants
import { fadeIn, fadeIn3 } from "../variants";

const Groups = () => {
  return (
    <div
      id="groups"
      className="w-full min-h-screen pt-6"
      style={{ backgroundImage: `url(${tint})` }}
    >
      <div className="section-container py-16">
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h2 className="text-4xl font-semibold text-[#26347D]">OUR GROUPS</h2>
          <p className="text-black text-sm font-normal">
            We are living in a world where the global economic situation has
            left us with no option struggle to find ways and means to save
            energy by looking for cost-effective and efficient solutions.
          </p>
        </motion.div>
        {/* groups */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 md:mx-auto sm:grid-cols-2 mx-4  grid-cols-1 items-center gap-12 my-6 cursor-pointer">
          <motion.div
            variants={fadeIn3("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hover:scale-110 transform transition-all duration-500 ease-in-out flex flex-col justify-center relative"
          >
            <img className="shadow-lg" src={trading} alt="trading" />
            <p className="text-lg font-semibold">General Trading</p>
            <p className="w-[236px]">
              Al Naqsh General Trading LLC is working with different kinds.
            </p>
            <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center hover:scale-125 bg-black absolute z-20 bottom-0 right-0 transition-all duration-300 ease-in-out">
              <BiRightArrowAlt className="text-white w-7 h-7" />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn3("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hover:scale-110 transform transition-all duration-500 ease-in-out flex flex-col justify-center relative"
          >
            <img className="shadow-lg" src={events} alt="events" />
            <p className="text-lg font-semibold">Event Management</p>
            <p className="w-[236px]">
              Big Buzz Event Management L.L.C was established some years back.
            </p>
            <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center hover:scale-125 bg-black absolute z-20 bottom-0 right-0 transition-all duration-300 ease-in-out">
              <BiRightArrowAlt className="text-white w-7 h-7" />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn3("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hover:scale-110 transform transition-all duration-500 ease-in-out flex flex-col justify-center relative"
          >
            <img className="shadow-lg" src={travel} alt="travel" />
            <p className="text-lg font-semibold">Travel & Tourism</p>
            <p className="w-[236px]">
              Miracle Travel and Tourism started with humble beginnings in July.
            </p>
            <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center hover:scale-125 bg-black absolute z-20 bottom-0 right-0 transition-all duration-300 ease-in-out">
              <BiRightArrowAlt className="text-white w-7 h-7" />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn3("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hover:scale-110 transform transition-all duration-500 ease-in-out flex flex-col justify-center relative"
          >
            <img className="shadow-lg" src={development} alt="travel" />
            <p className="text-lg font-semibold">Real Estate & Development</p>
            <p className="w-[236px]">
              Miracle Travel and Tourism started with humble beginnings in July.
            </p>
            <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center hover:scale-125 bg-black absolute z-20 bottom-0 right-0 transition-all duration-300 ease-in-out">
              <BiRightArrowAlt className="text-white w-7 h-7" />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn3("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hover:scale-110 transform transition-all duration-500 ease-in-out flex flex-col justify-center relative"
          >
            <img className="shadow-lg" src={marketing} alt="travel" />

            <p className="text-lg font-semibold">Marketing & Advertising</p>

            <p className="w-[236px]">
              Miracle Travel and Tourism started with humble beginnings in July.
            </p>
            <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center hover:scale-125 bg-black absolute z-20 bottom-0 right-0 transition-all duration-300 ease-in-out">
              <BiRightArrowAlt className="text-white w-7 h-7" />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn3("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hover:scale-110 transform transition-all duration-500 ease-in-out flex flex-col justify-center relative"
          >
            <img className="shadow-lg" src={logistics} alt="logistics" />

            <p className="text-lg font-semibold w-[236px]">
              Freight Forwarding & Logistics
            </p>

            <p className="w-[236px]">
              United New Lands PVT L.T.D continues to be a growth.
            </p>
            <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center hover:scale-125 bg-black absolute z-20 bottom-0 right-0 transition-all duration-300 ease-in-out">
              <BiRightArrowAlt className="text-white w-7 h-7" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Groups;
