import { motion } from "framer-motion";
import founderImg from "../../assets/Founder.png"; // ganti sesuai path gambar kamu

export default function CreativeTeam() {
  return (
    <section className="font-sans text-gray-800">
      {/* ===== BARIS 1 ===== */}
      <motion.div
        className="flex flex-wrap justify-center gap-10 py-10 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Creative Director */}
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h3 className="text-lg font-bold text-orange-500 mb-2 text-center">
            Creative Director
          </h3>
          <div className="bg-white rounded-2xl shadow-lg p-4 w-64 h-80 overflow-hidden">
            <img
              src={founderImg}
              alt="Creative Director"
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>
        </motion.div>

        {/* Finance Manager */}
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h3 className="text-lg font-bold text-orange-500 mb-2 text-center">
            Finance Manager
          </h3>
          <div className="bg-white rounded-2xl shadow-lg p-4 w-64 h-80 overflow-hidden">
            <img
              src={founderImg}
              alt="Finance Manager"
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* ===== BARIS 2 & 3 ===== */}
      <div className="bg-[#ff7a00] py-16">
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            "Social Media Specialist",
            "Web Developer",
            "3D Artist",
            "Copywriter",
            "Videographer",
            "Business Development",
          ].map((role, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-bold text-white mb-2">{role}</h3>
              <div className="bg-white rounded-2xl shadow-lg p-4 w-64 h-80 overflow-hidden">
                <img
                  src={founderImg}
                  alt={role}
                  className="w-full h-full object-cover object-top rounded-xl"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
