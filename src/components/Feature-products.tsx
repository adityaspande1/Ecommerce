"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

const products: Product[] = [
  { id: 1, name: "Electric Guitar", price: 599, image: "https://plus.unsplash.com/premium_photo-1681738777666-21c0e82bbe51?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Acoustic Drum Set", price: 799, image: "https://plus.unsplash.com/premium_photo-1681878827351-cb7b82c5445d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Digital Piano", price: 1299, image: "https://images.unsplash.com/photo-1635043702882-1bd821a08d78?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Violin", price: 399, image: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]

export default function FeaturedProducts() {
  return (
    <section className="bg-sky-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-sky-900 text-center mb-8">Our Most Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-sky-50 rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
             
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-sky-800 mb-2">{product.name}</h3>
                <p className="text-sky-600 font-bold mb-4">${product.price}</p>
                <button className="w-full bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600 transition duration-300">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

