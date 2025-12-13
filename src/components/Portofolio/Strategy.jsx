import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import strategy from "../../assets/strategy.png";
import camera from "../../assets/camera.png";

export default function Strategy() {
  const steps = [
    { title: "Photography" },
    { title: "Videography" },
    { title: "Desain Feed" },
    { title: "Copywriting" },
    { title: "Collaboration" },
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
    <section className="flex flex-col items-center justify-center w-full px-6 py-12 space-y-12 font-poppins scroll-mt-20">
      {/* === Strategi Kita Section === */}
      <motion.div
        className="mt-20 flex flex-col md:flex-row items-center justify-center md:max-w-full md:gap-24 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-left md:text-right">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 transition-colors duration-300 hover:text-orange-600">
            Lucka Agency
          </h2>
          <div className="flex items-center md:justify-center justify-center gap-3">
            <motion.img
              src={camera}
              alt="Lucka Agency"
              className="md:h-40 h-64 object-contain hover:scale-105 transition-transform duration-300 ease-out"
              whileInView={{ opacity: 1, rotate: 0 }}
              initial={{ opacity: 0, rotate: -3 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </div>

        <motion.div
          className="text-gray-600 max-w-md md:text-xl text-left leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="hover:text-gray-800 transition-colors duration-300">
            Lucka dipercaya untuk mengelola akun media sosial sebuah brand
            lifestyle lokal. Tantangannya? Feed yang tidak konsisten, engagement
            rendah, dan audiens yang sulit terhubung dengan value brand.
          </p>
        </motion.div>
      </motion.div>

      {/* === Eksekusi Lucka Section === */}
      <motion.div
        className="text-center w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-8 tracking-wide">
          Eksekusi Lucka
        </h3>

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
                <img
                  src={strategy}
                  alt={step.title}
                  className="rounded-full w-40 h-40 object-cover shadow-sm group-hover:rotate-3 transition-transform duration-300"
                />
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
      </motion.div>
    </section>
  );
}
