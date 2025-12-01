import { useEffect } from "react";
import whatsappIcon from "../../assets/Common/whatsapp.png";
import gmailIcon from "../../assets/Common/gmail.png";

// Removed Swiper imports and styles

export default function ServicesSection({ services, t }) {
  // Optional: A small effect to ensure the section is present if needed for routing
  useEffect(() => {
    // You might want to add any grid-specific initialization here if necessary,
    // but for Tailwind CSS grid, it's mostly in the JSX.
  }, []);

  return (
    <div id="services" className="mt-20">
      {/* Header and Button Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
        <h2 className="text-3xl sm:text-5xl font-[PoppinsRegular] text-[#253672]">
          {t("servicesSection.heading")}
        </h2>

        <button className="px-6 py-2 text-sm border border-[#253672] rounded-full text-[#253672] font-[PoppinsRegular] hover:bg-gray-200 transition">
          {t("servicesSection.offerButton")}
        </button>
      </div>

      {/* Services Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#253672] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Service Image */}
            <div className="h-auto overflow-hidden p-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full object-cover rounded-xl aspect-[5/2]" // Added aspect ratio for consistent height 4/3
              />
            </div>

            {/* Service Content */}
            <div className="p-6 text-white">
              <h3 className="text-2xl font-[PoppinsSbold]">{service.title}</h3>
              <hr className="my-4 border-white/40" />

              <p className="text-gray-300">{service.description}</p>

              {/* Phone/WhatsApp Link */}
              <a
                href={`tel:${service.number}`}
                className="flex items-center gap-2 text-gray-300 mt-5 transition hover:text-white"
              >
                <div className="w-8 h-8 bg-white flex justify-center items-center rounded-full flex-shrink-0">
                  <img
                    src={whatsappIcon}
                    alt="phone"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                {service.number}
              </a>

              {/* Email with Gmail Icon */}
              <a
                href={`mailto:${service.email}`}
                className="flex items-center gap-2 text-gray-300 mt-3 hover:text-white transition w-full"
              >
                {/* 👇 Added 'shrink-0' here. This stops the circle from becoming an oval. */}
                <div className="w-8 h-8 bg-white flex justify-center items-center rounded-full shrink-0">
                  <img
                    src={gmailIcon}
                    alt="email"
                    /* object-contain ensures the image inside doesn't stretch */
                    className="w-5 h-5 object-contain"
                  />
                </div>

                {/* break-all forces the text to wrap if it hits the container edge */}
                <span className="break-all text-sm sm:text-base">
                  {service.email}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}