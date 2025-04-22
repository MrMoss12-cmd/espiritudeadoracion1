'use client'; // Add this directive

import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.2 } // Stagger children: header, card, link
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 }, // Slide in from right
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const contentVariants = {
  hidden: { opacity: 0, x: -50 }, // Slide in from left
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};


export default function EventComponent() {
  return (
    <motion.section // Wrap section
      className="py-16 bg-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Animate when 10% is visible
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div // Animate header
          className="text-center mb-12"
          variants={itemVariants} // Apply item animation
        >
          <p className="text-sm uppercase tracking-wider mb-2">UPCOMING SERMONS</p>
          <h2 className="text-3xl font-bold">
            JOIN US AND BECOME PART<br />
            OF SOMETHING GREAT
          </h2>
        </motion.div>

        {/* Event Card - Animate the container */}
        <motion.div
          className="flex flex-col md:flex-row max-w-6xl mx-auto bg-[#FFF5EB] rounded-lg overflow-hidden"
          variants={cardVariants} // Apply card animation (fade/scale)
        >
          {/* Left Content - Animate separately */}
          <motion.div
            className="p-8 md:w-1/3"
            variants={contentVariants} // Apply content slide-in
          >
            <p className="text-sm uppercase mb-4">UPCOMING EVENT</p>
            <h3 className="text-xl font-bold mb-4">
              WATCH AND LISTEN TO OUR SERMONS
            </h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>

            {/* Date and Time */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Friday 23:39 IST</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>No.233 Main St. New York, United States</span>
              </div>
            </div>

            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              REGISTER
            </button>
          </motion.div>

          {/* Right Image - Animate separately */}
          <motion.div
            className="md:w-2/3 relative h-[400px] md:h-auto"
            variants={imageVariants} // Apply image slide-in
          >
            <Image
              src="https://i.ibb.co/8DdbX1bL/young.jpg"
              alt="Event"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* View All Link */}
        <motion.div // Animate link
          className="text-right mt-6 max-w-6xl mx-auto"
          variants={itemVariants} // Apply item animation
        >
          <a href="/sermones" className="inline-flex items-center text-black hover:underline">
            View all Sermons <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}