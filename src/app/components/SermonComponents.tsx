'use client'; // Add this directive

import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.2 } // Stagger header and grid
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const gridVariants = {
  hidden: {}, // Grid container doesn't need its own animation, just staggering
  visible: {
    transition: { staggerChildren: 0.15 } // Stagger the cards
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
};


export default function SermonComponents() {
  const sermons = [
    {
      image: 'https://i.ibb.co/3YWtySb5/paralitico.jpg',
      title: 'WATCH AND LISTEN TO OUR SERMONS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
    },
    {
      image: 'https://i.ibb.co/yxZyRwL/transfig.jpg',
      title: 'WATCH AND LISTEN TO OUR SERMONS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
    },
    {
      image: 'https://i.ibb.co/PZmPV8H9/panypeces.jpg',
      title: 'WATCH AND LISTEN TO OUR SERMONS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
    },
    {
      image: 'https://i.ibb.co/8Lhps80W/venida.jpg',
      title: 'WATCH AND LISTEN TO OUR SERMONS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
    }
  ];

  return (
    <motion.section // Wrap section
      className="py-16 bg-[#FDF6F0]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Animate when 10% is visible
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div // Animate header
          className="text-center mb-12"
          variants={headerVariants} // Apply header animation
        >
          <p className="text-sm uppercase tracking-wider mb-2">WATCH AND LISTEN</p>
          <h2 className="text-3xl font-bold mb-6">THE BENEFITS OF<br />JOINING OUR CHURCH</h2>
        </motion.div>

        {/* Sermon Grid */}
        <motion.div // Animate grid container for staggering
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          variants={gridVariants} // Apply grid variants
        >
          {sermons.map((sermon, index) => (
            <motion.div // Animate each card
              key={index}
              className="relative group overflow-hidden rounded-lg"
              variants={cardVariants} // Apply card animation
            >
              <Image
                src={sermon.image}
                alt={sermon.title}
                width={300}
                height={400}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 transition-opacity">
                <h3 className="text-white text-sm font-bold mb-2">{sermon.title}</h3>
                <p className="text-white/80 text-sm">{sermon.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}