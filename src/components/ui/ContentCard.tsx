import { Button } from 'primereact/button';
import { FaSpotify, FaSoundcloud, FaYoutube } from 'react-icons/fa';
import { MusicLink } from '@/types/content';
import { motion } from 'framer-motion';

interface ContentCardProps {
  link: MusicLink;
  index?: number;
}

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform.toUpperCase()) {
    case 'SPOTIFY':
      return <FaSpotify className="text-[#1DB954] text-xl" />;
    case 'SOUNDCLOUD':
      return <FaSoundcloud className="text-[#FF5500] text-xl" />;
    case 'YOUTUBE':
      return <FaYoutube className="text-[#FF0000] text-xl" />;
    default:
      return <i className="pi pi-link text-xl" />;
  }
};

export function ContentCard({ link, index = 0 }: ContentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Button
        onClick={() => window.open(link.url, '_blank')}
        className="w-full p-button-outlined mb-2"
      >
        <div className="flex items-center gap-3 py-2">
          <PlatformIcon platform={link.platform} />
          <div className="flex flex-col items-start">
            <span className="font-semibold">{link.title}</span>
            {link.description && (
              <span className="text-sm text-gray-400">{link.description}</span>
            )}
          </div>
        </div>
      </Button>
    </motion.div>
  );
} 