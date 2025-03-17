// src/App.js
import React, { useRef } from "react";
import Navbar from "./components/common/Navbar";
import Hero from "./components/home/Hero";
import Works from "./components/home/Works";
import OurTeam from "./components/home/OurTeam";
import ContactUs from "./components/home/ContactUs";
import Banner from "./components/home/Banner";
import Process from "./components/home/Process";
import WhatsAppButton from "./components/home/WhatsAppButton";

const App = () => {
  // Create refs for ContactUs and OurTeam sections
  const contactRef = useRef(null);
  const ourTeamRef = useRef(null);

  // Scroll functions
  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToOurTeam = () =>
    ourTeamRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="App overflow-x-hidden">
      {/* Pass the scroll functions as props */}
      <Navbar scrollToContact={scrollToContact} />
      <Hero scrollToOurTeam={scrollToOurTeam} />

      <Works />
      <Process />

      <div ref={contactRef}>
        <ContactUs />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default App;
