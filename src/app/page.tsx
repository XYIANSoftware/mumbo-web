'use client';

import { motion } from 'framer-motion';
import { Button } from 'primereact/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-dark via-accent-main to-secondary-dark opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light via-accent-light to-secondary-light">
              DJ MUMBO
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where EDM meets playful vibes in a fusion of sound and energy
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/events">
              <Button
                label="Upcoming Events"
                icon="pi pi-calendar"
                className="p-button-rounded p-button-lg"
              />
            </Link>
            <Link href="/music">
              <Button
                label="Listen Now"
                icon="pi pi-play"
                className="p-button-rounded p-button-lg p-button-outlined"
              />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <i className="pi pi-angle-down text-3xl text-white opacity-50"></i>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Feature Cards */}
            <div className="bg-background-paper p-6 rounded-xl">
              <i className="pi pi-music text-4xl text-primary-light mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Unique Sound</h3>
              <p className="text-gray-400">
                Blending EDM with nostalgic cartoon vibes for a one-of-a-kind experience
              </p>
            </div>

            <div className="bg-background-paper p-6 rounded-xl">
              <i className="pi pi-star text-4xl text-secondary-light mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Live Performance</h3>
              <p className="text-gray-400">
                High-energy shows that keep the crowd moving all night long
              </p>
            </div>

            <div className="bg-background-paper p-6 rounded-xl">
              <i className="pi pi-heart text-4xl text-accent-light mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-400">
                Join a growing family of music lovers and party enthusiasts
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
