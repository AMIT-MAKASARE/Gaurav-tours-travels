import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      
      {/* WhatsApp */}
      <motion.a
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        href="https://wa.me/919890204683"
        target="_blank"
        aria-label="Chat on WhatsApp"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <Icon icon="logos:whatsapp-icon" width="28" />
      </motion.a>

      {/* Call */}
      <motion.a
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        href="tel:9890204683"
        aria-label="Call us"
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <Icon icon="mdi:phone" width="26" />
      </motion.a>

    </div>
  );
};

export default FloatingActions;
