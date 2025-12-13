import Navbar from "../components/Navbar-2";
import Package from "../components/Service/Package";
import Benefit from "../components/Service/Benefit";
import Work from "../components/Service/Work";
import Consultation from "../components/Service/Consultation";
import Contact from "../components/Home/Contact";
import Footer from "../components/Footer";


export default function About() {
  return (
    <>
      <Navbar />  
      <Package />
      <Benefit />
      <Work />
      <Consultation />
      <Contact />
      <Footer />
    </>
  );
}
