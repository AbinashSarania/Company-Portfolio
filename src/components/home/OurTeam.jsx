import React from "react";

const teamMembers = [
  {
    role: "UI/UX Designer",
    name: "Suresh Mondal",
  },
  {
    role: "Frontend Developer",
    name: "Abinash Sarania",
  },
  {
    role: "Backend Developer",
    name: "Roshan Chandel",
  },
];

const OurTeam = () => {
  return (
    <div className="bg-black text-white p-8 py-20 px-6 md:px-12 lg:px-24">
      <h1
        className="text-4xl font-light mb-6"
        style={{ fontFamily: "Anybody" }}
      >
        Our Team
      </h1>
      <div className="space-y-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="grid grid-cols-[350px,1fr] gap-4 text-sm"
            style={{ fontFamily: "Anybody" }}
          >
            <div className="font-light text-left">{member.role}:</div>
            <div className="font-light text-left">{member.name}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start mt-8 space-y-4 md:space-y-0 md:space-x-6">
        <button
          className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-28 rounded"
          style={{ fontFamily: "Anonymous Pro" }}
        >
          Check out our pricing
        </button>
        <p
          className="text-xs text-white max-w-xl font-extralight"
          style={{ fontFamily: "Anybody" }}
        >
          We're a team of creative web designers and skilled developers who
          relish in creating purposeful digital experiences that people fall in
          love with. We get under the skin of your true goals and challenges,
          with the technical know-how to deliver you the best solution that we
          all collectively believe in.
        </p>
      </div>
    </div>
  );
};

export default OurTeam;
