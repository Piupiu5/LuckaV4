export default function DiscoverSection() {
  return (
    <section className="text-center py-16 bg-white">
      {/* Judul */}
      <h2 className="text-3xl font-bold mb-2">
        <span className="text-orange-500">Discover</span>{" "}
        <span className="text-black">Lucka Agency</span>
      </h2>

      {/* Deskripsi */}
      <p className="text-gray-700 max-w-xl px-6 mx-auto mb-10 text-sm">
        Mari kenali lebih dekat dengan kami, karena kesuksesan digital selalu
        berawal dari cerita yang kuat
      </p>

      {/* Kotak Oranye */}
      <div className="bg-orange-500 w-4/5 max-w-5xl mx-auto h-96 rounded-xl shadow-lg"></div>
    </section>
  );
}
