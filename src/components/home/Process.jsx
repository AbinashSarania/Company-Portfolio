import React from "react";
import { FaArrowRight } from "react-icons/fa";

const processes = [
  {
    id: 1,
    title: "Our Process 01",
    steps: [{ title: "Discovery", text: "Research" }],
    description: [
      "During this discovery phase, our team starts a thorough research and analysis to understand your project in detail.",
      "We employ numerous research methods to uncover valuable insights about your competitors and target audience.",
      "This process allows us to gather data that informs our design and development decisions, ensuring our methods and solutions are aligned with your business objectives.",
    ],
  },
  {
    id: 2,
    title: "Our Process 02",
    steps: [{ title: "Planning", text: "Strategy" }],
    description: [
      "Our planning phase involves setting clear goals and objectives for your project.",
      "We create a detailed roadmap that outlines the steps necessary to achieve your vision.",
      "Our strategy ensures that every aspect of the project aligns with your overall business goals.",
    ],
  },
  {
    id: 3,
    title: "Our Process 03",
    steps: [{ title: "Execution", text: "Implementation" }],
    description: [
      "In this phase, we bring the strategy and plans to life through careful execution.",
      "Our team works on implementing the roadmap and ensuring every component of the project is developed and deployed effectively.",
      "This stage focuses on delivering a polished, functional solution that meets all defined objectives and aligns with your business goals.",
    ],
  },
];

const Process = () => {
  return (
    <div
      className="relative w-full max-w-full min-h-screen py-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-black text-white flex flex-col items-center justify-center"
      style={{ fontFamily: "Anybody" }}
    >
      {processes.map((process) => (
        <div
          key={process.id}
          className="w-full max-w-7xl overflow-x-auto flex flex-col md:flex-row items-center justify-center px-10 py-10 my-10"
        >
          {/* Left Section */}
          <div className="flex flex-col items-start justify-center gap-10 w-full md:w-1/2">
            <div className="text-lg md:text-xl font-light">{process.title}</div>
            <div className="flex flex-col items-start justify-center gap-4 md:gap-6 text-2xl md:text-4xl">
              {process.steps.map((step, stepIndex) => (
                <div
                  key={stepIndex}
                  className={`${
                    stepIndex === 0 ? "text-blue-600 text-xl md:text-3xl" : "text-3xl md:text-5xl"
                  } font-normal`}
                >
                  {step.title}
                  <h1 className="text-xl md:text-5xl font-normal text-gray-300 mt-4 md:mt-8">
                    {step.text}
                  </h1>
                </div>
              ))}
            </div>
            <div className="flex items-center mt-6 md:mt-10">
              <div className="w-4 h-4 flex items-center justify-center rounded-full bg-white text-black">
                <FaArrowRight size={10} />
              </div>
              <div className="ml-2 md:ml-4 text-sm md:text-base">Keep scrolling</div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-4 md:gap-6 mt-8 md:mt-0">
            {process.description.map((desc, descIndex) => (
              <div
                key={descIndex}
                className={`text-sm md:text-lg leading-[24px] md:leading-[31px] ${
                  descIndex === process.description.length - 1 ? "text-gray-500" : ""
                }`}
              >
                {desc}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Process;
