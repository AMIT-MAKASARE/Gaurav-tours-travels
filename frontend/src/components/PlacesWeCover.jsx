// "use client"

// import { motion, useInView } from "framer-motion"
// import { useRef, useState } from "react"
// import { MapPin, Clock, Star, ArrowRight, Heart, ChevronDown } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { sendWhatsAppMessage } from "@/utils/whatsapp"

// const VEHICLES = [  "Urbaniya", "Small Car", "Big Car / SUV","Auto Rickshaw "]

// const packages = [
//   {
//     id: 1,
//     title: "Day 1 – Ellora & Sightseeing",
//     locations: "Ellora",
//     time: "8:00 AM – 5:30 PM (Full Day)",
//     price: 549,
//     rating: 4.9,
//     reviews: 856,
//     image: "/ellora-caves-ancient-rock-cut-temples-maharashtra-.jpg",
//     details: ["Ellora Caves", "Grishneshwar Temple", "Daulatabad Fort", "Bibi Ka Maqbara", "Panchakki", "Local Market"],
//   },
//   {
//     id: 2,
//     title: "Day 2 – Ajanta Caves Tour",
//     locations: "Ajanta",
//     time: "7:30 AM – 6:30 PM (Full Day)",
//     price: 555,
//     rating: 4.9,
//     reviews: 923,
//     image: "/ajanta-caves-buddhist-architecture-wall-paintings-.jpg",
//     details: ["Ajanta Caves", "View Points", "Relaxed Travel"],
//   },
//   {
//     id: 3,
//     title: "Day 3 – Aurangabad City Tour",
//     locations: "Aurangabad",
//     time: "10:00 AM – 5:00 PM",
//     price: 499,
//     rating: 4.8,
//     reviews: 1247,
//     image: "/bibi-ka-maqbara-aurangabad-white-marble-mausoleum.jpg",
//     details: ["Aurangabad Caves", "Soneri Mahal", "Bibi Ka Maqbara", "Panchakki", "Chhatrapati Shivaji Maharaj Museum"],
//   },
//   {
//     id: 4,
//     title: "Day 4 – Lonar Lake Tour",
//     locations: "Lonar",
//     time: "Full Day",
//     price: 799,
//     rating: 4.9,
//     reviews: 534,
//     image: "/lonar-crater-lake-scenic-nature-landscape-maharash.jpg",
//     details: ["Lonar Crater Lake", "Daitya Sudan Temple", "Nature Photography"],
//   },
// ]

// function PackageCard({ pkg, index }) {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })
//   const [isExpanded, setIsExpanded] = useState(false)
//   const [selectedVehicle, setSelectedVehicle] = useState(null)
//   const [isVehicleOpen, setIsVehicleOpen] = useState(false)

//   const handleBooking = () => {
//     if (!selectedVehicle) {
//       alert("Please select a vehicle first")
//       return
//     }

//     sendWhatsAppMessage({
//       packageTitle: pkg.title,
//       packagePrice: pkg.price,
//       packageDetails: pkg.details,
//       vehicle: selectedVehicle,
//       time: pkg.time,
//       locations: pkg.locations,
//     })
//   }

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
//     >
//       {/* Image Container */}
//       <div className="relative h-56 overflow-hidden">
//         <motion.img
//           src={pkg.image}
//           alt={pkg.title}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//         {/* Wishlist Button */}
//         <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-card hover:scale-110">
//           <Heart className="w-5 h-5 text-foreground hover:text-secondary hover:fill-secondary transition-colors" />
//         </button>

//         {/* Price Badge */}
//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           className="absolute bottom-4 right-4 bg-card rounded-xl px-4 py-2 shadow-lg"
//         >
//           <div className="flex items-baseline gap-1">
//             <span className="text-xl font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
//           </div>
//           <p className="text-xs text-muted-foreground">per person</p>
//         </motion.div>
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
//           {pkg.title}
//         </h3>

