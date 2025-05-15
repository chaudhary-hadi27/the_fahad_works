import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <section
      id="whatsapp"
      className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50"
    >
      <a
        href="https://wa.me/+923004479894?text=Hi%20there%2C%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="block w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-md sm:shadow-lg hover:scale-105 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </a>
    </section>
  );
}
