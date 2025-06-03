'use client';

import { motion } from 'framer-motion';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';

interface Track {
  title: string;
  type: 'track' | 'mix';
  image: string;
  link: string;
}

const tracks: Track[] = [
  {
    title: "Feelin' Pretty Suavé",
    type: 'track',
    image: '/images/mumbo-assets/M_B04850-1-NR.jpg',
    link: 'https://open.spotify.com/track/your-track-id'
  },
  {
    title: 'Satellite (Mumbo Flip)',
    type: 'track',
    image: '/images/mumbo-assets/M_B04851-1-NR.jpg',
    link: 'https://open.spotify.com/track/your-track-id'
  },
  {
    title: 'Project Seismic',
    type: 'track',
    image: '/images/mumbo-assets/M_B04855-1-NR.jpg',
    link: 'https://open.spotify.com/track/your-track-id'
  },
  {
    title: "Eat the Bass (Mumbo flip)",
    type: 'track',
    image: '/images/mumbo-assets/2024_0906-Bloom_047.jpeg',
    link: 'https://open.spotify.com/track/your-track-id'
  },
  {
    title: "Mumbo's Secret Stuff Vol. 1",
    type: 'mix',
    image: '/images/mumbo-assets/2024_0906-Bloom_049.jpeg',
    link: 'https://soundcloud.com/mumbobeatz'
  },
  {
    title: 'Emorfik 1/25: Mumbo Live Set!',
    type: 'mix',
    image: '/images/mumbo-assets/IMG_7892.JPG',
    link: 'https://soundcloud.com/mumbobeatz'
  }
];

export default function MusicPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Music"
        subtitle="Experience the fusion of EDM and playful vibes"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, index) => (
          <motion.div
            key={track.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className="h-full cursor-pointer"
              onClick={() => window.open(track.link, '_blank')}
            >
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src={track.image}
                  alt={track.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
              <span className="inline-block px-3 py-1 rounded-full bg-primary-light/20 text-primary-light text-sm">
                {track.type === 'track' ? 'Track' : 'Mix'}
              </span>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 