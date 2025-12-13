import { motion } from "framer-motion";
import founderImg from "../../assets/Founder.png";

export default function VisionMission() {
  return (
    <section className="relative font-sans text-gray-800">
      {/* ===== Header ===== */}
      <motion.div
        className="text-center pt-10 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          <span className="text-orange-500">Arah</span> yang Menuntun Setiap Langkah Kami
        </h2>
      </motion.div>

      {/* ===== ORANGE BACKGROUND ===== */}
      <div className="absolute left-0 right-0 bg-[#ff7a00] top-[200px] bottom-[250px] -z-0"></div>

      {/* ===== VISI & MISI ===== */}
      <div className="relative z-10 mt-20">
        
        {/* ===== VISI CARD ===== */}
        <motion.div
          className="relative max-w-xl mx-auto rounded-xl bg-white shadow-xl p-6 text-center w-[90%] md:w-[600px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#ff7a00] text-white font-bold text-lg px-10 py-1.5 rounded-md shadow-md">
            VISI
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium mt-4">
            Menjadi agensi kreatif terpercaya yang mampu menjadi partner dalam kesuksesan digital brand,
            dengan menghadirkan ide inovatif dan strategi berdampak nyata.
          </p>
        </motion.div>

        {/* ===== MISI CARD ===== */}
        <motion.div
          className="relative max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-10 w-[90%] md:w-[600px] text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#ff7a00] text-white font-bold text-lg px-10 py-1.5 rounded-md shadow-md">
            MISI
          </div>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm md:text-base font-medium mt-4">
            <li>Menjadi partner strategis bagi brand dalam mencapai tujuan digitalnya.</li>
            <li>Menghadirkan solusi kreatif yang inovatif dan relevan dengan perkembangan zaman.</li>
            <li>
              Membantu brand membangun koneksi yang kuat dengan audiens melalui strategi digital dan
              visual storytelling.
            </li>
          </ol>
        </motion.div>
      </div>

      {/* ===== CREATIVE FORCE ===== */}
      <motion.div
        className="text-center py-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-extrabold text-black">
          Our <span className="text-white">Creative Force</span>
        </h3>
        <p className="text-lg font-semibold text-white mt-2 mb-6">Founder & CEO</p>

        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-4 w-64 h-80 overflow-hidden">
            <img
              src={founderImg}
              alt="Founder"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
