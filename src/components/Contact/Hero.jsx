import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative w-full
        min-h-screen
        bg-orange-500 text-white
        flex items-center justify-center
        pt-16               /* ⬅ kompensasi navbar */
        overflow-y-auto
        orientation-landscape:items-start
        orientation-landscape:pt-20
      "
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-orange-600 to-orange-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Content */}
      <motion.div
        className="
          relative z-10 w-full
          px-6 md:px-20
          text-center
          orientation-landscape:text-left
        "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="
            font-bold leading-tight
            text-4xl sm:text-5xl md:text-7xl
            orientation-landscape:text-3xl
          "
        >
          Bangun Kesuksesan
        </motion.h1>

        <motion.h1
          className="
            font-bold leading-tight mt-2
            text-4xl sm:text-5xl md:text-7xl
            orientation-landscape:text-3xl
          "
        >
          Digital Bersama Kami
        </motion.h1>

        <motion.p
          className="
            mt-4 max-w-3xl
            text-base sm:text-lg md:text-xl
            orientation-landscape:text-sm
          "
        >
          Kesuksesan digital berawal dari komunikasi yang tepat.
          Hubungi tim kami dan temukan cara baru untuk mengembangkan brand Anda.
        </motion.p>
      </motion.div>
    </section>
  );
}
