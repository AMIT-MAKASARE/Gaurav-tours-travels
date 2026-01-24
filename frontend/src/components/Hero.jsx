



"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Star, Users, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  const handleBookRide = () => {
    window.location.href = "tel:7038508035"
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <img src="/ellora-caves-ancient-rock-cut-temples-maharashtra-.jpg" alt="Ellora Caves" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <span className="text-sm text-card font-medium">Rated 4.9/5 by 2000+ travelers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-card leading-tight mb-6"
            >
              <span className="block">Explore Cha.Sambhajinagar with</span>
              <span className="text-secondary">Comfort & Trust</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-card/80 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Discover the magic of Cha.Sambhajinagar with our curated tour packages. From ancient Ellora & Ajanta caves to
              majestic Bibi Ka Maqbara, we make every journey unforgettable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
               <Button
                  onClick={() => {
                    const element = document.getElementById("packages");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-secondary/25 hover:scale-105 transition-all group"
              >
                View Packages
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />                
                </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleBookRide}
                className="bg-card/10 backdrop-blur-sm border-card/30 text-card hover:bg-card/20 rounded-full px-8 py-6 text-lg font-semibold hover:scale-105 transition-all group"
              >
                <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Book a Ride
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12"
            >
              {[
                { icon: Users, value: "50K+", label: "Happy Travelers" },
                { icon: MapPin, value: "100+", label: "Destinations" },
                { icon: Star, value: "15+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-card">{stat.value}</p>
                    <p className="text-sm text-card/70">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="glass rounded-3xl p-6 max-w-sm ml-auto"
            >
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <img src="/ajanta.webp" alt="Bibi Ka Maqbara" className="w-full h-48 object-cover" />
                <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-sm font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              </div>
              <h3 className="text-lg font-bold text-card mb-2">Ajanta</h3>
              <p className="text-card/70 text-sm mb-4">Step into history at the Ajanta Caves, where timeless art and ancient stories come alive..</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-secondary">₹ 799</span>
                  <span className="text-card/60 text-sm ml-1">/person</span>
                </div>
               <Button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                 size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 rounded-full border-2 border-card/50 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1.5 h-1.5 rounded-full bg-card"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
export default Hero;
