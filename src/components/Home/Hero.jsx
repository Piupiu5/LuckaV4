import heroVideo from "../../assets/hero.mp4";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 60]);

  return (
    <section className="relative min-h-screen pt-16 bg-black overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 will-change-transform"
      >
        <video
          className="
            w-full h-full
            object-contain
            orientation-landscape:object-cover
            md:object-cover
          "
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>
    </section>
  );
}
