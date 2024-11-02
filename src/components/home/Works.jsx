import React from "react";
import Project1 from "../../assets/Project (1).png";
import Project2 from "../../assets/Project (2).png";
import Project3 from "../../assets/Project (3).png";
import Project4 from "../../assets/Project (4).png";
import Project5 from "../../assets/Project (5).png";
import Project6 from "../../assets/Project (6).png";

const projects = [
  {
    id: 1,
    year: 2024,
    title: "Sonatank",
    description:
      "The Gold Jewellery Marketplace links jewelers, customers, and pawn brokers for seamless buying, selling, and pawning of gold jewelry.",
    type: "Web App",
    location: "Hyderabad, India",
    imgSrc: Project1,
    link: "https://www.sonatank.com/",
  },
  {
    id: 2,
    year: 2024,
    title: "The Fleet Solutions",
    description:
      "The Fleet Solutions is an innovative web platform that enhances fleet management with advanced tracking and optimization tools for improved safety and efficiency.",
    type: "Web App",
    location: "Guam, USA",
    imgSrc: Project2,
    link: "https://www.thefleetsolutions.net/",
  },
  {
    id: 3,
    year: 2024,
    title: "The Saira Group",
    description:
      "The Saira Group's website highlights their expertise in Sourcing, Supply Chain Management, and AI solutions, showcasing their commitment to innovation across diverse industries.",
    type: "Corporate Portfolio Website",
    location: "Guam, USA",
    imgSrc: Project3,
    link: "https://www.thesairagroup.com/",
  },
  {
    id: 4,
    year: 2024,
    title: "The Freight Solutions",
    description:
      "The Freight Solutions website emphasizes their expertise in logistics, specializing in Contract Logistics, Supply Chain Management, and real-time cargo tracking.",
    type: "Corporate Service Website",
    location: "Guam, USA",
    imgSrc: Project4,
    link: "https://www.thefreightsolutions.com/",
  },
  {
    id: 5,
    year: 2024,
    title: "Gu-Yoyo",
    description:
      "The Gu-yoyo E-Scooter website introduces a micro-shared mobility service in Guam, promoting eco-friendly transportation and reducing carbon emissions for a unique commuting experience.",
    type: "Promotional Service Website",
    location: "Guam, USA",
    imgSrc: Project5,
    link: "https://www.gu-yoyo.com/",
  },
  {
    id: 6,
    year: 2024,
    title: "Tree7 Designs",
    description:
      "The Tree7 Designs website emphasizes transforming spaces through meticulous design and collaboration, showcasing their commitment to client satisfaction and transparency in creating extraordinary experiences.",
    type: "Portfolio and Service Website",
    location: "Bengaluru, India",
    imgSrc: Project6,
    link: "https://tree7designs.com/",
  },
];

export default function Works() {
  return (
    <section className="w-full py-12 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-left">
          <h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            style={{ fontFamily: "Heebo" }}
          >
            Works
          </h2>
          <p
            className="text-muted-foreground md:text-xl"
            style={{ fontFamily: "Heebo" }}
          >
            Featured works
          </p>
        </div>
        <div className="grid gap-8 mt-12 grid-cols-1 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col sm:flex-row items-start duration-300"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2"
              >
                <img
                  src={project.imgSrc}
                  alt={`Project ${project.id}`}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover aspect-[5/3]"
                />
              </a>
              <div className="mt-4 sm:mt-0 sm:ml-6 flex-1">
                <h3
                  className="text-lg font-medium text-gray-800"
                  style={{ fontFamily: "Anybody" }}
                >
                  {project.title}
                </h3>
                <div className="flex items-center mt-2">
                  <p
                    className="text-sm text-white bg-black inline-block px-2 py-1 rounded-3xl"
                    style={{ fontFamily: "Anybody" }}
                  >
                    {project.year}
                  </p>
                  <span
                    className="ml-4 text-sm text-gray-500"
                    style={{ fontFamily: "Anybody" }}
                  >
                    {project.type} | {project.location}
                  </span>
                </div>
                <p
                  className="text-gray-600 text-xs mt-2"
                  style={{ fontFamily: "Anybody" }}
                >
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm"
                  style={{ fontFamily: "Anybody" }}
                >
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