//         <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
//           <MapPin className="w-4 h-4 text-primary" />
//           <span>{pkg.locations}</span>
//         </div>

//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center gap-2 text-sm text-muted-foreground">
//             <Clock className="w-4 h-4" />
//             <span>{pkg.time}</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <Star className="w-4 h-4 text-secondary fill-secondary" />
//             <span className="text-sm font-medium text-card-foreground">{pkg.rating}</span>
//             <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
//           </div>
//         </div>

//         <Button
//           onClick={() => setIsExpanded(!isExpanded)}
//           className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-xl transition-all group/btn"
//         >
//           {isExpanded ? "Hide Details" : "View Details"}
//           <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
//         </Button>

//         {isExpanded && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="mt-5 pt-5 border-t border-primary/20"
//           >
//             {/* Vehicle Selection Dropdown */}
//             {/* <div className="mb-6">
//               <label className="block font-bold text-card-foreground mb-3 text-sm">Select Vehicle Type:</label>
//               <div className="relative">
//                 <button
//                   onClick={() => setIsVehicleOpen(!isVehicleOpen)}
//                   className="w-full flex items-center justify-between bg-primary/10 border border-primary/30 text-primary rounded-xl px-4 py-3 hover:bg-primary/20 transition-colors"
//                 >
//                   <span>{selectedVehicle || "Choose a vehicle..."}</span>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${isVehicleOpen ? "rotate-180" : ""}`} />
//                 </button>

//                 {isVehicleOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="absolute top-full left-0 right-0 mt-2 bg-card border border-primary/30 rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto"
//                   >
//                     {VEHICLES.map((vehicle) => (
//                       <button
//                         key={vehicle}
//                         onClick={() => {
//                           setSelectedVehicle(vehicle)
//                           setIsVehicleOpen(false)
//                         }}
//                         className="w-full text-left px-4 py-3 hover:bg-primary/10 transition-colors border-b border-primary/20 last:border-b-0 text-card-foreground"
//                       >
//                         {vehicle}
//                       </button>
//                     ))}
//                   </motion.div>
//                 )}
//               </div>

//               {selectedVehicle && (
//                 <p className="text-xs text-muted-foreground mt-2">✓ {selectedVehicle} selected</p>
//               )}
//             </div> */}

//             {/* Vehicle Selection Dropdown */}
// <div className="mb-6">
//   <label className="block font-bold text-card-foreground mb-3 text-sm">
//     Select Vehicle Type:
//   </label>
//   <div className="relative">
//     <button
//       onClick={() => setIsVehicleOpen(!isVehicleOpen)}
//       className="w-full flex items-center justify-between bg-primary/10 border border-primary/30 text-primary rounded-xl px-4 py-3 hover:bg-primary/20 transition-colors"
//     >
//       <span>{selectedVehicle || "Choose a vehicle..."}</span>
//       <ChevronDown
//         className={`w-4 h-4 transition-transform ${
//           isVehicleOpen ? "rotate-180" : ""
//         }`}
//       />
//     </button>

//     {isVehicleOpen && (
//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -10 }}
//         className="absolute top-full left-0 right-0 mt-2 bg-card border border-primary/30 rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto"
//       >
//         {VEHICLES.map((vehicle) => {
//           // Get price for this vehicle and this package
//           let priceText = ""
//           if (vehicle === "Urbaniya" || vehicle === "Urbania") {
//             priceText = `₹${vehiclePrices["Urbania"]["per km"]}/km`
//           } else {
//             // Map package location to price
//             const location = pkg.locations
//             const keyVehicle = vehicle.trim() // remove any extra space
//             const price = vehiclePrices[keyVehicle]?.[location] || "-"
//             priceText = `₹${price}`
//           }

