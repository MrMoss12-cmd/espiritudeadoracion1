'use client'; // Add this directive at the top

import { motion } from 'framer-motion'; // Import motion

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.2 } // Stagger children (header and grid)
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } // Stagger cards within the grid
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function MissionCards() {
  return (
    <motion.section // Wrap section with motion
      className="py-16 bg-[#FDF6F0]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Animate when in view
      viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div // Animate header
          className="text-center mb-12"
          variants={headerVariants} // Apply header variants (will inherit from section)
        >
          <p className="text-sm uppercase tracking-wider mb-2">SUB HEADLINE</p>
          <h2 className="text-3xl font-bold">A CHURCH THAT'S RELEVANT</h2>
        </motion.div>

        <motion.div // Animate the grid container
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={gridVariants} // Apply grid variants (will inherit from section)
        >
          {/* About Us Card */}
          <motion.div // Animate each card
            className="bg-[#FFF5EB] rounded-lg p-8"
            variants={cardVariants} // Apply card variants
          >
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-[#FFD7BA] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">ABOUT US</h3>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>

          {/* Get Involved Card */}
          <motion.div // Animate each card
            className="bg-[#FFF5EB] rounded-lg p-8"
            variants={cardVariants} // Apply card variants
          >
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-[#FFD7BA] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">GET INVOLVED</h3>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>

          {/* Giving Back Card */}
          <motion.div // Animate each card
            className="bg-[#FFF5EB] rounded-lg p-8"
            variants={cardVariants} // Apply card variants
          >
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-[#FFD7BA] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">GIVING BACK</h3>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}