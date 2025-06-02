'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { PageHeader } from '@/components/ui/PageHeader';
import { useAnimation } from '@/hooks/useAnimation';
import { Event } from '@/types';

// Temporary mock data - replace with actual data fetching
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Summer Bass Festival',
    date: '2024-07-15',
    time: '20:00',
    location: 'Beachfront Arena, Miami',
    description: 'Get ready for the biggest EDM event of the summer!',
    imageUrl: '/images/events/summer-bass.jpg',
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
    imageUrl: '/images/events/neon-nights.jpg',
    ticketUrl: 'https://tickets.com/neon-nights',
    price: '$30',
  },
  // Add more mock events...
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
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Upcoming Events"
        subtitle="Join DJ Mumbo at these upcoming shows and experience the energy!"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        {...animation}
      >
        {mockEvents.map((event) => (
          <Card key={event.id} hover>
            <div className="aspect-video bg-background-secondary rounded-lg mb-4">
              {/* Replace with actual image component when available */}
              <div className="w-full h-full bg-gradient-to-br from-primary-dark to-accent-dark rounded-lg" />
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
  );
} 