'use client';

import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { Music2 } from 'lucide-react';

const Footer = () => {
  return (
    <div className="flex flex-col overflow-hidden w-full">
      <footer className="flex flex-col items-center justify-center py-8 bg-transparent mt-40 w-full">
        {/* Container for the text */}
        <div className="max-w-[800px] text-center px-4">
          <h2 className="text-2xl sm:text-5xl font-bold mb-6">
          Discover the perfect instrument to create, perform, and 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-400">
              {' '}Inspire!
            </span>
          </h2>
        </div>

        {/* Button */}
        <button className="bg-gradient-to-r from-cyan-400 to-blue-300 hover:from-cyan-500 hover:to-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Buy Now
        </button>

        {/* Bottom Section */}
        <div className="bottom-div flex flex-wrap items-center justify-center gap-10 sm:gap-[100px] md:gap-[150px] lg:gap-[200px] mt-[20px] text-lg sm:text-2xl w-full max-w-screen-xl px-4">
          <span className="text-sky-500 flex text-2xl">
            <Music2 size={24} /> Market
          </span>

          <div className="footer-nav flex gap-6 sm:gap-10 text-lg sm:text-xl">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contacts">Contact</Link>
          </div>

          <div className="social-div flex gap-4 sm:gap-5">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-xl hover:text-blue-700 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-gray-800 transition-colors" />
            </a>
          </div>
        </div>
      </footer>

      <hr className="w-[90%] sm:w-[900px] mx-auto mb-5 border-t border-black" />

      <div className="rights-bottom flex flex-col sm:flex-row items-center justify-between w-full max-w-[700px] mx-auto mb-10 text-center sm:text-left gap-4 px-4">
        <p className="text-md">© 2025 Market. All rights reserved</p>
        <div className="flex gap-4">
          <a href="#" className="text-md">Privacy Policy</a>
          <a href="#" className="text-md">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
