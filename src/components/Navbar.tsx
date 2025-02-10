"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { IoMusicalNotes, IoMenu, IoClose } from "react-icons/io5"
import { useState } from "react"

const NavList = [
  { link: "/", name: "Home" },
  { link: "/about", name: "About" },
  { link: "/contacts", name: "Contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="text-sky-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            whileHover={{scale:1.05}}
            onClick={()=>{window.location.href="/"}}
            className="flex-shrink-0 flex gap-1 cursor-pointer"
          >
            <IoMusicalNotes size={28} className="text-sky-500"/>
            <h1 className="text-2xl font-bold tracking-tight text-black">Melody Market</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <ul className="flex space-x-4">
              {NavList.map((item, index) => (
                <motion.li key={index}
                  initial={{ y: -150 }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 120 }}
                >
                  <Link
                    href={item.link}
                    className="px-3 py-2 rounded-md text-md font-medium hover:text-sky-500 transition duration-150 ease-in-out"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation Button */}
          <div className="sm:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <IoClose className="h-6 w-6 text-sky-800" />
              ) : (
                <IoMenu className="h-6 w-6 text-sky-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sm:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-md mt-2">
              {NavList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-500 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}