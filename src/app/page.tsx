
"use client"
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="flex items-center justify-center py-2">
  <motion.div
    initial={{ opacity: 0, y: 150 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 120 }}
    className="flex flex-col items-center text-center m-auto mt-20"
  >
    <h1 className="text-6xl font-bold p-5">
      Discover Your Perfect 
      <span className="text-sky-500"> Sound</span>
    </h1>
    <p className="text-2xl font-light p-1">
      Find the perfect instrument for your music journey.
    </p>
    {/* Center the button */}
    <div className="flex justify-center mt-5">
      <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-md">
        Shop Now
      </button>
    </div>
  </motion.div>
</div>

  );
}
