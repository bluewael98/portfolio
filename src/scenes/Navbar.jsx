import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import waellogo from "../assets/waellogo.png";
import { motion } from "framer-motion";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-white" : ""
      } hover:text-white transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Navbar = ({ isTopOfPage, selctedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage
    ? "transition duration-500"
    : "bg-background transition duration-500";

  return (
    <nav
      className={`${navbarBackground} z-40 w-full fixed top-0 pt-4 h-[80px]`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <img
          src={waellogo}
          alt="waellogo"
          className="w-[50px] h-[50px] m-0 p-0"
        />

        {/* DESKTOP NAV */}

        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selctedPage={selctedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About Me"
              selctedPage={selctedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selctedPage={selctedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selctedPage={selctedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selctedPage={selctedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <MenuRoundedIcon />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="fixed right-0 top-0 bottom-0 height[100%] bg-secondary p-2 w-[300px] transition-500"
          >
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <CloseRoundedIcon />
              </button>
            </div>

            {/* MENU ITEMS */}

            <div className="flex flex-col gap-10 ml-[33%] text-2xl">
              <Link
                page="Home"
                selctedPage={selctedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About Me"
                selctedPage={selctedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selctedPage={selctedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selctedPage={selctedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selctedPage={selctedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
