'use client';
import Rotation from './components/rotation/page';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const fullText = "Hi, myself Muhammad Abdullah ";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const changestate = () => {
    setShow(!show);
  };

  // Animation Variants for Framer Motion
  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  // };

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

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-32 px-10 w-full">
        
        {/* Left: Animated Text */}
        <div className="w-full md:w-1/2">
          <p className="text-5xl md:text-6xl font-bold text-yellow-400 tracking-wide mb-4">
            Muhammad Abdullah
          </p>
          <p className="text-2xl md:text-3xl font-semibold">
            <span className="inline-block animate-fadeIn">{text}</span>
            <span className="animate-blink">|</span>
          </p>
        </div>

        {/* Right: 3D Rotation Component */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative flex justify-center items-center h-[40vh] md:h-[60vh] transform scale-75 md:scale-125 translate-z-20">
            <Rotation />
          </div>
        </div>
      </div>
      
    </div>
  );
}