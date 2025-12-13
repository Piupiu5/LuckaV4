import { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, address, message } = formData;

    // Nomor WhatsApp Admin (ganti sesuai kebutuhan)
    const adminNumber = "6289601940228";

    // Format pesan WhatsApp
    const text = `
Kritik & Saran dari Website Lucka Agency
━━━━━━━━━━━━━━━━━━━
Nama: ${name || "Anonim"}
Telepon: ${phone || "-"}
Email: ${email || "-"}
Alamat: ${address || "-"}
Pesan: ${message || "-"}
━━━━━━━━━━━━━━━━━━━
`.trim();

    // Encode dan buka WhatsApp
    const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="w-full py-16 bg-white flex flex-col items-center px-4">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
        Punya <span className="text-orange-500">Kritik dan Saran?</span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl flex flex-col gap-4"
      >
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nama/Anonim"
            value={formData.name}
            onChange={handleChange}
            className="bg-orange-100 text-black placeholder-gray font-medium p-4 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="Telepon"
            value={formData.phone}
            onChange={handleChange}
            className="bg-orange-100 text-black placeholder-gray font-medium p-4 rounded-md focus:outline-none"
          />
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-orange-100 text-black placeholder-gray font-medium p-4 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="address"
            placeholder="Alamat"
            value={formData.address}
            onChange={handleChange}
            className="bg-orange-100 text-black placeholder-gray font-medium p-4 rounded-md focus:outline-none"
          />
        </div>

        {/* Pesan */}
        <textarea
          name="message"
          placeholder="Pertanyaan......."
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="bg-orange-100 text-black placeholder-gray font-medium p-4 rounded-md focus:outline-none"
        ></textarea>

        {/* Tombol Kirim */}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md mt-2 transition"
        >
          KIRIM
        </button>
      </form>
    </section>
  );
};

export default FeedbackForm;
