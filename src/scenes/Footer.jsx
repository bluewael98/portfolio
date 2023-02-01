import React from "react";
import waellogo from "../assets/waellogo.png";

const Footer = () => {
  return (
    <footer className="h-64 bg-background pt-10">
      <div className="flex flex-col justify-center items-center w-auto mx-auto">
        <img src={waellogo} alt="logo " />
        <div className="flex flex-row justify-between items-center gap-10">
          <p
            className="font-playfair font-semibold cursor-pointer hover:scale-105 hover:text-white duration-500"
            onClick={() =>
              window.open(
                "https://github.com/bluewael98?tab=repositories",
                "_blank"
              )
            }
          >
            Github
          </p>
          <p
            className="font-playfair font-semibold cursor-pointer hover:scale-105 hover:text-white duration-500"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/wael-hourani-14512219b/",
                "_blank"
              )
            }
          >
            Linkedin
          </p>
          <p
            className="font-playfair font-semibold cursor-pointer hover:scale-105 hover:text-white duration-500"
            onClick={() =>
              (window.location.href = "malito:wael.business@outlook.com")
            }
          >
            Email
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
