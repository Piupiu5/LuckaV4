const Map = () => {
  return (
    <section className="relative bg-orange-500 pt-4 pb-4 px-4 flex flex-col items-center">
      {/* MAP BESAR */}
      <div className="absolute -top-40 w-[95%] max-w-6xl">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
          <iframe
            title="Lokasi Lucka Agency"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.046148707851!2d112.75273367415186!3d-7.240164692782766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb87b836e159%3A0x4eae9486d5cb7aa9!2sJl.%20Sedati%20Agung%20I%20No.48%2C%20Sedati%2C%20Sidoarjo%2C%20Jawa%20Timur%2061253!5e0!3m2!1sid!2sid!4v1697025400000!5m2!1sid!2sid"
            width="100%"
            height="550"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[550px]"
          ></iframe>
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="mt-[400px] text-center">
        <p className="text-white text-2xl font-bold">Lucka Agency</p>
        <p className="text-white text-base mb-5">
          Jl. Sedati Agung I No.48 4/2, Sedati – Sidoarjo, Jawa Timur 61253
        </p>
        <a
          href="https://www.google.com/maps?q=Jl.+Sedati+Agung+1+No.48,+Sedati,+Sidoarjo,+Jawa+Timur+61253"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-orange-100 transition"
        >
          📍 Lihat di Google Maps
        </a>
      </div>
    </section>
  );
};

export default Map;