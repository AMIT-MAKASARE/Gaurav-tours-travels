"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    details: [" Zostel Near Kranti Chowk", "Cha. Sambhajinagar(Aurangabad) - 430110, India"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9890204683", "+91 9922393259"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["shejwalkantilal@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sun: 10:00 AM - 6:00 PM"],
  },
]

const BookingForm=()=> {
  
  const [formState, setFormState] = useState("idle")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

const handleSubmit = async (e) => {

  e.preventDefault()
  setFormState("loading")

  const form = e.currentTarget
  const formData = new FormData(form)

  formData.append("access_key", "d45cb0e1-f4fd-449e-b26c-4860563be142")
  formData.append("subject", "New Trip Booking Enquiry")
  formData.append("from_name", "Gaurav Tours & Travels")

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await res.json()

    if (data.success) {
      setFormState("success")
      form.reset()
    } else {
      console.error(data)
      setFormState("idle")
      alert("Something went wrong. Please try again.")
    }
  } catch (error) {
    console.error(error)
    setFormState("idle")
    alert("Network error. Please try again.")
  }

  setTimeout(() => setFormState("idle"), 4000)
}

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Start Your <span className="text-primary">Journey?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get in touch with us for personalized tour packages and expert travel advice
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Get In Touch</h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-lg h-64"
            >
               <section className="py-6 bg-gray-50" id="map">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Location
      </h2>

      <div className="max-w-5xl mx-auto px-4">
        <iframe
          title="Zostel Kranti Chowk Aurangabad"
src="https://www.google.com/maps?q=Zostel%20Kranti%20Chowk%20Aurangabad&output=embed"

          className="w-full h-[400px] rounded-xl shadow-lg"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
            </motion.div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Book Your Trip</h3>
              <p className="text-muted-foreground mb-6">
                Fill in your details and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-card-foreground">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="rounded-xl bg-background border-border focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-card-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                       name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      className="rounded-xl bg-background border-border focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="rounded-xl bg-background border-border focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="destination" className="text-card-foreground">
                      Preferred Destination
                    </Label>
                    <select
                      id="destination"
                      name="destination"
                      required
                      className="w-full h-10 rounded-xl bg-background border border-border px-3 text-foreground focus:ring-2 focus:ring-primary transition-all"
                    >
                      <option value="">Select destination</option>
                      <option value="golden-triangle">Golden Triangle</option>
                      <option value="kerala">Kerala Backwaters</option>
                      <option value="rajasthan">Rajasthan Heritage</option>
                      <option value="goa">Goa Beach</option>
                      <option value="himalayan">Himalayan Adventure</option>
                      <option value="varanasi">Varanasi Spiritual</option>
                      <option value="custom">Custom Tour</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="travelers" className="text-card-foreground">
                      Number of Travelers
                    </Label>
                    <Input
                      id="travelers"
                      name="travelers"
                      type="number"
                      min="1"
                      placeholder="2"
                      required
                      className="rounded-xl bg-background border-border focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-card-foreground">
                    Preferred Travel Date
                  </Label>
                  <Input
                    id="date"
                    name="travel_date"
                    type="date"
                    required
                    className="rounded-xl bg-background border-border focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-card-foreground">
                    Additional Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your travel preferences, special requirements, etc."
                    className="w-full rounded-xl bg-background border border-border px-4 py-3 text-foreground focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={formState !== "idle"}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-lg font-semibold transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-70"
                >
                  {formState === "idle" && (
                    <>
                      Submit Inquiry
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                  {formState === "loading" && (
                    <>
                      Submitting...
                      <Loader2 className="ml-2 w-5 h-5 animate-spin" />
                    </>
                  )}
                  {formState === "success" && (
                    <>
                      Submitted Successfully!
                      <CheckCircle className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};
export default BookingForm;
