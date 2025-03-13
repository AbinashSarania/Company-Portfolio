import React from "react";
import Project1 from "../../assets/Project  (1).png";
import Project2 from "../../assets/Project  (2).png";

export default function Works() {
  return (
    <section className="w-full py-12 md:py-24 px-6 md:px-12 lg:px-24 bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Left Side - Featured Works with Description Below */}
          <div>
            <h2
              className="text-8xl tracking-tighter sm:text-4xl md:text-6xl"
              style={{ fontFamily: "Anybody" }}>
              Featured works
            </h2>
            <p
              className="text-muted-foreground md:text-xs mt-2"
              style={{ fontFamily: "Anybody" }}>
              Explore some of our latest Website projects
            </p>
          </div>

          {/* Right Side - Number & Button */}
          <div className="flex flex-col items-end pr-10">
            <p
              className="text-8xl"
              style={{ fontFamily: "Anybody" }}>
              13
            </p>
            <button
              className="mt-4 px-6 py-1 text-md  text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300"
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
  );
}
