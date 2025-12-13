import Navbar from "../components/Navbar-3";
import Hero from "../components/About/Hero";
import StatsSection from "../components/About/StatsSection";
import VisionMission from "../components/About/VisionMission";
import CreativeTeam from "../components/About/CreativeTeam";
import DiscoverSection from "../components/About/DiscoverSection";
import Contact from "../components/Home/Contact";
import Footer from "../components/Footer";


export default function About() {
  return (
    <>
      <Navbar />  
      <Hero />
      <StatsSection />
      <VisionMission />
      <CreativeTeam />
      <DiscoverSection />
      <Contact />
      <Footer />
    </>
  );
}
