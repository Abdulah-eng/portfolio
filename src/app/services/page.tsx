'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Services() {
  const [show, setShow] = useState(false);

  const changestate = () => {
    setShow(!show);
  };

  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      
      {/* Navbar */}
      <motion.div
        className="bg-slate-900 w-full h-auto fixed top-0 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <nav className="flex h-24 w-full items-center px-6 justify-between">
          
          {/* Left: Logo */}
          <motion.div
            className="text-yellow-400 text-4xl font-serif italic font-extrabold tracking-wide"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Muhammad Abdullah
          </motion.div>

          {/* Center: Navigation Links (Hidden on md and below) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-8">
              {['Home', 'Services', 'About'].map((item) => (
                <motion.li
                  key={item}
                  className="relative px-2 pt-2 group text-yellow-400 text-2xl font-serif italic tracking-wide"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                    {item}
                  </Link>
                  <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right: Mobile Menu (Visible on md and below) */}
          <div className="lg:hidden flex items-center">
            <motion.div
              className="text-3xl cursor-pointer transition-transform duration-300 hover:scale-125"
              onClick={changestate}
              whileHover={{ scale: 1.2 }}
            >
              &#8801;
            </motion.div>
          </div>

          {/* Mobile Dropdown Menu */}
          {show && (
            <motion.div
              className="absolute top-20 right-6 bg-slate-800 rounded-md shadow-lg w-40"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ul className="flex flex-col text-center">
                {['Home', 'About', 'Services'].map((item) => (
                  <motion.li
                    key={item}
                    className="py-3 text-yellow-400 text-lg font-serif transition-transform duration-400 hover:scale-110 hover:bg-slate-900"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </nav>
      </motion.div>

      {/* Services Content */}
      <motion.div 
        className="flex flex-col items-center justify-center h-screen px-10 pt-32" // Added pt-32 for padding-top
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.h1 
          className="text-5xl font-extrabold text-yellow-400 tracking-wide mb-10"
          variants={fadeInUp}
        >
          Our Services
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
        >
          
          {/* Web Development Service Box */}
          <motion.div 
            className="bg-slate-800 w-72 h-64 border border-yellow-400 rounded-lg shadow-lg flex flex-col items-center justify-center text-white p-6 hover:shadow-yellow-400/50 transition-shadow duration-300"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Web Development</h2>
            <p className="text-center text-gray-300">
              We create stunning, responsive, and high-performance websites tailored to your business needs.
            </p>
          </motion.div>

          {/* UI/UX Design Service Box */}
          <motion.div 
            className="bg-slate-800 w-72 h-64 border border-yellow-400 rounded-lg shadow-lg flex flex-col items-center justify-center text-white p-6 hover:shadow-yellow-400/50 transition-shadow duration-300"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">UI/UX Design</h2>
            <p className="text-center text-gray-300">
              Our designs are user-centric, ensuring a seamless and engaging experience for your audience.
            </p>
          </motion.div>

          {/* E-commerce Solutions Service Box */}
          <motion.div 
            className="bg-slate-800 w-72 h-64 border border-yellow-400 rounded-lg shadow-lg flex flex-col items-center justify-center text-white p-6 hover:shadow-yellow-400/50 transition-shadow duration-300"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">E-commerce Solutions</h2>
            <p className="text-center text-gray-300">
              We build scalable and secure e-commerce platforms to help you grow your online business.
            </p>
          </motion.div>

        </motion.div>
      </motion.div>
      
    </div>
  );
}