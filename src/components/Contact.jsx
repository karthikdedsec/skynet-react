import burj from "../assets/burj.png";

//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div
      style={{ backgroundImage: `url(${burj})` }}
      className="h-[679px] w-full text-white"
    >
      <div className="section-container py-60">
        <div className="flex flex-col gap-8">
          <motion.h1
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-3xl md:text-6xl"
          >
            Interested In Working Together?
          </motion.h1>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-sm md:text-base"
          >
            Get in touch with our business development team today.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="border-2 px-6 py-2 w-52 flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all duration-200 ease-in-out"
          >
            GET IN TOUCH
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
