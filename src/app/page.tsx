'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from 'primereact/button';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mumbo-bg-2.png"
            alt="DJ Mumbo performing"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-primary/80 via-background-primary/50 to-background-primary/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/mumbo-icon-1.png"
              alt="DJ Mumbo Logo"
              width={150}
              height={150}
              className="mx-auto"
            />
          </motion.div>

          {/* <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light via-accent-light to-secondary-light">
              DJ MUMBO
            </span>
          </motion.h1> */}

          {/* <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where EDM meets playful vibes in a fusion of sound and energy
          </motion.p> */}

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

      {/* Parallax Section */}
      <section ref={parallaxRef} className="relative h-[50vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/images/mumbo-bg-1.png"
            alt="DJ Mumbo Background"
            fill
            className="object-cover object-center"
            quality={100}
          />
          <div className="absolute inset-0 bg-purple-900/90" />
        </motion.div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Experience the Magic
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join us for an unforgettable journey through sound and rhythm
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <motion.div
              className="flex-1 relative aspect-square max-w-lg rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/mumbo-icon-2.png"
                alt="DJ Mumbo in action"
                fill
                className="object-cover object-center"
                quality={90}
              />
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About DJ Mumbo</h2>
              <p className="text-lg text-gray-300 mb-8">
                Get ready for an unforgettable journey through sound and rhythm. DJ Mumbo brings
                a unique blend of electronic beats and nostalgic vibes that will keep you moving
                all night long.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary-light">5+ Years</h3>
                  <p className="text-gray-400">Of Experience</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary-light">200+</h3>
                  <p className="text-gray-400">Live Shows</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-accent-light">50+</h3>
                  <p className="text-gray-400">Original Tracks</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary-light">100K+</h3>
                  <p className="text-gray-400">Happy Fans</p>
                </div>
              </div>
            </motion.div>
          </div>

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
