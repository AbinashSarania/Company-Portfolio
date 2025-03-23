import React from "react";
import { useNavigate } from "react-router-dom";
import Project1 from "../../assets/Project  (1).png";
import Project2 from "../../assets/Project  (2).png";
import Companies from "../../assets/Companies worked for.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Carousel1 from "../../assets/carousel1.png";
import Carousel2 from "../../assets/carousel2.png";
import Carousel3 from "../../assets/carousel3.png";
import Carousel4 from "../../assets/carousel4.png";

export default function Works() {
  const navigate = useNavigate();

  return (
    <>
      <section className="w-full py-12 md:py-24 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="container px-4 md:px-6">
          {/* Top Section: Heading & Projects Count */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2
                className="text-8xl tracking-tighter sm:text-4xl md:text-6xl"
                style={{ fontFamily: "Anybody" }}>
                Featured works
              </h2>
              <p
                className="text-gray-400 md:text-xs mt-2"
                style={{ fontFamily: "Anybody" }}>
                Explore some of our latest Website projects
              </p>
            </div>

            {/* Right Side - Number & Button */}
            <div className="flex flex-col items-start md:items-end pr-0 md:pr-10">
              <p className="text-8xl" style={{ fontFamily: "Anybody" }}>
                13
              </p>
              <button
                onClick={() => navigate("/works")}
                className="mt-4 px-6 py-1 text-md text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300"
                style={{ fontFamily: "Anybody" }}>
                Projects Completed
              </button>
            </div>
          </div>

          {/* Projects Images */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-12">
            <img
              src={Project1}
              alt="Project 1"
              className="w-full md:w-1/2 h-auto rounded-lg object-cover"
            />
            <img
              src={Project2}
              alt="Project 2"
              className="w-full md:w-1/4 h-auto rounded-lg object-cover self-end"
            />
          </div>
        </div>
      </section>

      {/* Companies Worked For */}
      <div className="mt-0 bg-black">
        <img
          src={Companies}
          alt="Companies worked for"
          className="w-screen h-auto object-cover"
        />
      </div>

      {/* Carousel */}
      <section className="w-full py-12 bg-white text-black">
        <div className="px-6 md:px-12 lg:px-24 text-left">
          <h2
            className="text-xl md:text-3xl font-bold tracking-tight"
            style={{ fontFamily: "Anybody" }}>
            Rejoice at a Glance
          </h2>
          <p
            className="text-gray-600 text-sm mt-2"
            style={{ fontFamily: "Anybody" }}>
            Explore some of our latest Website projects
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3} // Default for mobile
          breakpoints={{
            768: { slidesPerView: 4 }, // 4 images per view from 768px (tablet/desktop) onwards
          }}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={2000}
          className="w-full mt-8">
          {[
            Carousel1,
            Carousel2,
            Carousel3,
            Carousel4,
            Carousel1,
            Carousel2,
            Carousel3,
            Carousel4,
          ].map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Project Showcase ${index + 1}`}
                className="w-full h-full rounded-lg object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
