import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX - innerWidth / 2) / innerWidth * 8;
      const y = (clientY - innerHeight / 2) / innerHeight * 8;

      setMousePosition({ x, y });
    };

    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 w-full">
        <div className="relative flex flex-col items-center justify-center min-h-screen text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-label mb-6 sm:mb-10 md:mb-16 text-xs sm:text-base md:text-lg"
          >
            Creating digital experiences since 2020
          </motion.div>

          <div className="relative w-full flex flex-col items-center justify-center">
            {/* Name Text (background) */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] leading-[1.05] text-foreground relative z-10"
              style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.03em' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block"
              >
                DANIEL
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="block gradient-text"
              >
                TUSINGWIRE
              </motion.div>
            </motion.h1>
            {/* Hero Image (foreground, overlay) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
            >
              <motion.div
                className="parallax-container"
                animate={{
                  x: mousePosition.x,
                  y: mousePosition.y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 15,
                  mass: 0.1,
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face"
                  alt="Daniel Tusingwire - Product Designer Portrait"
                  className="hero-portrait-center w-[90px] h-[110px] sm:w-[120px] sm:h-[150px] md:w-[150px] md:h-[180px] lg:w-[180px] lg:h-[220px]"
                  style={{ borderRadius: '40%', objectFit: 'cover', border: '4px solid #fff', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
                  animate={{
                    scale: isHovered ? 1.08 : 1,
                    y: isHovered ? -8 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 md:mt-20"
          >
            <motion.div
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-8 h-8 mx-auto"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary to-primary/60 transform rotate-45"></div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-foreground/30 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
