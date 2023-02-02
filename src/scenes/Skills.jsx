import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import mongodb from "../assets/mongodb.svg";
import expressjs from "../assets/expressjs.svg";
import nodejs from "../assets/nodejs.svg";
import reactjs from "../assets/reactjs.svg";
import tailwind from "../assets/tailwind.svg";
import css from "../assets/css.svg";
import photoshop from "../assets/photoshop.svg";

const Skills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1050px)");
  return (
    <section id="skills" className="md:pt-10 md:pb-24 py:24 ">
      {/* HEADER SECTION */}
      <div className="flex flex-col justify-center items-center md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex flex-col xxs:items-start sm:items-center justify-center xxs:w-[300px] sm:w-auto ">
            <p className="font-playfair font-semibold md:text-4xl md:mb-5 text-2xl">
              MY <span>SKILLS</span>
            </p>
            <p className="mt-10 mx-auto">
              A list of my current skills which I belive will provide value to
              you.
            </p>
            <p className="mt-[5px]">Not limited, and continously learning..</p>
          </div>
        </motion.div>
      </div>

      {/* SKILL SECTION */}
      {isAboveLarge ? (
        <div className="flex md:justify-between items-center mx-auto">
          <motion.div
            lassName="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* TECH SKILLS */}
            <div className="flex flex-col items-center justify-center mt-20">
              <p className="font-playfair font-semibold text-4xl mb-5">
                <span>TECHNICAL SKILLS</span>
              </p>
              <p className="mt-1">Proficient in JavaScript.</p>
              <p>Proficient in React.js.</p>
              <p>Experience with Node.js & Express.js. </p>
              <p>Familiar with database management in MongoDB.</p>
              <p>Familiar with Git.</p>
            </div>
          </motion.div>

          <motion.div
            lassName="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: +50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* SOFT SKILLS */}
            <div className="flex flex-col items-center justify-center mt-20">
              <p className="font-playfair font-semibold text-4xl mb-5">
                <span>SOFT SKILLS</span>
              </p>
              <p className="mt-1 w-[325px]">
                A strong work ethic that has consistently led to exceptional
                performance in all job duties.
              </p>
              <p>Excel very well in both a team and independant. </p>
              <p>Strong problem-solving and analytical skills. </p>
              <p>Excellent communication & organization skills.</p>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="flex flex-col items-center mx-auto">
          {/* TECH SKILLS SMALLER SCREEN */}

          <div className="flex flex-col xxs:items-start sm:items-center justify-center mt-20 mx-auto sm:w-auto ">
            <p className="font-playfair font-semibold text-2xl mb-5">
              <span>TECHNICAL SKILLS</span>
            </p>
            <p className="mt-1">
              Proficient in JavaScript. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp;
            </p>
            <p className="mt-[5px]">Proficient in React.js.</p>
            <p className="mt-[5px]">Experience with Node.js & Express.js. </p>
            <p className="mt-[5px]">Familiar with Mongo DB management.</p>
            <p className="mt-[5px]">Familiar with Git.</p>
          </div>

          {/* SOFT SKILLS SMALLER SCREEN */}
          <div className="flex flex-col xxs:items-start sm:items-center justify-center mt-20 mx-auto xxs:w-[300px] sm:w-auto ">
            <p className="font-playfair font-semibold text-2xl mb-5">
              <span>SOFT SKILLS</span>
            </p>
            <p className="mt-1">
              A strong work ethic that has consistently led to exceptional
              performance in all job duties.
            </p>
            <p className="mt-[5px]">
              Excel very well in both a team and independant.
            </p>
            <p className="mt-[5px]">
              Strong problem-solving and analytical skills.{" "}
            </p>
            <p className="mt-[5px]">
              Excellent communication & organization skills.
            </p>
          </div>
        </div>
      )}

      {/* LOGO SECTION */}
      {/* logo row 1 */}

      <div className="flex justify-center items-center mt-5 gap-8">
        <div className="flex flex-col items-center h-[50px] w-[50px] hover:scale-110 hover:opacity-70  transition duration-300">
          <img className="w-[50px] h-[50px] " src={mongodb} alt="mongodb" />
          <p>MongoDB</p>
        </div>

        <div className="flex flex-col items-center h-[50px] w-[50px] hover:scale-110 hover:opacity-70  transition duration-300">
          <img
            className="w-[50px] h-[50px] hover:w-[80px] "
            src={expressjs}
            alt="expressjs"
          />
          <p>EspressJs</p>
        </div>

        <div className="flex flex-col items-center h-[50px] w-[50px] hover:scale-110 hover:opacity-70  transition duration-300">
          <img className="w-[50px] h-[50px]" src={reactjs} alt="reactjs" />
          <p>ReactJS</p>
        </div>

        <div className="flex flex-col items-center h-[50px] w-[50px] hover:scale-110 hover:opacity-70  transition duration-300">
          <img className="w-[50px] h-[50px]" src={nodejs} alt="nodejs" />
          <p>NodeJs</p>
        </div>
      </div>

      {/* logo row 2 */}
      <div className="flex justify-center items-center mt-20 gap-8">
        <div className="flex flex-col items-center h-[50px] w-[50px] hover:scale-110 hover:opacity-70  transition duration-300">
          <img className="w-[50px] h-[50px]" src={tailwind} alt="tailwind" />
          <p>Tailwind</p>
        </div>
        <div className="flex flex-col items-center h-[50px] w-[50px] hover:scale-110 hover:opacity-70  transition duration-300">
          <img className="w-[50px] h-[50px]" src={css} alt="css" />
          <p>CSS</p>
        </div>
        <div className="flex flex-col items-center h-[50px] w-[50px] hover:scale-110 hover:opacity-70  transition duration-300">
          <img className="w-[50px] h-[50px]" src={photoshop} alt="photoshop" />
          <p>Photoshop</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
