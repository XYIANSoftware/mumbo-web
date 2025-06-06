import { motion } from 'framer-motion';
import { Button } from 'primereact/button';
import { Card } from '@/components/ui/Card';
import { Event } from '@/types/content';

interface EventCardProps {
  event: Event;
  index?: number;
}

export function EventCard({ event, index = 0 }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
              <img
                src={event.imageUrl}
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
            {event.ticketUrl && (
              <Button
                label="Get Tickets"
                icon="pi pi-ticket"
                onClick={() => window.open(event.ticketUrl, '_blank')}
                className="p-button-rounded"
              />
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
} 