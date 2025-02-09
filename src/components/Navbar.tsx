"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Music2 } from "lucide-react"
const NavList = [
  { link: "/", name: "Home" },
  { link: "/about", name: "About" },
  { link: "/contact", name: "Contact" },
]

export default function Navbar() {
  return (
    <nav className="text-sky-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            whileHover={{scale:1.05}}
            onClick={()=>{window.location.href="/"}}
          className="flex-shrink-0 flex gap-1">
            <Music2 size={28} className="text-sky-500"/>
            <h1 className="text-2xl font-bold tracking-tight text-black">Melody Market</h1>
          </motion.div>
          <div className="hidden sm:block">
            <ul className="flex space-x-4">
              {NavList.map((item, index) => (
                <motion.li key={index}
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 120 }}>
                  <Link
                    href={item.link}
                    className="px-3 py-2 rounded-md text-md font-medium  hover:text-sky-500 transition duration-150 ease-in-out"
                    >
                    {item.name}
                    </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

