import { motion } from "framer-motion";
import Capture from "../assets/Capture.JPG";

const AboutMe = () => {
  return (
    <section id="about me" className="md:py-48 py-24">
      {/* ABOUT ME BOX */}
      <motion.div
        className="mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hiden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex justify-center items-center">
          <div className="bg-secondary md:h-[550px] md:w-[600px] w-[300px] h-[600px] flex-col items-center rounded-tl-[30px] rounded-tr-[2px] rounded-br-[30px] rounded-bl-[2px]">
            {/* DISPLAY PHOTO */}

            <div className="flex items-center justify-center mt-10">
              <img
                src={Capture}
                alt="me"
                className="w-[150px] h-[150px] rounded-full object-cover shadow-[0_35px_20px_-24px_rgb(0,0,0,0.3) hover:scale-110 transition duration-1000]"
              />
            </div>

            {/* HEADING */}

            <div className="mt-5 md:mt-10 flex flex-col justify-center items-center font-playfair mx-10">
              <p className="font-semibold text-2xl md:text-3xl">ABOUT ME</p>
              <p className="leading-6 md:leading-8 md:mt-7 mt-3">
                I live my life on the basis that anything is achievable, with
                hard work and consistency. With that being said, I recently
                decided to take the red pill and endavour into my journey
                through the world of Software Engineering. I've since found a
                home, a career which I fell in love with, and a goal to become
                the most valuable Software Engineer I can be.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
