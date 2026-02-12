import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VehicleCard from "../components/VehicleCard";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import FloatingActions from "../components/FloatingActions";
import PlacesWeCover from "../components/PlacesWeCover";
import WhyChooseUs from  "../components/why-choose-us"
import HappyClients from "../components/HappyClients"

import { motion } from "framer-motion";
import ReviewSection from "../components/Review";


<motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-3xl font-bold text-center mb-12"
>
  Our Vehicles
</motion.h2>


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PlacesWeCover />
     
      {/* Vehicles Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl text-center mx-auto px-4">
          
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Vehicales
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Vehicales</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <VehicleCard
              icon="mdi:car-suv"
              title="Big Car / SUV"
              capacity="6-7 Passengers"
              description="Perfect for family and long-distance journeys."
              // price={28}
            />

                <VehicleCard
              icon="mdi:car"
              title="Small Car"
              capacity="4 Passengers"
              description="Comfortable for city travel and outstation trips."
              // price={22}
            />
           <VehicleCard
              icon="mdi:rickshaw"
              title="Auto Rickshaw"
              capacity="3 Passengers"
              description="Affordable and quick city rides with full driver support."
              // price={15}
            />
            

            <VehicleCard
              icon="mdi:bus"
              title="Urbania"
              capacity="16 Passengers"
              description="A modern, premium, and stylish choice often used for corporate and high-end tourist travel."
              // price={15}
            />

            

        

            
         

          </div>
        </div>
      </section>
       <HappyClients/>
       <WhyChooseUs/>
      <BookingForm />
      <ReviewSection />
      <Footer />
      <FloatingActions />
      
    </>
  );
};

export default Home;
