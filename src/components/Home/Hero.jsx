import heroVideo from "../../assets/hero.mp4";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  // Efek parallax sederhana
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 80]);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center text-white">
      {/* Background video dengan efek parallax */}
      <motion.video
        className="absolute inset-0 w-full h-full object-cover"
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
