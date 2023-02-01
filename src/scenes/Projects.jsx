import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Carousel from "../components/Carousel";
import HoverDrawer from "../components/HoverDrawer";

const Projects = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1050px)");

  return (
    <section id="projects" className="pt-10 mb-25 h-auto">
      <div className="flex flex-col justify-center items-center mx-auto py-48">
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
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-playfair font-semibold text-4xl mb-5">
              MY PROJECTS
            </h1>
          </div>
        </motion.div>

        {isAboveLarge ? <HoverDrawer /> : <Carousel />}
      </div>
    </section>
  );
};

export default Projects;
