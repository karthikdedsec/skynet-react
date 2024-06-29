import purple from "../assets/Rectangle13.png";
import tower from "../assets/Rectangle6.png";
import ceoback from "../assets/ceoback.png";
import ceo from "../assets/ceo.png";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn2 } from "../variants";

const Message = () => {
  return (
    <div
      className="w-full "
      style={{
        backgroundImage: `url(${purple})`,

        backgroundPosition: "right bottom",
      }}
    >
      <motion.div
        variants={fadeIn2("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="section-container py-20 flex md:flex-row flex-col gap-8"
      >
        {/* message section */}
        <motion.div
          variants={fadeIn2("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex-1 pt-24 space-y-12"
        >
          <h2 className="text-4xl font-semibold text-[#26347D]">
            MESSAGE FROM CEO{" "}
          </h2>
          <p className="leading-7 text-sm font-normal text-[rgba(0, 0, 0, 0.80)]">
            We are living in a world where the global economic situation has
            left us with no option struggle to find ways and means{" "}
            <a className="text-[#D47E43]" href="https://dubaiescortstate.com">
              dubaiescortstate.com
            </a>{" "}
            to save energy by looking for cost effective and efficient solution.
            A great vision, an innovative approach and restless efforts are
            all-the-time proven tools to establish an organization and direct it
            successfully. Having spent over many years with a distinct position
            in the industry, we still believe that to remain a leading group of
            companies we have to strive hard with enhanced far-sightedness for
            innovation.
          </p>
          <button className="px-7 py-4 border-2 text-black border-[#032261] hover:bg-[#032261] transition-all duration-300 ease-in-out hover:text-white text-base">
            READ MORE
          </button>
        </motion.div>
        {/* image section */}
        <div className="flex-1">
          <motion.div
            variants={fadeIn2("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="z-20 bg-[#D9D9D9] w-[530px] h-[500px] relative"
          >
            {/* <div className="bg-[#D9D9D9] w-[530px] h-[500px] relative"></div> */}
            <img
              src={ceo}
              className="w-[541px] h-[495px] absolute -top-3 -right-5"
              alt="ceo"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
export default Message;
