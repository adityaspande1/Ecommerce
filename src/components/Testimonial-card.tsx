import { motion } from "framer-motion"

interface TestimonialProps {
  name: string
  role: string
  content: string
}

export default function TestimonialCard({ name, role, content }: TestimonialProps) {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-6 mx-4 my-8 w-80 flex flex-col justify-between"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div>
        <p className="text-gray-600 italic mb-4">"{content}"</p>
      </div>
      <div>
        <p className="text-sky-800 font-semibold">{name}</p>
        <p className="text-sky-600 text-sm">{role}</p>
      </div>
    </motion.div>
  )
}

