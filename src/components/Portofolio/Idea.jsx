import { motion } from "framer-motion";
import luckaLogo from "../../assets/logo.png"; // ganti dengan path logo kamu

export default function FromIdeaToImpact() {
  return (
    <section className="font-poppins max-w-5xl mx-auto py-20 px-6">
      {/* Bagian Judul */}
      <motion.h1
        className="text-4xl text-center md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        From <span className="text-orange-500">Idea</span> to{" "}
        <span className="text-orange-500">Impact</span>
      </motion.h1>

      <motion.p
        className="text-gray-500 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Setiap kolaborasi bukan sekadar proyek, tapi perjalanan kreatif
      </motion.p>

      {/* Bagian Konten Bawah */}
      <div className="mt-20 flex flex-col md:flex-row items-center justify-center md:max-w-full md:gap-24 gap-6">
        <motion.div
          className="text-left md:text-right"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            Lucka Agency
          </h2>
          <div className="flex items-center md:justify-center justify-center gap-3">
            <motion.img
              src={luckaLogo}
              alt="Lucka Agency"
              className="h-20 object-contain"
              initial={{ opacity: 0, scale: 0.8, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        <motion.div
          className="text-gray-600 max-w-md md:text-xl text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            Lucka dipercaya untuk mengelola akun media sosial sebuah brand
            lifestyle lokal. Tantangannya? Feed yang tidak konsisten, engagement
            rendah, dan audiens yang sulit terhubung dengan value brand.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
