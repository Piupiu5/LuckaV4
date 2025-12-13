import { motion } from "framer-motion";

export default function ChallengeSection() {
  const challenges = [
    "Awareness brand masih minim di kalangan target audiens",
    "Identitas visual belum jelas, feed Instagram terlihat acak",
    "Engagement rendah karena konten tidak sesuai gaya hidup anak muda",
    "Belum ada strategi campaign yang terintegrasi antar channel",
  ];

  // Variants untuk animasi berurutan
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="font-poppins max-w-5xl mx-auto px-6 scroll-mt-20">
      {/* Judul */}
      <motion.h2
        className="text-4xl font-extrabold text-orange-500 mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Apa Tantangannya?
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Sebagai pemain baru,{" "}
        <span className="font-semibold text-orange-500">For Money</span>{" "}
        menghadapi persaingan ketat di pasar parfum premium. Beberapa masalah
        yang muncul:
      </motion.p>

      {/* Daftar tantangan */}
      <motion.div
        className="space-y-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {challenges.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center gap-4 bg-orange-500 text-white px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98]"
          >
            <div className="bg-white text-orange-500 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
              {index + 1}
            </div>
            <p className="font-medium tracking-wide">{item}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
