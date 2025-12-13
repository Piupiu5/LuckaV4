import { Mail, Phone, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

export default function Contact() {
  return (
    <section className="bg-white text-gray-800 overflow-hidden">
      {/* Bagian Utama Kontak */}
      <div className="py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* KIRI: Logo, deskripsi, dan kontak */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            {/* Garis oranye */}
            <motion.div
              className="h-1 bg-orange-500 w-11/12 mb-6 rounded-full"
              variants={fadeUp}
              custom={0.2}
            ></motion.div>

            {/* Logo dan nama */}
            <motion.div
              className="flex items-center mb-4 space-x-3"
              variants={fadeUp}
              custom={0.1}
            >
              <motion.img
                src={logo}
                alt="Lucka Agency Logo"
                className="w-40 md:w-48 h-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                whileHover={{ rotate: 3, scale: 1.05 }}
              />
            </motion.div>

            {/* Deskripsi */}
            <motion.p
              className="text-gray-700 leading-relaxed mb-6"
              variants={fadeUp}
              custom={0.3}
            >
              Lucka Agency merupakan agensi kreatif yang berdedikasi membantu
              bisnis Anda berkembang melalui solusi kreatif inovatif — mulai
              dari Social Media Specialist, Branding, Photography, Videography,
              Website hingga 3D Artist.
            </motion.p>

            {/* Kontak */}
            <motion.div
              className="space-y-3 text-gray-800"
              variants={fadeUp}
              custom={0.4}
            >
              <div className="flex items-center space-x-3 group">
                <Instagram className="text-orange-500 transition-transform group-hover:scale-125 duration-300" />
                <span className="text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
                  @luckaagency
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="text-orange-500 transition-transform group-hover:scale-125 duration-300" />
                <span className="text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
                  luckaagency.ind@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="text-orange-500 transition-transform group-hover:scale-125 duration-300" />
                <span className="text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
                  +62 857-8446-0287
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* KANAN: Google Maps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0.5}
            className="flex flex-col items-center w-full"
          >
            <motion.div
              className="w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              <iframe
                title="Lokasi Lucka Agency"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.046148707851!2d112.75273367415186!3d-7.240164692782766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb87b836e159%3A0x4eae9486d5cb7aa9!2sJl.%20Sedati%20Agung%20I%20No.48%2C%20Sedati%2C%20Sidoarjo%2C%20Jawa%20Timur%2061253!5e0!3m2!1sid!2sid!4v1697025400000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </motion.div>

            <motion.p
              className="text-center mt-3 text-gray-600 text-sm"
              variants={fadeUp}
              custom={0.6}
            >
              Jl. Sedati Agung I No.48 4/2 Sedati – Sidoarjo, Jawa Timur 61253
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
