import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import landing from "../assets/landing.svg";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full md:py-48 py-24"
    >
      {/* MAIN TEXT */}
      <div className="z-30 basic-2/5 mt-12 md:mt-32 md:ml-20">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Hi, I'm Wael Hourani.
          </p>
          <p className="mt-10 text-sm text-center md:text-start">
            Front-end Software Engineer on the persuit of excellence.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-secondary rounded-sm py-3 px-7 font-semibold hover:bg-black
      hover:text-secondary transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="bg-black text-secondary rounded-sm py-3 px-7 font-semibold w-[139.9px] hover:bg-secondary
      hover:text-black transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            &nbsp; Let's talk.
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, amount: 0.5 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>

      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:mr-10 ">
        {isAboveLarge ? (
          <div className="ml-20 ">
            <img
              alt="profile"
              className="hover: filter hover:sature-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[300px]"
              src={landing}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[250px] md:max-w-[300px] hover:filter hover:saturate-200 transition duration-500"
            src={landing}
          />
        )}
      </div>
    </section>
  );
};

export default Landing;
