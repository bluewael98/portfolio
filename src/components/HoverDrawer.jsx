import React from "react";
import { motion } from "framer-motion";
import dashboardphoto from "../assets/dashboardphoto.JPG";
import portfoliophoto from "../assets/portfoliophoto.JPG";

const leftDrawerVariants = {
  open: {
    x: "0%",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  closed: {
    x: "-65%",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

const rightDrawerVariants = {
  open: {
    x: "0%",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  closed: {
    x: "65%",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

const HoverDrawer = () => {
  const [isLeftOpen, setLeftOpen] = React.useState(false);
  const [isRightOpen, setRightOpen] = React.useState(false);
  return (
    <div className="container bg-background py-20 flex rounded-full justify-between align-top overflow-hidden w-[100%]">
      {/* LEFT DASHBOARD PROJECT */}
      <motion.div
        className="drawer w-[800px] h-[400px] bg-secondary rounded-r-full mt-10 drop-shadow-xl overflow-hidden"
        variants={leftDrawerVariants}
        initial="closed"
        animate={isLeftOpen ? "open" : "closed"}
        onHoverStart={() => setLeftOpen(true)}
        onHoverEnd={() => setLeftOpen(false)}
      >
        <img
          src={dashboardphoto}
          alt="dashboardhoto"
          className="circle w-[300px] h-[300px] rounded-full absolute right-4 bottom-12 top-12 drop-shadow-lg object-cover border-background border-solid border-4 cursor-pointer hover:scale-105 duration-500"
          onClick={() =>
            window.open("https://wael-mern-app.onrender.com", "_blank")
          }
        />

        <div className="bg-background rounded-r-full flex flex-col justify-center mt-12 w-[400px] h-[300px]">
          <h3 className=" text-black font-bold text-lg ml-10">
            Dashboard tracking App.
          </h3>
          <p className=" text-black font-bold text-xs w-[350px] ml-10">
            Web application created with MERN stack. On the front-end, I used;
            Material UI, Material UI Data Grid, Nivo Charts, Redux Toolkit and
            RTKQ. For the back-end I used; Node JS, Express JS & Mongoose.
          </p>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className="drawer w-[800px] h-[400px] bg-secondary rounded-l-full my-10 drop-shadow-xl overflow-hidden flex flex-row"
        variants={rightDrawerVariants}
        initial="closed"
        animate={isRightOpen ? "open" : "closed"}
        onHoverStart={() => setRightOpen(true)}
        onHoverEnd={() => setRightOpen(false)}
      >
        <img
          src={portfoliophoto}
          alt="profilephoto"
          className="circle w-[300px] h-[300px] rounded-full mt-12 ml-5 mr-1 drop-shadow-lg border-background border-solid border-4 cursor-pointer object-cover hover:scale-105 duration-500"
          onClick={() =>
            window.open("https://wael-mern-app.onrender.com", "_blank")
          }
        />

        <div className="bg-background rounded-l-full flex flex-col justify-center mt-12 w-[600px] h-[300px]">
          <h3 className=" text-black font-bold text-lg ml-10">
            Personal Portfolio.
          </h3>
          <p className=" text-black font-bold text-xs ml-10 w-[350px]">
            A web application designed to showcase my experience, projects,
            skills, and provide a platform for others to directly contact me,
            characterized by its simplicity and uniqueness.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HoverDrawer;
