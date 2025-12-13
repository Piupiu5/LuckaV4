import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="text-center py-16 px-4 bg-white text-gray-800">
      <h2 className="text-4xl font-bold mb-4">
        <span className="text-orange-500">Bangun</span> Proyek Kreatif Bersama Kami
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12">
        Punya ide dan ingin mengembangkan strategi digital untuk brand Anda? 
        Tim kami siap berdiskusi, merancang konsep, dan membantu mewujudkannya
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto text-left">
        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">SOSIAL MEDIA</h3>
          <div className="flex items-center gap-3">
            <Instagram className="text-orange-500 w-6 h-6" />
            <span className="text-orange-500 font-medium">@luckaagency</span>
          </div>
        </div>

        {/* Email */}
        <div>
          <h3 className="text-lg font-semibold mb-3">EMAIL</h3>
          <div className="flex items-center gap-3">
            <Mail className="text-orange-500 w-6 h-6" />
            <a
              href="mailto:luckaagency.ind@gmail.com"
              className="text-orange-500 font-medium"
            >
              luckaagency.ind@gmail.com
            </a>
          </div>
        </div>

        {/* Telepon */}
        <div>
          <h3 className="text-lg font-semibold mb-3">TELEPON/ WHATSAPP</h3>
          <div className="flex items-center gap-3">
            <Phone className="text-orange-500 w-6 h-6" />
            <a
              href="https://wa.me/6285784460287"
              className="text-orange-500 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              +62 857-8446-0287 (Admin)
            </a>
          </div>
        </div>

        {/* Alamat */}
        <div className="md:col-span-2 lg:col-span-3 mt-6">
          <h3 className="text-lg font-semibold mb-3">ALAMAT</h3>
          <div className="flex items-start gap-3">
            <MapPin className="text-orange-500 w-6 h-6 mt-1" />
            <p className="text-gray-700 leading-relaxed">
              Jl. Sedati Agung 1 No.48 4/2 Sedati - Sidoarjo, Jawa Timur 61253
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;