//           return (
//             <button
//               key={vehicle}
//               onClick={() => {
//                 setSelectedVehicle(vehicle)
//                 setIsVehicleOpen(false)
//               }}
//               className="w-full flex justify-between px-4 py-3 hover:bg-primary/10 transition-colors border-b border-primary/20 last:border-b-0 text-card-foreground"
//             >
//               <span>{vehicle}</span>
//               <span className="text-muted-foreground text-sm">{priceText}</span>
//             </button>
//           )
//         })}
//       </motion.div>
//     )}
//   </div>

//   {selectedVehicle && (
//     <p className="text-xs text-muted-foreground mt-2">
//       ✓ {selectedVehicle} selected
//     </p>
//   )}
// </div>


//             <h4 className="font-bold text-card-foreground mb-4 text-sm">What's Included:</h4>
//             <div className="flex flex-wrap gap-2 mb-6">
//               {pkg.details.map((detail, i) => (
//                 <span key={i} className="inline-block bg-primary/20 text-primary text-xs px-3 py-2 rounded-lg">
//                   {detail}
//                 </span>
//               ))}
//             </div>

//             <Button
//               onClick={handleBooking}
//               className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl"
//             >
//               Book This Day Tour
//               <ArrowRight className="ml-2 w-4 h-4" />
//             </Button>
//           </motion.div>
//         )}
//       </div>
//     </motion.div>
//   )
// }

// const PlacesWeCover = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   return (
//     <section id="packages" className="py-20 md:py-28 bg-muted/50" ref={ref}>
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
//             Our Packages
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
//             4-Day Aurangabad <span className="text-primary">Tour</span>
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Explore the magnificent heritage sites of Aurangabad across 4 unforgettable days
//           </p>
//         </motion.div>

//         {/* Packages Grid - 4 cards layout */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {packages.map((pkg, index) => (
//             <PackageCard key={pkg.id} pkg={pkg} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default PlacesWeCover



"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Clock, Star, ArrowRight, Heart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { sendWhatsAppMessage } from "@/utils/whatsapp"

const VEHICLES = ["Urbaniya", "Small Car", "Big Car / SUV", "Auto Rickshaw"]

// Vehicle prices
const vehiclePrices = {
  "Urbaniya": { "per km": 25 },
  "Small Car": { "Ellora": 2100, "Ajanta": 2000, "Aurangabad": 2500, "Lonar": 3000 },
  "Big Car / SUV": { "Ellora": 3100, "Ajanta": 3000, "Aurangabad": 3500, "Lonar": 4000 },
  "Auto Rickshaw": { "Ellora": 1100, "Ajanta": 1000, "Aurangabad": 1500, "Lonar": 1000 },
}

const packages = [
  {
    id: 1,
    title: "Day 1 – Ellora & Sightseeing",
    locations: "Ellora",
    time: "8:00 AM – 5:30 PM (Full Day)",
    price: 549,
    rating: 4.9,
    reviews: 856,
    image: "/ellora-caves-ancient-rock-cut-temples-maharashtra-.jpg",
    details: ["Ellora Caves", "Grishneshwar Temple", "Daulatabad Fort", "Bibi Ka Maqbara", "Panchakki", "Local Market"],
  },
  {
    id: 2,
    title: "Day 2 – Ajanta Caves Tour",
    locations: "Ajanta",
    time: "7:30 AM – 6:30 PM (Full Day)",
    price: 555,
    rating: 4.9,
    reviews: 923,
    image: "/ajanta-caves-buddhist-architecture-wall-paintings-.jpg",
    details: ["Ajanta Caves", "View Points", "Relaxed Travel"],
  },
  {
    id: 3,
    title: "Day 3 – Aurangabad City Tour",
    locations: "Aurangabad",
    time: "10:00 AM – 5:00 PM",
    price: 499,
    rating: 4.8,
    reviews: 1247,
    image: "/bibi-ka-maqbara-aurangabad-white-marble-mausoleum.jpg",
    details: ["Aurangabad Caves", "Soneri Mahal", "Bibi Ka Maqbara", "Panchakki", "Chhatrapati Shivaji Maharaj Museum"],
  },
  {
    id: 4,
    title: "Day 4 – Lonar Lake Tour",
    locations: "Lonar",
    time: "Full Day",
    price: 799,
    rating: 4.9,
    reviews: 534,
    image: "/lonar-crater-lake-scenic-nature-landscape-maharash.jpg",
    details: ["Lonar Crater Lake", "Daitya Sudan Temple", "Nature Photography"],
  },
]

