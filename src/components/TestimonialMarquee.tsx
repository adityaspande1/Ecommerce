"use client"

import { useState } from "react"
import Marquee from "react-fast-marquee"
import TestimonialCard from "@/components/Testimonial-card"

const testimonials = [
  {
    name: "John Doe",
    role: "Guitar Enthusiast",
    content: "Melody Market has the best selection of guitars I've ever seen. Their customer service is top-notch!",
  },
  {
    name: "Jane Smith",
    role: "Professional Pianist",
    content: "I found my dream piano at Melody Market. The staff was incredibly knowledgeable and helpful.",
  },
  {
    name: "Mike Johnson",
    role: "Drum Instructor",
    content: "The quality of instruments at Melody Market is unmatched. I always recommend my students to shop here.",
  },
  {
    name: "Sarah Lee",
    role: "Violin Player",
    content: "Melody Market's selection of string instruments is impressive. I love browsing their collection!",
  },
]

export default function TestimonialMarquee() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="bg-sky-100 py-12" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <h2 className="text-3xl font-bold text-sky-900 text-center mb-8">What Our Customers Say</h2>
      <Marquee gradient={false} speed={40} pauseOnHover={true} play={!isPaused}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </Marquee>
    </div>
  )
}

