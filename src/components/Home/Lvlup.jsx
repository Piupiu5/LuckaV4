import heroImg from "../../assets/hero.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HowWeElevate = () => {
  const cards = [
    {
      title: "Social Media Specialist",
      company: "EcoBag Co.",
      desc: "Produk ramah lingkungan berbahan kanvas, fokus pada desain stylish dan keberlanjutan.",
      image: heroImg,
      quote:
        "Konsep branding yang jelas, konsisten, dan kreatif. Brand kami kini terlihat profesional dan lebih mudah dikenal di pasaran.",
    },
    {
      title: "Website Development",
      company: "TechStart",
      desc: "Startup teknologi yang menyediakan solusi digital untuk bisnis kecil dan menengah.",
      image: heroImg,
      quote:
        "Website yang dibuat tim ini cepat, responsif, dan user-friendly. Pengalaman pengunjung jauh lebih baik, dan konversi penjualan naik.",
    },
    {
      title: "Videography",
      company: "Cafe Aroma",
      desc: "Kedai kopi modern yang menghadirkan pengalaman pelanggan di media visual.",
      image: heroImg,
      quote:
        "Video campaignnya menarik dan komunikatif. Banyak orang membagikan konten ini, sehingga brand awareness meningkat drastis.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white text-center overflow-hidden">
      {/* === Background oranye besar === */}
      <div className="absolute inset-0 flex justify-center mt-60 sm:mt-72 md:mt-56">
        <div className="bg-orange-500 w-full h-3/5 mt-20 sm:mt-32 md:mt-40"></div>
      </div>

      <div className="relative z-10">
        {/* === Judul === */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-orange-500">Bagaimana</span> Kami Menaikkan Brand ke{" "}
          <br className="hidden md:block" />
          Level Berikutnya
        </motion.h2>

        {/* === Card Section === */}
        <div className="max-w-6xl mx-auto flex flex-col gap-10 px-4 sm:px-8 md:px-12">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden mx-auto w-full md:w-4/5 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Gambar kiri */}
              <div
                className="md:m-10 w-full md:w-56 h-48 sm:h-56 md:h-56 flex-shrink-0"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Konten teks */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center text-left">
                <p className="text-orange-500 text-sm sm:text-base font-semibold mb-1">
                  {item.title}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {item.company}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                  {item.desc}
                </p>
                <p className="text-gray-800 text-sm sm:text-base italic border-l-4 border-orange-500 pl-3">
                  “{item.quote}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === Tombol Selengkapnya === */}
        <motion.div
  className="mt-10 sm:mt-12 flex justify-center md:justify-center pr-0 md:pr-10"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
>
  <motion.div
    whileHover={{ scale: 1.05, x: 5 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-md cursor-pointer transition-all hover:bg-orange-600"
  >
    <Link to="/allservice">Selengkapnya <span className="text-xl">↗</span></Link>
  </motion.div>
</motion.div>

      </div>
    </section>
  );
};

export default HowWeElevate;
