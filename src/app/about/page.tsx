'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  const [show, setShow] = useState(false);

  const changestate = () => {
    setShow(!show);
  };

  // Animation Variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // const hoverScale = {
  //   hover: { scale: 1.05, transition: { duration: 0.3 } },
  // };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col overflow-hidden">
      
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

      {/* About Content */}
      <motion.div
        className="flex flex-col items-start justify-center min-h-screen px-10 pt-32" // Added pt-32 for padding-top
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* About Me Section */}
        <motion.h1
          className="text-6xl font-extrabold text-yellow-400 tracking-wide mb-6"
          variants={fadeInUp}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed"
          variants={fadeInUp}
        >
          Hello! I&apos;m Muhammad Abdullah, a passionate developer and designer with a love for crafting immersive digital experiences. 
          I specialize in frontend and backend development, ensuring smooth user interactions and responsive designs.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mt-4 leading-relaxed"
          variants={fadeInUp}
        >
          My journey in tech has been driven by a curiosity to explore and innovate. 
          Whether it&apos;s developing modern web applications or optimizing user interfaces, I thrive on solving complex challenges.
        </motion.p>

        {/* Skills Section */}
        <motion.div
          className="mt-12"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {['JavaScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Framer Motion'].map((skill) => (
              <motion.div
                key={skill}
                className="px-4 py-2 bg-slate-800 text-yellow-400 rounded-full text-lg font-medium"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mt-12"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">Experience</h2>
          <div className="space-y-4">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400">Frontend Developer</h3>
             
              <p className="text-gray-300 mt-2">
                Developed responsive and user-friendly web applications using modern technologies like React and Next.js.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400">UI/UX Designer</h3>
         
              <p className="text-gray-300 mt-2">
                Designed intuitive and visually appealing interfaces for web and mobile applications.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          className="mt-12"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">Let&apos;s Connect</h2>
          <div className="flex space-x-6">
            {['LinkedIn', 'GitHub'].map((platform) => (
              <motion.a
                key={platform}
                href={`https://www.${platform.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 text-2xl hover:underline"
                whileHover={{ scale: 1.1 }}
              >
                {platform}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}