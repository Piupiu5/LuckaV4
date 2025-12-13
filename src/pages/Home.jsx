import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Reason from "../components/Home/Reason";
import Lvlup from "../components/Home/Lvlup";
import Testi from "../components/Home/Testi";
import Contact from "../components/Home/Contact";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />  
      <Hero />
      <Reason />
      <Lvlup />
      <Testi />
      <Contact />
      <Footer />
    </>
  );
}
