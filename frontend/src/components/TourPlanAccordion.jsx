import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    day: "Day 1",
    title: "Ellora & Sightseeing",
    time: "8:00 AM – 5:30 PM (Full Day)",
    places: [
      "Ellora Caves",
      "Grishneshwar Temple",
      "Daulatabad Fort",
      "Bibi Ka Maqbara",
      "Panchakki",
      "Local Market",
    ],
  },
  {
    day: "Day 2",
    title: "Ajanta Caves Tour",
    time: "7:30 AM – 6:30 PM (Full Day)",
    places: ["Ajanta Caves", "View Points", "Relaxed Travel"],
  },
  {
    day: "Day 3",
    title: "Aurangabad City Tour",
    time: "10:00 AM – 5:00 PM",
    places: [
      "Aurangabad Caves",
      "Soneri Mahal",
      "Bibi Ka Maqbara",
      "Panchakki",
      "Chhatrapati Shivaji Maharaj Museum",
    ],
  },
  {
    day: "Day 4",
    title: "Lonar Lake Tour",
    time: "Full Day",
    places: ["Lonar Crater Lake", "Daitya Sudan Temple", "Nature Photography"],
  },
];

const TourPlanAccordion = () => {
  const [open, setOpen] = useState(null);

  const bookPlan = (plan) => {
    const msg = `
Hello Gaurav Tours & Travels 👋

I want to plan a tour.

${plan.day} – ${plan.title}
Time: ${plan.time}

Please contact me.
    `;
    window.open(
      `https://wa.me/917038508035?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section id="plans" className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        4-Days  Aurangabad Tour Plan
      </h2>

      <div className="max-w-4xl mx-auto px-4 space-y-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm bg-gray-50"
          >
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full flex justify-between items-center p-5 font-semibold text-left"
            >
              <span>
                {plan.day} – {plan.title}
              </span>
              <span>{open === index ? "−" : "+"}</span>
            </button>

            <AnimatePresence>
              {open === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-600 mb-3">🕒 {plan.time}</p>

                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-5">
                    {plan.places.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>

                  <button
                    onClick={() => bookPlan(plan)}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
                  >
                    Plan This Tour on WhatsApp
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourPlanAccordion;
