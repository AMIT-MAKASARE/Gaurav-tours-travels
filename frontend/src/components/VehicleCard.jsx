"use client"

import { motion } from "framer-motion"
import { sendWhatsAppMessage } from "../utils/whatsapp"

const vehicleImages = {
  "Auto Rickshaw": "/auto.webp",
  "Small Car": "/car.jpg",
  "Big Car / SUV": "/suv.avif",
}

const VehicleCard = ({ title, capacity, description, price, index }) => {
  const vehicleImage = vehicleImages[title] || "/auto-rickshaw.jpg"

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      id="Vehicales"
      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center"
    >
      {/* Vehicle Image */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-full h-48 mx-auto mb-4 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors overflow-hidden"
      >
        <img
          src={vehicleImage || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-1">
        {title}
      </h3>

      {/* Capacity */}
      <p className="text-sm text-gray-500">
        Capacity: {capacity}
      </p>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-600">
        {description}
      </p>

      {/* Price */}
      {/* <p className="mt-4 text-lg font-bold text-blue-600">
        ₹{price} <span className="text-sm font-medium text-gray-500">/ km</span>
      </p> */}

      {/* Actions */}
      <div className="mt-6 flex gap-3 justify-center">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => sendWhatsAppMessage({ vehicle: title, price })}
          className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600"
        >
          WhatsApp
        </motion.button>

        <motion.a
          whileTap={{ scale: 0.95 }}
          href="tel:9890204683"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
        >
          Call
        </motion.a>
      </div>
    </motion.div>
  )
}

export default VehicleCard
