import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dashboardphoto from "../assets/dashboardphoto.JPG";
import portfoliophoto from "../assets/portfoliophoto.JPG";
import github from "../assets/github.svg";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="w-[320px] h-[320px] mx-auto">
        <Slider
          {...settings}
          className="mx-auto
           absolute rounded-full"
        >
          <div className="w-[320px] h-[320px] rounded-full flex justify-center items-center">
            <div className="flex justify-center items-center">
              <div
                className=" flex w-[8rem] h-[1.5rem] justify-center absolute top-25"
                onClick={() =>
                  window.open(
                    "https://github.com/bluewael98/fullstack-mern-dashboard",
                    "_blank"
                  )
                }
              >
                <button
                  className="absolute bg-white px-[3rem] py-[0.5rem] rounded-full z-30 font-bold"
                  onClick={() =>
                    window.open("https://wael-mern-app.onrender.com", "_blank")
                  }
                >
                  Repo
                </button>
                <img
                  src={github}
                  className="z-30 absolute right-3 top-2 "
                  alt="github"
                />
              </div>
              <button className="absolute bg-white px-[3rem] py-[0.5rem] rounded-full z-30 bottom-24 font-bold">
                View on WEB
              </button>
              <img
                className="rounded-full group w-[300px] h-[300px] mx-auto translate-y-5 cursor-pointer object-cover  "
                src={dashboardphoto}
                alt="dashboardproject"
              />
            </div>
          </div>

          <div className="w-[320px] h-[320px] rounded-full flex justify-center items-center">
            <div className="flex justify-center items-center">
              <div
                className=" flex w-[8rem] h-[1.5rem] justify-center absolute top-25"
                onClick={() =>
                  window.open(
                    "https://github.com/bluewael98/fullstack-mern-dashboard",
                    "_blank"
                  )
                }
              >
                <button
                  className="absolute bg-white px-[3rem] py-[0.5rem] rounded-full z-30 font-bold"
                  onClick={() =>
                    window.open("https://wael-mern-app.onrender.com", "_blank")
                  }
                >
                  Repo
                </button>
                <img
                  src={github}
                  className="z-30 absolute right-3 top-2 "
                  alt="github"
                />
              </div>
              <button className="absolute bg-white px-[3rem] py-[0.5rem] rounded-full z-30 bottom-24 font-bold">
                View on WEB
              </button>
              <img
                className="rounded-full group w-[300px] h-[300px] mx-auto translate-y-5 cursor-pointer object-cover "
                src={portfoliophoto}
                alt="portfolioproject"
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
