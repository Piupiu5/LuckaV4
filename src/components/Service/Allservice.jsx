import { motion } from "framer-motion";

export default function Services() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const categories = [
    {
      title: "Social Media Management",
      packages: [
        {
          name: "LUCKANOMICS",
          subtitle: "Start Smart With Lucka",
          desc: "Fondasi Digital Yang Cerdas Untuk Brand Yang Baru Mulai. Strategi Efisien, Visual Rapi, Dan Manajemen Media Sosial Yang Bikin Langkah Awal Lebih Percaya Diri.",
          price: "Rp4.500.000",
        },
        {
          name: "LUCKATIVE",
          subtitle: "Grow Creative, Grow Impact",
          desc: "Paket Menengah Untuk Brand Yang Siap Tumbuh Dengan Kreativitas Baru! Storytelling Engaging, Campaign Interaktif, Dan Visual Standout.",
          price: "Rp4.500.000",
        },
        {
          name: "LUCKAVERSE",
          subtitle: "One Universe, All Possibilities",
          desc: "Solusi Premium All-in-One Untuk Brand Tanpa Batas. Branding Total, Konten Kreatif, Website, Hingga 3D Visual Futuristik.",
          price: "Rp4.500.000",
        },
      ],
    },
    {
      title: "Branding & Identity",
      packages: [
        {
          name: "LUCKANOMICS",
          subtitle: "Start Smart With Lucka",
          desc: "Fondasi Digital Yang Cerdas Untuk Brand Yang Baru Mulai. Strategi Efisien, Visual Rapi, Dan Manajemen Media Sosial Yang Bikin Langkah Awal Lebih Percaya Diri.",
          price: "Rp4.500.000",
        },
        {
          name: "LUCKATIVE",
          subtitle: "Grow Creative, Grow Impact",
          desc: "Paket Menengah Untuk Brand Yang Siap Tumbuh Dengan Kreativitas Baru! Storytelling Engaging, Campaign Interaktif, Dan Visual Standout.",
          price: "Rp4.500.000",
        },
        {
          name: "LUCKAVERSE",
          subtitle: "One Universe, All Possibilities",
          desc: "Solusi Premium All-in-One Untuk Brand Tanpa Batas. Branding Total, Konten Kreatif, Website, Hingga 3D Visual Futuristik.",
          price: "Rp4.500.000",
        },
      ],
    },
    {
      title: "Videography",
      packages: [
        {
          name: "LUCKANOMICS",
          subtitle: "Start Smart With Lucka",
          desc: "Fondasi Digital Yang Cerdas Untuk Brand Yang Baru Mulai. Strategi Efisien, Visual Rapi, Dan Manajemen Media Sosial Yang Bikin Langkah Awal Lebih Percaya Diri.",
          price: "Rp4.500.000",
        },
        {
          name: "LUCKATIVE",
          subtitle: "Grow Creative, Grow Impact",
          desc: "Paket Menengah Untuk Brand Yang Siap Tumbuh Dengan Kreativitas Baru! Storytelling Engaging, Campaign Interaktif, Dan Visual Standout.",
          price: "Rp4.500.000",
        },
        {
          name: "LUCKAVERSE",
          subtitle: "One Universe, All Possibilities",
          desc: "Solusi Premium All-in-One Untuk Brand Tanpa Batas. Branding Total, Konten Kreatif, Website, Hingga 3D Visual Futuristik.",
          price: "Rp4.500.000",
        },
      ],
    },
    {
      title: "Photography",
      packages: [
        {
          name: "LUCKANOMICS",
          subtitle: "Start Smart With Lucka",
          desc: "Fondasi Digital Yang Cerdas Untuk Brand Yang Baru Mulai. Strategi Efisien, Visual Rapi, Dan Manajemen Media Sosial Yang Bikin Langkah Awal Lebih Percaya Diri.",
          price: "Rp4.500.000",
        },
        {
          name: "LUCKATIVE",
          subtitle: "Grow Creative, Grow Impact",
          desc: "Paket Menengah Untuk Brand Yang Siap Tumbuh Dengan Kreativitas Baru! Storytelling Engaging, Campaign Interaktif, Dan Visual Standout.",
          price: "Rp4.500.000",
        },
        {
          name: "LUCKAVERSE",
          subtitle: "One Universe, All Possibilities",
          desc: "Solusi Premium All-in-One Untuk Brand Tanpa Batas. Branding Total, Konten Kreatif, Website, Hingga 3D Visual Futuristik.",
          price: "Rp4.500.000",
        },
      ],
    },
    {
      title: "3D Artist & Creative Asset",
      packages: [
        {
          name: "LUCKANOMICS",
          subtitle: "Start Smart With Lucka",
          desc: "Fondasi Digital Yang Cerdas Untuk Brand Yang Baru Mulai. Strategi Efisien, Visual Rapi, Dan Manajemen Media Sosial Yang Bikin Langkah Awal Lebih Percaya Diri.",
          price: "Rp4.500.000",
        },
        {
          name: "LUCKATIVE",
          subtitle: "Grow Creative, Grow Impact",
          desc: "Paket Menengah Untuk Brand Yang Siap Tumbuh Dengan Kreativitas Baru! Storytelling Engaging, Campaign Interaktif, Dan Visual Standout.",
          price: "Rp4.500.000",
        },
        {
          name: "LUCKAVERSE",
          subtitle: "One Universe, All Possibilities",
          desc: "Solusi Premium All-in-One Untuk Brand Tanpa Batas. Branding Total, Konten Kreatif, Website, Hingga 3D Visual Futuristik.",
          price: "Rp4.500.000",
        },
      ],
    },
    {
      title: "Website Develompent",
      packages: [
        {
          name: "LUCKANOMICS",
          subtitle: "Start Smart With Lucka",
          desc: "Fondasi Digital Yang Cerdas Untuk Brand Yang Baru Mulai. Strategi Efisien, Visual Rapi, Dan Manajemen Media Sosial Yang Bikin Langkah Awal Lebih Percaya Diri.",
          price: "Rp4.500.000",
        },
        {
          name: "LUCKATIVE",
          subtitle: "Grow Creative, Grow Impact",
          desc: "Paket Menengah Untuk Brand Yang Siap Tumbuh Dengan Kreativitas Baru! Storytelling Engaging, Campaign Interaktif, Dan Visual Standout.",
          price: "Rp4.500.000",
        },
        {
          name: "LUCKAVERSE",
          subtitle: "One Universe, All Possibilities",
          desc: "Solusi Premium All-in-One Untuk Brand Tanpa Batas. Branding Total, Konten Kreatif, Website, Hingga 3D Visual Futuristik.",
          price: "Rp4.500.000",
        },
      ],
    },
  ];

  return (
    <section className="py-48 bg-white text-center">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-3"
          variants={fadeUp}
        >
          <span className="text-orange-500">Apa yang Bisa </span>
          Kami Bantu untuk Brand Kamu?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-gray-600 md:text-xl mb-10"
          variants={fadeUp}
        >
          Kami hadir untuk jadi partner kreatif yang bantu brand kamu tumbuh lebih cepat.
        </motion.p>

        {/* Categories */}
        {categories.map((cat, i) => (
          <motion.div key={i} className="mb-14" variants={fadeUp}>
            <motion.h3
              className="text-3xl md:text-5xl font-bold text-orange-500 mb-8"
              variants={fadeUp}
            >
              {cat.title}
            </motion.h3>

            {/* Cards */}
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {cat.packages.map((pkg, j) => (
                <motion.div
                  key={j}
                  className="bg-orange-500 text-white rounded-2xl p-6 flex flex-col justify-between shadow-md"
                  variants={fadeUp}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div>
                    <h4 className="text-lg text-start font-bold mb-1">{pkg.name}</h4>
                    <p className="text-sm text-start font-medium mb-10">{pkg.subtitle}</p>
                    <p className="text-sm text-justify text-white/90 leading-relaxed mb-6">
                      {pkg.desc}
                    </p>
                  </div>

                  <div>
                    <p className="text-md text-start mb-3">
                      <span className="font-semibold">Mulai dari</span><br />
                      {pkg.price}
                    </p>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-orange-600 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition"
                    >
                      PESAN SEKARANG
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
