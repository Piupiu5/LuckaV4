import { useState } from "react";
import { motion } from "framer-motion";

export default function Consultation() {
  const [form, setForm] = useState({
    nama: "",
    whatsapp: "",
    brand: "",
    paket: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nomorTujuan = "6289601940228";
    const pesan = `Halo Lucka!%0ASaya ingin konsultasi.%0A
Nama: ${form.nama}%0A
No WhatsApp: ${form.whatsapp}%0A
Brand: ${form.brand}%0A
Jenis Paket: ${form.paket}%0A`;

    window.open(`https://wa.me/${nomorTujuan}?text=${pesan}`, "_blank");
  };

  return (
    <section className="bg-white text-center font-bold">
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Mulai <span className="text-orange-500">Perjalanan Brand Kamu</span>
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg md:max-w-5xl mx-auto flex flex-col gap-6 px-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* NAMA */}
        <div className="text-left">
          <label className="block text-xs font-bold text-orange-500 mb-1">
            NAMA
          </label>
          <input
            type="text"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            required
            className="w-full border-2 border-orange-400 rounded-md px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* WHATSAPP */}
        <div className="text-left">
          <label className="block text-xs font-bold text-orange-500 mb-1">
            NO WHATSAPP
          </label>
          <input
            type="text"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            required
            className="w-full border-2 border-orange-400 rounded-md px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* BRAND */}
        <div className="text-left">
          <label className="block text-xs font-bold text-orange-500 mb-1">
            BRAND
          </label>
          <input
            type="text"
            name="brand"
            value={form.brand}
            onChange={handleChange}
            required
            className="w-full border-2 border-orange-400 rounded-md px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* PAKET */}
        <div className="text-left">
          <label className="block text-xs font-bold text-orange-500 mb-1">
            JENIS PAKET YANG DIAMBIL
          </label>
          <input
            type="text"
            name="paket"
            value={form.paket}
            onChange={handleChange}
            required
            className="w-full border-2 border-orange-400 rounded-md px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Tombol */}
        <motion.button
          type="submit"
          className="bg-orange-500 text-white font-semibold rounded-full py-2 px-8 mt-4 shadow-md hover:bg-orange-600 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          KONSULTASI
        </motion.button>
      </motion.form>
    </section>
  );
}
