'use client';

import { motion } from 'framer-motion';
import { Button } from 'primereact/button';
import Image from 'next/image';

interface Link {
  title: string;
  url: string;
  icon: string;
  type: 'music' | 'social';
  platform?: string;
}

const links: Link[] = [
  {
    title: "Feelin' Pretty Suavé",
    url: "https://open.spotify.com/track/your-track-id",
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
  },
  {
    title: "Project Seismic",
    url: "https://open.spotify.com/track/your-track-id",
    icon: "pi pi-spotify",
    type: "music",
    platform: "SPOTIFY"
  },
  {
    title: "Eat the Bass (Mumbo flip)",
    url: "https://open.spotify.com/track/your-track-id",
    icon: "pi pi-spotify",
    type: "music",
    platform: "SPOTIFY"
  },
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
  },
  {
    title: "Mumbo Jumbo Ep. 6: Bloom Debut",
    url: "https://soundcloud.com/mumbobeatz",
    icon: "pi pi-cloud",
    type: "music",
    platform: "SOUNDCLOUD"
  },
  {
    title: "Mumbo Jumbo Ep. 5 Wonky Wubz",
    url: "https://soundcloud.com/mumbobeatz",
    icon: "pi pi-cloud",
    type: "music",
    platform: "SOUNDCLOUD"
  },
  {
    title: "Mumbo Jumbo Ep. 4 Boots & Cat's Mix",
    url: "https://soundcloud.com/mumbobeatz",
    icon: "pi pi-cloud",
    type: "music",
    platform: "SOUNDCLOUD"
  },
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

export default function LinksPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 max-w-2xl mx-auto">
      {/* Profile Section */}
      <motion.div
        className="text-center mb-12"
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

      {/* Music Links */}
      <motion.div
        className="w-full space-y-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold mb-4">Latest Music</h2>
        {links.filter(link => link.type === 'music').map((link, index) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Button
              onClick={() => window.open(link.url, '_blank')}
              className="w-full p-button-outlined mb-2 relative overflow-hidden group"
            >
              <div className="flex items-center gap-3 py-3">
                <i className={`${link.icon} text-xl`}></i>
                <div className="flex-1 text-left">
                  <div className="font-medium">{link.title}</div>
                  {link.platform && (
                    <div className="text-sm text-gray-400">{link.platform}</div>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light/10 to-secondary-light/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {links.filter(link => link.type === 'social').map((link, index) => (
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
    </div>
  );
} 