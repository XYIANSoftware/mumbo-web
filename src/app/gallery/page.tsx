'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Dialog } from 'primereact/dialog';

interface GalleryItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  description?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Live at Bloom 2024',
    type: 'image',
    src: '/images/mumbo-assets/2024_0906-Bloom_047.jpeg',
    thumbnail: '/images/mumbo-assets/2024_0906-Bloom_047.jpeg',
    description: 'Headlining performance at Bloom Nightclub'
  },
  {
    id: '2',
    title: 'Behind the Decks',
    type: 'image',
    src: '/images/mumbo-assets/M_B04850-1-NR.jpg',
    thumbnail: '/images/mumbo-assets/M_B04850-1-NR.jpg',
    description: 'In the mix at a recent show'
  },
  {
    id: '3',
    title: 'Studio Session',
    type: 'image',
    src: '/images/mumbo-assets/M_B04851-1-NR.jpg',
    thumbnail: '/images/mumbo-assets/M_B04851-1-NR.jpg',
    description: 'Creating new beats in the studio'
  },
  {
    id: '4',
    title: 'Festival Vibes',
    type: 'image',
    src: '/images/mumbo-assets/M_B04855-1-NR.jpg',
    thumbnail: '/images/mumbo-assets/M_B04855-1-NR.jpg',
    description: 'Bringing the energy to the crowd'
  },
  {
    id: '5',
    title: 'Bloom Performance',
    type: 'video',
    src: '/images/mumbo-assets/2024_0906-BloomFootage_00244264_V1-0007.mov',
    thumbnail: '/images/mumbo-assets/2024_0906-Bloom_046.jpeg',
    description: 'Live performance highlights from Bloom'
  },
  {
    id: '6',
    title: 'DJ Set Highlights',
    type: 'video',
    src: '/images/mumbo-assets/2024_0906-BloomFootage_00230164_V1-0003.mov',
    thumbnail: '/images/mumbo-assets/2024_0906-Bloom_049.jpeg',
    description: 'Dropping the latest tracks at Bloom'
  },
  {
    id: '7',
    title: 'Crowd Moments',
    type: 'image',
    src: '/images/mumbo-assets/IMG_7891.JPG',
    thumbnail: '/images/mumbo-assets/IMG_7891.JPG',
    description: 'The crowd going wild during the set'
  },
  {
    id: '8',
    title: 'Stage Presence',
    type: 'image',
    src: '/images/mumbo-assets/IMG_7892.JPG',
    thumbnail: '/images/mumbo-assets/IMG_7892.JPG',
    description: 'Commanding the stage with energy'
  }
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Gallery"
        subtitle="Moments captured from performances and studio sessions"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className="cursor-pointer h-full"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <i className="pi pi-play text-4xl text-white"></i>
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              {item.description && (
                <p className="text-gray-400 text-sm">{item.description}</p>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog
        visible={!!selectedItem}
        onHide={() => setSelectedItem(null)}
        className="w-full max-w-4xl"
        header={selectedItem?.title}
        dismissableMask
      >
        {selectedItem?.type === 'image' ? (
          <img
            src={selectedItem.src}
            alt={selectedItem.title}
            className="w-full h-auto rounded-lg"
          />
        ) : (
          <video
            src={selectedItem?.src}
            controls
            className="w-full h-auto rounded-lg"
          />
        )}
        {selectedItem?.description && (
          <p className="mt-4 text-gray-400">{selectedItem.description}</p>
        )}
      </Dialog>
    </div>
  );
} 