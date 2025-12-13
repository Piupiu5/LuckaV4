import Navbar from "../components/Navbar-2";
import Idea from "../components/Portofolio/Idea";
import Challenge from "../components/Portofolio/Challenge";
import Strategy from "../components/Portofolio/Strategy";
import Result from "../components/Portofolio/Result";
import Contact from "../components/Home/Contact";
import Footer from "../components/Footer";


export default function About() {
  return (
    <>
      <Navbar />  
      <Idea />
      <Challenge />
      <Strategy />
      <Result />
      <Contact />
      <Footer />
    </>
  );
}
