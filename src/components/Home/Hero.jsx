import heroVideo from "../../assets/hero.mp4";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 80]);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center bg-black">
      <motion.video
        className="
          absolute inset-0 w-full h-full
          object-contain
          orientation-landscape:object-cover
          md:object-cover
        "
        style={{ y }}
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}
