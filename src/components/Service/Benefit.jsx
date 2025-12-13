import { motion } from "framer-motion";

export default function Benefit() {
  return (
    <section className="bg-white px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Judul */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Apa <span className="text-orange-500">yang Akan Kamu Dapatkan?</span>
          </h2>

          {/* Daftar poin */}
          <motion.ul
            className="space-y-4 text-gray-700"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "Branding Total",
                desc: "Identitas merek lengkap dari logo, guideline, hingga aset visual.",
              },
              {
                title: "Konten Kreatif",
                desc: "Materi konten sosial media dan marketing siap pakai.",
              },
              {
                title: "Website Profesional",
                desc: "Website modern, responsif, dan SEO-friendly.",
              },
              {
                title: "3D Visual Futuristik",
                desc: "Render dan mockup 3D untuk presentasi atau promosi inovatif.",
              },
              {
                title: "Solusi All-in-One",
                desc: "Semua kebutuhan branding dan digital marketing dikemas dalam satu paket.",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <span className="font-semibold text-gray-900">
                  {index + 1}. {item.title}
                </span>{" "}
                – {item.desc}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
