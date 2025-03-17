import React from "react";
import Project1 from "../../assets/Project  (1).png";
import Project2 from "../../assets/Project  (2).png";
import Companies from "../../assets/Companies worked for.png";

// Import Swiper for carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import carousel images
import Carousel1 from "../../assets/carousel1.png";
import Carousel2 from "../../assets/carousel2.png";
import Carousel3 from "../../assets/carousel3.png";
import Carousel4 from "../../assets/carousel4.png";

export default function Works() {
  return (
    <>
      <section className="w-full py-12 md:py-24 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="container px-4 md:px-6">
          {/* Top Section: Heading & Projects Count */}
          <div className="flex justify-between items-center">
            {/* Left Side - Featured Works with Description Below */}
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
            <div className="flex flex-col items-end pr-10">
              <p className="text-8xl" style={{ fontFamily: "Anybody" }}>
                13
              </p>
              <button
                className="mt-4 px-6 py-1 text-md text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300"
                style={{ fontFamily: "Anybody" }}>
                Projects Completed
              </button>
            </div>
          </div>

          {/* Image Container - Two images side by side */}
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

      {/* Companies Worked For Image - Full Width */}
      <div className="mt-0 bg-black">
        <img
          src={Companies}
          alt="Companies worked for"
          className="w-screen h-auto object-cover"
        />
      </div>

      {/* Infinite Scrolling Carousel with White Background */}
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
          spaceBetween={20} // Adjust spacing between images
          slidesPerView={6} // Show 4 images at once
          loop={true} // Infinite loop
          autoplay={{ delay: 0, disableOnInteraction: false }} // Continuous scrolling
          speed={2000} // Adjust speed for smooth scrolling
          className="w-full mt-8">
          <SwiperSlide>
            <img
              src={Carousel1}
              alt="Project Showcase 1"
              className="w-full h-full rounded-lg object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Carousel2}
              alt="Project Showcase 2"
              className="w-full h-full rounded-lg object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Carousel3}
              alt="Project Showcase 3"
              className="w-full h-full rounded-lg object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Carousel4}
              alt="Project Showcase 4"
              className="w-full h-full rounded-lg object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Carousel1}
              alt="Project Showcase 1"
              className="w-full h-full rounded-lg object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Carousel2}
              alt="Project Showcase 2"
              className="w-full h-full rounded-lg object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Carousel3}
              alt="Project Showcase 3"
              className="w-full h-full rounded-lg object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Carousel4}
              alt="Project Showcase 4"
              className="w-full h-full rounded-lg object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
