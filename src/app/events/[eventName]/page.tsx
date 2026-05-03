'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { use } from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  ticketUrl?: string;
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
    ticketUrl: 'https://example.com/tickets',
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
    ticketUrl: 'https://example.com/project-seismic',
    eventName: 'project-seismic-launch-party'
  }
];

interface EventPageProps {
  params: Promise<{
    eventName: string;
  }>;
}

export default function EventPage({ params }: EventPageProps) {
  // Unwrap the params Promise using React.use()
  const { eventName } = use(params);
  
  // Find the event based on the eventName parameter
  const event = events.find(e => e.eventName === eventName);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <p className="text-gray-400 mb-8">The event you're looking for doesn't exist.</p>
          <Link href="/events">
            <Button label="Back to Events" icon="pi pi-arrow-left" className="p-button-rounded" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/events">
            <Button 
              label="Back to Events" 
              icon="pi pi-arrow-left" 
              className="p-button-text p-button-rounded"
            />
          </Link>
        </div>

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
                <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
                
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

              <div className="space-y-4">
                <p className="text-gray-400 leading-relaxed text-lg">
                  {event.description}
                </p>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Event Details</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Doors open 30 minutes before show time</li>
                    <li>• 21+ event with valid ID required</li>
                    <li>• No outside food or beverages</li>
                    <li>• Photography allowed (no flash)</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                {event.ticketUrl && (
                  <Button
                    label="Get Tickets"
                    icon="pi pi-ticket"
                    onClick={() => window.open(event.ticketUrl, '_blank')}
                    className="p-button-rounded"
                  />
                )}
                <Button
                  label="Share Event"
                  icon="pi pi-share-alt"
                  className="p-button-outlined p-button-rounded"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: event.title,
                        text: event.description,
                        url: window.location.href
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
} 