'use client'; // Add this directive

import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    // transition: { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.95] } // Original invalid ease
    transition: { duration: 0.6, ease: "easeOut" } // Use a standard ease string
  }
};

export default function ContactComponent() {
  return (
    <section className="relative h-[600px]">
      {/* Background Image (No animation needed here, loads normally) */}
      <div className="absolute inset-0">
        <Image
          src="https://i.ibb.co/mrB96fmY/cartagena.jpg"
          alt="Church exterior"
          fill
          className="object-cover"
          priority // Keep priority if it's important for LCP
        />
        {/* Optional: Add a subtle overlay if needed */}
        {/* <div className="absolute inset-0 bg-black/10"></div> */}
      </div>

      {/* Content Card Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div // Wrap the content card with motion
          className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-lg mx-4"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the card is visible
        >
          <h2 className="text-3xl font-bold mb-4">
            WE WANT TO<br />
            SERVE THE WORLD<br />
            AROUND US
          </h2>

          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>

          <button className="px-8 py-3 bg-[#FFD7BA] hover:bg-[#FFE4D1] text-black rounded-lg transition-all duration-300">
            VISIT
          </button>
        </motion.div>
      </div>
    </section>
  );
}