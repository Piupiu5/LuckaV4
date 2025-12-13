import { Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        "Foto & video dari Lucka Agency bikin produk kami terlihat premium. Penjualan pun meningkat signifikan.",
      author: "Owner F&B Business",
    },
    {
      quote:
        "Lucka Agency bikin brand kami lebih hidup di media sosial. Engagement naik 3x lipat dalam 2 bulan!",
      author: "CEO Startup Fashion",
    },
  ];

  return (
    <section className="bg-white text-center relative py-16 md:py-24 overflow-hidden">
      {/* === Icon quote animasi di kanan atas === */}
      <motion.div
        className="absolute right-10 top-28 md:top-32 text-orange-500 opacity-20 md:opacity-40"
        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Quote size={80} strokeWidth={2.5} />
      </motion.div>

      {/* === Judul === */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-16 leading-tight relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-orange-500">Apa</span> Kata Mereka{" "}
        <br className="hidden md:block" />
        Tentang Lucka Agency?
      </motion.h2>

      {/* === Testimonial cards === */}
      <div className="max-w-4xl mx-auto flex flex-col gap-10 px-6 relative z-10">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="text-left border-l-4 border-orange-500 pl-6 md:pl-8 bg-white transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800 text-lg italic leading-relaxed mb-3">
              “{item.quote}”
            </p>
            <p className="text-orange-500 font-semibold text-sm">
              — {item.author}
            </p>
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
  <Link to="/testimoni">Selengkapnya <span className="text-xl">↗</span></Link>
</motion.div>

</motion.div>
    </section>
  );
};

export default TestimonialSection;
