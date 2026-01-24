// export const sendWhatsAppMessage = ({
//   vehicle,
//   price,
//   pickup = "",
// }) => {
//   const phoneNumber = "917038508035"; // your WhatsApp number

//   const message = `
// Hello Gaurav Tours & Travels 👋

// I want to book a ride 🚖

// Vehicle: ${vehicle}
// Price: ₹${price} per km
// Pickup & Destination: ${pickup}

// Please contact me.
//   `;

//   const encodedMessage = encodeURIComponent(message.trim());

//   window.open(
//     `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
//     "_blank"
//   );
// };

export const sendWhatsAppMessage = ({
  packageTitle,
  packagePrice,
  packageDetails,
  vehicle,
  time,
  locations,
}) => {
  const phoneNumber = "917038508035"; // WhatsApp number

  const message = `
*Day Tour Booking Request* 🚗

*Package:* ${packageTitle}
*Price:* ₹${packagePrice} per person
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
