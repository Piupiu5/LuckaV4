import { motion } from "framer-motion";

export default function Result() {
  const hasil = [
    { text: "Engagement Rate naik +0.72% dalam 3 bulan" },
    { text: "3 Video Campaign Lifestyle dengan rata-rata 12k views" },
    { text: "15+ Foto Produk High" },
    { text: "6 Desain Grafis Eksklusif." },
    { text: "13 Caption kreatif dengan CTR 2x lebih tinggi." },
    {
      text: "Awareness meningkat, brand mulai dilirik komunitas lifestyle lokal",
    },
  ];

  // Variants untuk animasi container dan item
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section className="py-16 px-6 text-center font-poppins overflow-hidden">
      {/* Judul */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-orange-500 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Hasilnya?
      </motion.h2>

      {/* Grid dengan animasi container */}
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {hasil.map((item, index) => (
          <motion.div
            key={index}
            variants={item}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <motion.div
              className="bg-orange-500 w-72 sm:w-40 md:w-72 h-72 sm:h-40 md:h-48 rounded-md shadow-md"
              whileHover={{
                rotate: 1,
                boxShadow: "0px 10px 20px rgba(249, 115, 22, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.p
              className="mt-3 text-sm sm:text-base font-medium text-orange-600 leading-snug max-w-[200px]"
              whileHover={{ color: "#ea580c" }}
            >
              {item.text}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
