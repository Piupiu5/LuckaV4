import { Rocket, Handshake, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const Reason = () => {
  const features = [
    {
      icon: <Rocket className="w-20 h-20 text-orange-500" />,
      title: "All in One Creative Solutions",
      desc: "Semua kebutuhan kreatif brand Anda, dari ide hingga eksekusi, hadir dalam satu solusi yang menghadirkan hasil nyata.",
    },
    {
      icon: <Handshake className="w-20 h-20 text-orange-500" />,
      title: "Insight Powered Campaigns",
      desc: "Kampanye kami lahir dari insight dan data, menjangkau audiens tepat, mendorong engagement, dan pertumbuhan nyata.",
    },
    {
      icon: <Lightbulb className="w-20 h-20 text-orange-500" />,
      title: "Your Strategic Partner",
      desc: "Kami bukan hanya sekadar eksekutor, tapi mitra yang menyatukan ide, strategi, dan eksekusi demi kesuksesan brand Anda.",
    },
  ];

  return (
    <section className="py-20 bg-white text-center overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
        Kenapa Harus <span className="text-orange-500">Lucka Agency?</span>
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14 px-8">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-6 bg-white p-8 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-orange-50 hover:bg-orange-100 transition-all duration-300">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed max-w-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reason;
