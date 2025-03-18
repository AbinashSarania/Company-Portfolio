import React, { useRef } from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import Works from "../components/home/Works";
import OurTeam from "../components/home/OurTeam";
import ContactUs from "../components/home/ContactUs";
import Banner from "../components/home/Banner";
import Process from "../components/home/Process";
import WhatsAppButton from "../components/home/WhatsAppButton";

const Home = () => {
  // Create refs for ContactUs and OurTeam sections
  const contactRef = useRef(null);
  const ourTeamRef = useRef(null);

  // Scroll functions
  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToOurTeam = () =>
    ourTeamRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="Home overflow-x-hidden">
      {/* Navbar gets scroll functions */}
      <Navbar scrollToContact={scrollToContact} />

      {/* Hero section can trigger OurTeam scroll */}
      <Hero scrollToOurTeam={scrollToOurTeam} />

      {/* Work Showcase */}
      <Works />

      {/* Process / Approach Section */}
      <Process />

      {/* Optional Our Team Section */}
      <div ref={ourTeamRef}>
        <OurTeam />
      </div>

      {/* Contact Section */}
      <div ref={contactRef}>
        <ContactUs />
      </div>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Home;