function PackageCard({ pkg, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const [isVehicleOpen, setIsVehicleOpen] = useState(false)

  const handleBooking = () => {
    if (!selectedVehicle) {
      alert("Please select a vehicle first")
      return
    }

    sendWhatsAppMessage({
      packageTitle: pkg.title,
      packagePrice: pkg.price,
      packageDetails: pkg.details,
      vehicle: selectedVehicle,
      time: pkg.time,
      locations: pkg.locations,
    })
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-card hover:scale-110">
          <Heart className="w-5 h-5 text-foreground hover:text-secondary hover:fill-secondary transition-colors" />
        </button>

        {/* Price Badge */}
        {/* <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="absolute bottom-4 right-4 bg-card rounded-xl px-4 py-2 shadow-lg"
        >
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-primary">₹{pkg.price}</span>
          </div>
          <p className="text-xs text-muted-foreground">per person</p>
        </motion.div> */}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {pkg.title}
        </h3>

        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{pkg.locations}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{pkg.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-sm font-medium text-card-foreground">{pkg.rating}</span>
            <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
          </div>
        </div>

        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-xl transition-all"
        >
          {isExpanded ? "Hide Details" : "View Details"}
          <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
        </Button>

        {isExpanded && (
          <div className="mt-5 pt-5 border-t border-primary/20">
            {/* Vehicle Dropdown */}
            <div className="mb-6 relative">
              <label className="block font-bold text-card-foreground mb-3 text-sm">
                Select Vehicle Type:
              </label>
              <button
                onClick={() => setIsVehicleOpen(!isVehicleOpen)}
                className="w-full flex items-center justify-between bg-primary/10 border border-primary/30 text-primary rounded-xl px-4 py-3 hover:bg-primary/20 transition-colors"
              >
                <span>{selectedVehicle || "Choose a vehicle..."}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isVehicleOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isVehicleOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-primary/30 rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto">
                  {VEHICLES.map((vehicle) => {
                    let priceText = ""
                    if (vehicle === "Urbaniya") priceText = `₹${vehiclePrices["Urbaniya"]["per km"]}/km`
                    else {
                      const loc = pkg.locations
                      const price = vehiclePrices[vehicle]?.[loc] || "-"
                      priceText = `₹${price}`
                    }

                    return (
                      <button
                        key={vehicle}
                        onClick={() => {
                          setSelectedVehicle(vehicle)
                          setIsVehicleOpen(false)
                        }}
                        className="w-full flex justify-between px-4 py-3 hover:bg-primary/10 transition-colors border-b border-primary/20 last:border-b-0 text-card-foreground"
                      >
                        <span>{vehicle}</span>
                        <span className="text-muted-foreground text-sm">{priceText}</span>
                      </button>
                    )
                  })}
                </div>
              )}

              {selectedVehicle && (
                <p className="text-xs text-muted-foreground mt-2">✓ {selectedVehicle} selected</p>
              )}
            </div>

            <h4 className="font-bold text-card-foreground mb-4 text-sm">What's Included:</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {pkg.details.map((detail, i) => (
                <span
                  key={i}
                  className="inline-block bg-primary/20 text-primary text-xs px-3 py-2 rounded-lg"
                >
                  {detail}
                </span>
              ))}
            </div>

            <Button
              onClick={handleBooking}
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl"
            >
              Book This Day Tour
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

const PlacesWeCover = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="packages" className="py-20 md:py-28 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Our Packages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            4-Day Aurangabad <span className="text-primary">Tour</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the magnificent heritage sites of Aurangabad across 4 unforgettable days
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlacesWeCover
