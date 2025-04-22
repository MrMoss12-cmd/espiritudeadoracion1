'use client'; // Add this directive

import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const imageGridVariants = {
  hidden: {}, // No specific animation for the grid container itself
  visible: {
    transition: { staggerChildren: 0.15 } // Stagger the images inside
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
};


export default function SeccionMisionVision() {
  return (
    <motion.section // Wrap the main section
      className="py-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Trigger animation when 10% is visible
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div // Animate header section
          className="text-center mb-8"
          variants={itemVariants} // Apply item animation
        >
          <p className="text-sm uppercase tracking-wider text-gray-600">SUB-HEADLINE</p>
          <h2 className="text-3xl font-bold mb-4">AMOR Y COMPASIÓN</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="px-6 py-2 bg-[#FFD7BA] hover:bg-[#FFE4D1] text-black rounded-lg transition-all duration-300 mb-12">
            LEER MÁS
          </button>
        </motion.div>

        {/* Image Grid */}
        <motion.div // Animate the grid container for staggering
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={imageGridVariants} // Apply grid variants
        >
          <motion.div // Animate first image container
            className="rounded-2xl overflow-hidden h-[400px] relative"
            variants={imageVariants} // Apply image animation
          >
            <Image
              src="https://i.ibb.co/99VLZDtH/personinchurch.jpg"
              alt="Person praying"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          <motion.div // Animate second image container (with offset)
            className="rounded-2xl overflow-hidden h-[400px] relative md:mt-12"
            variants={imageVariants} // Apply image animation
          >
            <Image
              src="https://i.ibb.co/8gNnTVx1/bible.jpg"
              alt="People reading bible"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          <motion.div // Animate third image container
            className="rounded-2xl overflow-hidden h-[400px] relative"
            variants={imageVariants} // Apply image animation
          >
            <Image
              src="https://i.ibb.co/hJ3Ztjm6/church.jpg"
              alt="Person in church"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div // Animate bottom section
          className="text-center mt-16"
          variants={itemVariants} // Apply item animation (will inherit delay from section stagger)
        >
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">NUESTRA MISIÓN Y VISIÓN</p>
          <h3 className="text-2xl font-bold mb-4">CELEBRA CON NOSOTROS</h3>
          <p className="max-w-2xl mx-auto text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="/about" className="inline-flex items-center text-black hover:underline">
            Saber Más <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}