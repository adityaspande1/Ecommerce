"use client";
import FeaturesSection from "@/components/Feature";
import WaveVisualization from "@/components/Wave";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import { motion } from "framer-motion";
import FeaturedProducts from "@/components/Feature-products";

export default function Home() {
  return (
    <>
      <div className="container mb-20">
        {/* Hero Section */}
        <div className="flex items-center justify-center py-2 align-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex flex-col  justify-center items-center text-center m-auto mt-20"
          >
            <h1 className="text-6xl font-bold p-5 justify-center">
              Discover Your Perfect <span className="text-sky-500">Sound</span>
            </h1>
            <p className="text-2xl font-light p-1">
              Find the perfect instrument for your music journey.
            </p>
            {/* Centered Button */}
            <div className="flex justify-center mt-5">
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-md">
                Shop Now
              </button>
            </div>
          </motion.div>
        </div>
      {/* Wave Section */}
      <div className="container">
      <div className="wave-wrapper relative mt-20">
          <WaveVisualization />
          <br /><br /><br /><br />
      </div>
      </div>
      
        
      </div>

      {/* Features Section */}
      <section className="container mx-auto px-4 mt-20">
        <FeaturesSection />
      </section>
          {/* Feature Products */}

      <section className=" py-12">
        <FeaturedProducts/>
      </section>

      {/* Testimonial Marquee */}
      <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="container mx-auto px-4 mt-20">
        <TestimonialMarquee />
      </motion.section>

    {/* Feature */}


    </>

  );
}
