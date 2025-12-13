import Navbar from "../components/Navbar-3";
import Hero from "../components/Contact/Hero";
import ContactSection from "../components/Contact/ContactSection";
import Map from "../components/Contact/Map";
import FeedbackForm from "../components/Contact/FeedbackForm";
import Footer from "../components/Footer";


export default function Contact() {
  return (
    <>
      <Navbar />  
      <Hero />
      <ContactSection />
      <Map />
      <FeedbackForm />
      <Footer />
    </>
  );
}
