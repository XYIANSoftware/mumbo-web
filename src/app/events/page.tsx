'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { PageHeader } from '@/components/ui/PageHeader';
import { useAnimation } from '@/hooks/useAnimation';
import { Event } from '@/types';
import Image from 'next/image';

// Default image to use if event image is not available
const DEFAULT_EVENT_IMAGE = '/images/mumbo-bg-2.png';

// Temporary mock data - replace with actual data fetching
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Summer Bass Festival',
    date: '2024-07-15',
    time: '20:00',
    location: 'Beachfront Arena, Miami',
    description: 'Get ready for the biggest EDM event of the summer!',
    imageUrl: '/images/mumbo-bg-1.png',
    ticketUrl: 'https://tickets.com/summer-bass',
    price: '$50',
  },
  {
    id: '2',
    title: 'Neon Nights',
    date: '2024-08-01',
    time: '22:00',
    location: 'Club Nova, Los Angeles',
    description: 'A night of electronic beats and neon lights.',
    imageUrl: '/images/mumbo-bg-2.png',
    ticketUrl: 'https://tickets.com/neon-nights',
    price: '$30',
  },
  {
    id: '3',
    title: 'Cartoon Beats Party',
    date: '2024-08-15',
    time: '21:00',
    location: 'Animation Center, New York',
    description: 'A unique fusion of EDM and nostalgic cartoon vibes.',
    imageUrl: '/images/mumbo-icon-2.png',
    ticketUrl: 'https://tickets.com/cartoon-beats',
    price: '$40',
  },
];

export default function EventsPage() {
  const animation = useAnimation({ type: 'slideUp' });

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      {/* Header Background */}
      <div className="relative h-[30vh] overflow-hidden">
        <Image
          src="/images/mumbo-bg-1.png"
          alt="Events background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-purple-900/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <PageHeader
            title="Upcoming Events"
            subtitle="Join DJ Mumbo at these upcoming shows and experience the energy!"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          {...animation}
        >
          {mockEvents.map((event) => (
            <Card key={event.id} hover>
              <div className="aspect-video relative rounded-lg mb-4 overflow-hidden">
                <Image
                  src={event.imageUrl || DEFAULT_EVENT_IMAGE}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 to-transparent" />
              </div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-text-secondary mb-2">{formatDate(event.date)}</p>
              <p className="text-text-secondary mb-2">{event.time}</p>
              <p className="text-text-secondary mb-4">{event.location}</p>
              <p className="mb-4">{event.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-primary-light font-semibold">{event.price}</span>
                <a
                  href={event.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-dark text-white px-4 py-2 rounded-full transition-colors"
                >
                  Get Tickets
                  <i className="pi pi-ticket" />
                </a>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </>
  );
} 