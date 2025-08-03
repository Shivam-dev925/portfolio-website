import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaRocket, FaCode, FaMagic } from 'react-icons/fa';

const Hero: React.FC = () => {
  const text = "Full Stack Developer";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-30 animate-gradient-xy"></div>
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Floating icons */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 text-blue-500 opacity-20"
              animate={floatingAnimation}
            >
              <FaCode size={40} />
            </motion.div>
            <motion.div
              className="absolute top-40 right-20 text-purple-500 opacity-20"
              animate={{
                ...floatingAnimation,
                transition: { ...floatingAnimation.transition, delay: 1 },
              }}
            >
              <FaRocket size={35} />
            </motion.div>
            <motion.div
              className="absolute bottom-20 left-1/4 text-pink-500 opacity-20"
              animate={{
                ...floatingAnimation,
                transition: { ...floatingAnimation.transition, delay: 2 },
              }}
            >
              <FaMagic size={30} />
            </motion.div>
          </div>

          {/* Welcome text */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-lg md:text-xl text-gray-600 dark:text-gray-400">Welcome to my portfolio</span>
          </motion.div>

          {/* Name with gradient */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Shivam Choudhary</span>
          </motion.h1>

          {/* Animated role text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-5xl font-bold mb-8 flex justify-center flex-wrap"
          >
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={letter === " " ? "mx-2" : "gradient-text"}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            I craft beautiful, performant web experiences with modern technologies.
            Passionate about clean code, innovative solutions, and continuous learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 glass-effect rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center text-gray-600 dark:text-gray-400"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <FaArrowDown />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;