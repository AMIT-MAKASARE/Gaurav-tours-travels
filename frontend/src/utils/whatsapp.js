
export const sendWhatsAppMessage = ({
  packageTitle,
  packagePrice,
  packageDetails,
  vehicle,
  time,
  locations,
}) => {
  const phoneNumber = "919890204683"; // WhatsApp number

  const message = `
*Day Tour Booking Request* 🚗

*Package:* ${packageTitle}
*Vehicle:* ${vehicle}
*Time:* ${time}
*Location:* ${locations}

*What's Included:*
${packageDetails.map((detail) => `• ${detail}`).join("\n")}

Please confirm this booking!
  `.trim();

  const encodedMessage = encodeURIComponent(message);
  window.open(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    "_blank"
  );
};





export const sendWhatsAppMessageV = ({ vehicle, price }) => {
  const phoneNumber = "919890204683"

  const message = `
Hello 👋 Gaurav Tours & Travels

I want this tour.

🚗 Vehicle Selected: ${vehicle}
💰 price: ${price}

Please contact me.
  `

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  )
}
