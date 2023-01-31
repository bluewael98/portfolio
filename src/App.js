import { useEffect, useState } from "react";
import DotGroup from "./scenes/DotGroup"
import useMediaQuery from "./hooks/useMediaQuery";
import { motion } from "framer-motion";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing"
import AboutMe from "./scenes/AboutMe";
import Skills from "./scenes/Skills";
import Projects from "./scenes/Projects"





function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll =() => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage("Home");
    }
     if (window.scrollY !== 0) setIsTopOfPage(false);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className="app">
      <Navbar
      isTopOfPage={isTopOfPage}
      selctedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full">
      
        <motion.div 
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("AboutMe")}>
          
          <AboutMe />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={()=> setSelectedPage("skills")}
        >
          <Skills />
        </motion.div>
      </div>
      
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
         margin="0 0 -200px 0"
         amount="all"
         onViewportEnter={()=> setSelectedPage("projects")}
         >
          <Projects />
        </motion.div> 
        </div>


    </div>
  );
}

export default App;
