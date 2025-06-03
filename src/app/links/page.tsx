'use client';

import { motion } from 'framer-motion';
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Image from 'next/image';
import { FaSpotify, FaSoundcloud } from 'react-icons/fa';

interface Link {
  title: string;
  url: string;
  icon: string;
  type: 'music' | 'social';
  platform?: string;
}

const socialLinks: Link[] = [
  {
    title: "TikTok",
    url: "https://tiktok.com/@mumbobeatz",
    icon: "pi pi-video",
    type: "social"
  },
  {
    title: "Instagram",
    url: "https://instagram.com/mumbobeatz",
    icon: "pi pi-instagram",
    type: "social"
  },
  {
    title: "Twitter",
    url: "https://twitter.com/mumbobeatz",
    icon: "pi pi-twitter",
    type: "social"
  },
  {
    title: "YouTube",
    url: "https://youtube.com/@mumbobeatz",
    icon: "pi pi-youtube",
    type: "social"
  },
  {
    title: "Facebook",
    url: "https://facebook.com/profile.php?id=61575874555012",
    icon: "pi pi-facebook",
    type: "social"
  }
];

const spotifyLinks: Link[] = [
  {
    title: "Feelin' Pretty Suavé",
    url: "https://open.spotify.com/track/26Sx99DCrKHnovO2snGyPu",
    icon: "pi pi-spotify",
    type: "music",
    platform: "SPOTIFY"
  },
  {
    title: "Satellite (Mumbo Flip)",
    url: "https://open.spotify.com/track/your-track-id",
    icon: "pi pi-spotify",
    type: "music",
    platform: "SPOTIFY"
  }
];

const soundcloudLinks: Link[] = [
  {
    title: "Mumbo's Secret Stuff Vol. 1",
    url: "https://soundcloud.com/mumbobeatz",
    icon: "pi pi-cloud",
    type: "music",
    platform: "SOUNDCLOUD"
  },
  {
    title: "Emorfik 1/25: Mumbo Live Set!",
    url: "https://soundcloud.com/mumbobeatz",
    icon: "pi pi-cloud",
    type: "music",
    platform: "SOUNDCLOUD"
  }
];

const AnimatedShape = ({ className }: { className?: string }) => (
  <motion.div
    className={`absolute rounded-full bg-gradient-to-r from-primary-light/10 to-secondary-light/10 ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      opacity: [0.3, 0.2, 0.3]
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

export default function LinksPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 max-w-2xl mx-auto relative overflow-hidden">
      {/* Animated Background Shapes */}
      <AnimatedShape className="w-[400px] h-[400px] -bottom-20 -left-20" />
      <AnimatedShape className="w-[300px] h-[300px] -top-20 -right-20" />
      <AnimatedShape className="w-[200px] h-[200px] bottom-40 right-20" />

      {/* Profile Section */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image
            src="/images/mumbo-assets/Mumbo Logo.png"
            alt="Mumbo Logo"
            width={128}
            height={128}
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-3xl font-bold font-display mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light">
            @mumbobeatz
          </span>
        </h1>
        <p className="text-gray-300">Do the things you love</p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Button
              onClick={() => window.open(link.url, '_blank')}
              className="w-full p-button-outlined"
            >
              <div className="flex items-center justify-center gap-2">
                <i className={`${link.icon} text-xl`}></i>
                <span>{link.title}</span>
              </div>
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Music Links Accordion */}
      <motion.div
        className="w-full relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Accordion>
          <AccordionTab header={
            <div className="flex items-center gap-2">
              <FaSpotify className="text-[#1DB954] text-xl" />
              <span>Spotify Tracks</span>
            </div>
          }>
            <div className="space-y-2">
              {spotifyLinks.map((link) => (
                <Button
                  key={link.title}
                  onClick={() => window.open(link.url, '_blank')}
                  className="w-full p-button-outlined mb-2"
                >
                  <div className="flex items-center gap-3 py-2">
                    <FaSpotify className="text-xl" />
                    <span>{link.title}</span>
                  </div>
                </Button>
              ))}
            </div>
          </AccordionTab>

          <AccordionTab header={
            <div className="flex items-center gap-2">
              <FaSoundcloud className="text-[#FF5500] text-xl" />
              <span>SoundCloud Tracks</span>
            </div>
          }>
            <div className="space-y-2">
              {soundcloudLinks.map((link) => (
                <Button
                  key={link.title}
                  onClick={() => window.open(link.url, '_blank')}
                  className="w-full p-button-outlined mb-2"
                >
                  <div className="flex items-center gap-3 py-2">
                    <FaSoundcloud className="text-xl" />
                    <span>{link.title}</span>
                  </div>
                </Button>
              ))}
            </div>
          </AccordionTab>
        </Accordion>
      </motion.div>
    </div>
  );
} 