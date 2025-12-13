import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonial = [
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
];

export default function Testimonial() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-32 overflow-hidden font-poppins">
      {/* ===== Background oranye atas ===== */}
      <div className="absolute left-0 right-0 top-[23%] h-[25%] bg-orange-500 -z-10"></div>

      {/* ===== Background oranye bawah ===== */}
      <div className="absolute left-0 right-0 bottom-[3%] h-[25%] bg-orange-500 -z-10"></div>

      {/* ===== Header ===== */}
      <motion.div
        className="text-center mb-12 px-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-6xl font-bold text-gray-800">
          Apa <span className="text-orange-500">Kata Partner Kami?</span>
        </h2>
        <p className="text-gray-600 text-base mt-2">
          Kolaborasi bareng Lucka bukan cuma soal project, tapi perjalanan <br />
          bersama yang bikin brand makin berkembang
        </p>
      </motion.div>

      {/* ===== Grid 2 kolom ===== */}
      <motion.div
        className="max-w-4xl md:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-6 place-items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonial.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 250, damping: 15 },
            }}
            className="
              bg-white rounded-2xl shadow-md border border-gray-100 p-6 
              flex flex-col justify-between hover:shadow-lg
              h-80 w-80 sm:h-64 sm:w-64 md:h-96 md:w-96 lg:h-96 lg:w-96
              cursor-pointer transition-all duration-300
            "
          >
            <Quote className="text-orange-500 w-10 h-10 md:w-14 md:h-14 mb-3" />
            <p className="text-gray-700 text-base md:text-xl flex-1">
              {item.text}
            </p>
            <p className="font-semibold text-gray-900 text-sm mt-3">
              – {item.author}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
