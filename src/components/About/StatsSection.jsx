import CountUp from "react-countup";

const StatsSection = () => {
  return (
    <section className="py-16 text-center bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Bagian Statistik */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-2">Client</h3>
            <p className="text-4xl font-extrabold text-orange-500">
              <CountUp end={627} duration={2.5} />+
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Kota <br /> Jangkauan
            </h3>
            <p className="text-4xl font-extrabold text-orange-500">
              <CountUp end={250} duration={2.5} />+
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Project</h3>
            <p className="text-4xl font-extrabold text-orange-500">
              <CountUp end={459} duration={2.5} />+
            </p>
          </div>
        </div>

        {/* Teks Utama */}
        <h2 className="text-4xl font-extrabold mb-4">
          Your Partner <span className="text-orange-500">in Digital Success</span>
        </h2>

        {/* Deskripsi */}
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Kami percaya bahwa setiap brand berhak memiliki partner yang dapat mendukung pertumbuhannya.
          Dengan slogan kami,{" "}
          <span className="font-medium text-gray-800">
            “Your Partner in Digital Success”
          </span>
          , Lucka Agency hadir bukan sekadar sebagai penyedia layanan kreatif, melainkan sebagai pendamping
          strategis yang memastikan brand Anda bertumbuh dan sukses di era digital.
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
