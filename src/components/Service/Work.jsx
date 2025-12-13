import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

export default function Work() {
  const steps = [
    { title: "Konsultasi Awal" },
    { title: "Pengembangan Konten & Branding" },
    { title: "Pembuatan 3d Visual & Website" },
    { title: "Revisi & Finalisasi" },
    { title: "Handover & Dukungan Lanjutan" },
  ];

  // Variants animasi kontainer & item
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-left md:text-left">
        {/* Judul dengan animasi */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-8 leading-snug"
        >
          <span className="text-orange-500">Cara </span>
          <span className="text-black">Lucka Bekerjasama</span>
        </motion.h2>
      </div>

      {/* Wrapper responsive */}
        <motion.div
          className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center group"
            >
              {/* Card step */}
              <div className="bg-orange-500 text-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-[0.98] transition-all duration-300 ease-out p-6 flex flex-col items-center justify-center space-y-3 w-72 h-72 sm:w-44 sm:h-44 cursor-pointer">
                <p className="font-semibold text-white text-center tracking-wide group-hover:text-yellow-100 transition-colors duration-300">
                  {step.title}
                </p>
              </div>

              {/* Arrow — hanya tampil di desktop */}
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block text-orange-500 mx-4 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              )}
            </motion.div>
          ))}
        </motion.div>
      
    </section>
  );
}
