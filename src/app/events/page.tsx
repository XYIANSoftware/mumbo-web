'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { Card } from '@/components/ui/Card';
import { PageHeader } from '@/components/ui/PageHeader';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  eventName: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Mumbo Jumbo Ep. 6: Bloom Debut',
    date: 'Sunday, April 14, 2024',
    time: '22:00',
    location: 'Bloom Nightclub, Downtown',
    description: 'Experience the latest episode of Mumbo Jumbo live! Featuring new tracks and special guests.',
    imageUrl: '/images/mumbo-assets/2024_0906-Bloom_047.jpeg',
    eventName: 'mumbo-jumbo-ep-6-bloom-debut'
  },
  {
    id: '2',
    title: 'Project Seismic Launch Party',
    date: 'Tuesday, April 30, 2024',
    time: '21:00',
    location: 'Underground Bass Club',
    description: 'Join us for the official launch of Project Seismic with special guest performances.',
    imageUrl: '/images/mumbo-assets/M_B04855-1-NR.jpg',
    eventName: 'project-seismic-launch-party'
  }
];

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Events"
        subtitle="Catch DJ Mumbo live in action"
      />

      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Large Image Section (Left) */}
                <div className="w-full lg:w-2/3">
                  <div className="relative aspect-[4/3] lg:aspect-[3/2] rounded-lg overflow-hidden">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Event Details Section (Right) */}
                <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
                    
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-center gap-3">
                        <i className="pi pi-calendar text-primary-light"></i>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <i className="pi pi-clock text-primary-light"></i>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <i className="pi pi-map-marker text-primary-light"></i>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed">
                    {event.description}
                  </p>

                  <Link href={`/events/${event.eventName}`}>
                    <Button
                      label="Details"
                      icon="pi pi-info-circle"
                      className="p-button-rounded w-fit"
                    />
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 