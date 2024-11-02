// src/App.js
import React from "react";
import Navbar from "./components/common/Navbar";
import Hero from "./components/home/Hero";
import Pricing from "./components/home/Pricing";
import Works from "./components/home/Works";
import OurTeam from "./components/home/OurTeam";
import ContactUs from "./components/home/ContactUs";
import Banner from "./components/home/Banner";
import Process from "./components/home/Process";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Process />
      <Works />
      <Pricing />
      <OurTeam />
      <ContactUs />
      <Banner />
    </div>
  );
};

export default App;
