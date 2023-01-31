import React from "react";
import { motion } from "framer-motion";
import dashboardphoto from "../assets/dashboardphoto.JPG";
import portfoliophoto from "../assets/portfoliophoto.JPG";

const leftDrawerVariants = {
  open: {
    x: "-20%",
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
    x: "20%",
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
    <div className="container my-20">
      <motion.div
        className="drawer w-[800px] h-[400px] bg-secondary rounded-r-full mt-10 drop-shadow-xl absolute left-11"
        variants={leftDrawerVariants}
        initial="closed"
        animate={isLeftOpen ? "open" : "closed"}
        onHoverStart={() => setLeftOpen(true)}
        onHoverEnd={() => setLeftOpen(false)}
      >
        <img
          src={dashboardphoto}
          className="circle w-[300px] h-[300px] rounded-full absolute right-4 bottom-12 top-12 drop-shadow-lg object-cover cursor-pointer hover:scale-105 duration-500"
          onClick={() =>
            window.open("https://wael-mern-app.onrender.com", "_blank")
          }
        />

        <div className="bg-background absolute left-20 bottom-10 top-10 w-[380px] rounded-r-full flex flex-col justify-center align-middle">
          <h3 className="pl-20 pr-5  text-black font-bold text-lg">
            Dashboard tracking App.
          </h3>
          <p className="pl-20 pr-5 text-black font-bold text-xs">
            Web application created with MERN stack. On the front-end, I used;
            Material UI, Material UI Data Grid, Nivo Charts, Redux Toolkit and
            RTKQ. For the back-end I used; Node JS, Express JS & Mongoose.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="drawer w-[800px] h-[400px] bg-secondary rounded-l-full my-10 drop-shadow-xl absolute right-11"
        variants={rightDrawerVariants}
        initial="closed"
        animate={isRightOpen ? "open" : "closed"}
        onHoverStart={() => setRightOpen(true)}
        onHoverEnd={() => setRightOpen(false)}
      >
        <img
          src={portfoliophoto}
          className="circle w-[300px] h-[300px] rounded-full absolute left-4 bottom-12 top-12 drop-shadow-lg cursor-pointer object-cover hover:scale-105 duration-500"
          onClick={() =>
            window.open("https://wael-mern-app.onrender.com", "_blank")
          }
        />

        <div className="bg-background absolute right-20 bottom-10 top-10 w-[380px] rounded-l-full flex flex-col justify-center align-middle">
          <h3 className="pl-10 pr-20  text-black font-bold text-lg">
            Personal Portfolio.
          </h3>
          <p className="pl-10 pr-20 text-black font-bold text-xs">
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
