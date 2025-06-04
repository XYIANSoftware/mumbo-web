'use client';

import { useEffect, useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { EventCard } from '@/components/ui/EventCard';
import { Event } from '@/types/content';
import { getEvents } from '@/lib/db-service';

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const eventData = await getEvents();
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Events"
        subtitle="Catch DJ Mumbo live in action"
      />

      <div className="space-y-8">
        {loading ? (
          // Loading skeleton for events
          Array(2).fill(0).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                  <div className="bg-gray-700 rounded-lg aspect-video md:aspect-square" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="h-8 bg-gray-700 rounded w-3/4" />
                  <div className="flex flex-wrap gap-4">
                    {Array(3).fill(0).map((_, i) => (
                      <div key={i} className="h-6 bg-gray-700 rounded w-32" />
                    ))}
                  </div>
                  <div className="h-20 bg-gray-700 rounded" />
                  <div className="h-10 bg-gray-700 rounded w-32" />
                </div>
              </div>
            </div>
          ))
        ) : (
          events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))
        )}
      </div>
    </div>
  );
} 