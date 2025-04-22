'use client';

import ButtonStreaming from './ButtonStreaming';
import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion'; // Import motion

// Animation variants
const headerVariants = {
  hidden: { opacity: 0 }, // Only fade in, no movement
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: "easeOut" } // Faster fade-in for the background
  }
};

const topBarContentVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.1 } // Keep delay for content
  }
};

const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 } // Slightly increase delay for nav items
  }
};

const navItemVariants = {
  hidden: { y: 15, opacity: 0 }, // Adjusted starting position
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export default function Header() {
  return (
    <motion.header // Wrap header with motion
      className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
      initial="hidden"
      animate="visible"
      variants={headerVariants} // Apply faster header background animation
    >
      <div className="container mx-auto px-4">
        {/* Top Bar with Logo and Name */}
        <motion.div // Apply variants to the container of top bar content
          className="flex justify-between items-center py-6"
          variants={topBarContentVariants} // Use new variants for delayed content
          initial="hidden" // Need initial/animate here too if using variants directly
          animate="visible"
        >
          <div className="flex items-center gap-4"> {/* No animation needed directly on this inner div */}
            <div className="bg-white p-3 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white font-serif">Espíritu de Adoración</h1>
          </div>
          <div className="flex items-center gap-6"> {/* No animation needed directly on this inner div */}
            <ButtonStreaming />
            <SocialLinks />
          </div>
        </motion.div>

        {/* Navigation Bar */}
        <motion.nav // Wrap nav with motion
          className="bg-white/10 backdrop-blur-sm py-4 px-6 rounded-t-3xl mt-4"
          variants={navVariants} // Apply nav container animation
          initial="hidden"
          animate="visible"
        >
          <ul className="flex justify-center items-center gap-8">
            {/* Apply navItemVariants to each motion.li as before */}
            <motion.li variants={navItemVariants}>
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Inicio
              </a>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Nosotros
              </a>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Ministerios
              </a>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Eventos
              </a>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contacto
              </a>
            </motion.li>
          </ul>
        </motion.nav>
      </div>
    </motion.header>
  );
}