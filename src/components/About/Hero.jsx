import { motion } from "framer-motion";
import aboutImage from "../../assets/hero-about.png"; // sesuaikan path gambarnya

const AboutSection = () => {
  return (
    <section className="bg-orange-500 text-white py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Kiri: Gambar */}
        <motion.div
          className="flex-1 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={aboutImage}
            alt="Lucka Agency Team"
            className="max-w-sm md:max-w-md rounded-full"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </motion.div>

        {/* Kanan: Teks */}
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Apa itu{" "}
            <span className="text-white font-extrabold">Lucka Agency?</span>
          </motion.h2>

          <motion.p
            className="text-white text-justify leading-relaxed mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Lucka Agency adalah agensi kreatif yang berdedikasi membantu bisnis
            berkembang lewat solusi digital dan visual yang inovatif. Berdiri
            sejak 2020, kami lahir dari semangat kreator muda yang percaya setiap
            brand punya cerita unik yang layak dihidupkan.
          </motion.p>

          <motion.p
            className="text-white text-justify leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Dari proyek kecil hingga brand besar, kami terus tumbuh bersama klien
            melalui layanan seperti <b>Social Media Specialist</b>,{" "}
            <b>Branding</b>, <b>Photography</b>, <b>Videography</b>,{" "}
            <b>Website Development</b>, hingga <b>3D Art</b>. Bagi kami,
            kreativitas selalu berjalan seiring strategi agar setiap karya tidak
            hanya indah secara visual, tetapi juga berdampak nyata bagi
            pertumbuhan bisnis.
          </motion.p>

          {/* Logo kanan bawah */}
          <motion.div
            className="mt-6 flex justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-extrabold text-2xl tracking-widest">
              LUCKA <span className="text-sm font-normal align-top">Agency</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
