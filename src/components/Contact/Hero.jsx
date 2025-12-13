import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen bg-orange-500 flex items-center justify-center text-white overflow-hidden">
      {/* Animasi kontainer utama */}
      <motion.div
        className="relative text-center z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Judul 1 */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Bangun Kesuksesan
        </motion.h1>

        {/* Judul 2 */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          Digital Bersama Kami
        </motion.h1>

        {/* Paragraf */}
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: "easeOut" }}
        >
          Kesuksesan digital berawal dari komunikasi yang tepat. Hubungi tim kami dan temukan cara baru untuk mengembangkan brand Anda
        </motion.p>
      </motion.div>

      {/* Background Motion (UX tambahan halus) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-orange-600 to-orange-500 opacity-80"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>
    </section>
  );
}
