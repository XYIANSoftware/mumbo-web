'use client';

import { motion } from 'framer-motion';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Button } from 'primereact/button';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  ticketLink?: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Mumbo Jumbo Ep. 6: Bloom Debut',
    date: '2024-04-15',
    time: '22:00',
    location: 'Bloom Nightclub, Downtown',
    description: 'Experience the latest episode of Mumbo Jumbo live! Featuring new tracks and special guests.',
    image: '/images/mumbo-assets/2024_0906-Bloom_047.jpeg',
    ticketLink: 'https://tickets.example.com/bloom-debut'
  },
  {
    id: '2',
    title: 'Project Seismic Launch Party',
    date: '2024-05-01',
    time: '21:00',
    location: 'Underground Bass Club',
    description: 'Join us for the official launch of Project Seismic with special guest performances.',
    image: '/images/mumbo-assets/M_B04855-1-NR.jpg',
    ticketLink: 'https://tickets.example.com/seismic-launch'
  }
];

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Events"
        subtitle="Catch DJ Mumbo live in action"
      />

      <div className="space-y-8">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-semibold">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-300">
                    <div className="flex items-center gap-2">
                      <i className="pi pi-calendar"></i>
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="pi pi-clock"></i>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="pi pi-map-marker"></i>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-400">{event.description}</p>
                  {event.ticketLink && (
                    <Button
                      label="Get Tickets"
                      icon="pi pi-ticket"
                      onClick={() => window.open(event.ticketLink, '_blank')}
                      className="p-button-rounded"
                    />
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 