import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Package() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Judul */}
        <motion.h2
          className="text-6xl font-bold mb-4 mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-orange-500">Paket</span>{" "}
          <span className="text-black">Luckaverse</span>
        </motion.h2>

        {/* Subjudul */}
        <motion.p
          className="font-semibold text-gray-800 mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Solusi premium all-in-one untuk brand tanpa batas.
        </motion.p>

        {/* Deskripsi */}
        <motion.p
          className="text-gray-600 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Paket Luckaverse mencakup branding total, konten kreatif, website,
          hingga 3D visual futuristik, dirancang untuk memberikan pengalaman
          lengkap dan modern bagi bisnis Anda.
        </motion.p>

        {/* Harga */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 font-medium mb-1">Harga Mulai dari</p>
          <p className="text-3xl font-extrabold text-orange-500">
            Rp 4.500.000
          </p>
        </motion.div>

        {/* Tombol */}
        <motion.a
          
          className="inline-block bg-orange-500 text-white font-semibold mt-5 py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="/allservice" className="hover:text-black">Lihat Paket Lainnya</Link>
        </motion.a>
      </div>
    </section>
  );
}
