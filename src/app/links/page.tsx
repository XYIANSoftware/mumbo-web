'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Image from 'next/image';
import { FaSpotify, FaSoundcloud, FaYoutube } from 'react-icons/fa';
import { ContentCard } from '@/components/ui/ContentCard';
import { MusicLink, SocialLink } from '@/types/content';
import { Button } from 'primereact/button';
import { getSpotifyLinks, getSoundCloudLinks, getYouTubeLinks, getSocialLinks } from '@/lib/data-service';

const AnimatedShape = ({ className }: { className?: string }) => (
  <motion.div
    className={`absolute rounded-full bg-gradient-to-r from-primary-light/10 to-secondary-light/10 ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      opacity: [0.3, 0.2, 0.3]
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

export default function LinksPage() {
  const [spotifyLinks, setSpotifyLinks] = useState<MusicLink[]>([]);
  const [soundCloudLinks, setSoundCloudLinks] = useState<MusicLink[]>([]);
  const [youtubeLinks, setYoutubeLinks] = useState<MusicLink[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [spotify, soundcloud, youtube, social] = await Promise.all([
          getSpotifyLinks(),
          getSoundCloudLinks(),
          getYouTubeLinks(),
          getSocialLinks()
        ]);

        console.log('Spotify links:', spotify);
        console.log('SoundCloud links:', soundcloud);
        console.log('YouTube links:', youtube);
        console.log('Social links:', social);

        setSpotifyLinks(spotify);
        setSoundCloudLinks(soundcloud);
        setYoutubeLinks(youtube);
        setSocialLinks(social);
      } catch (error) {
        console.error('Error fetching links:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 max-w-2xl mx-auto relative overflow-hidden">
      {/* Animated Background Shapes */}
      <AnimatedShape className="w-[400px] h-[400px] -bottom-20 -left-20" />
      <AnimatedShape className="w-[300px] h-[300px] -top-20 -right-20" />
      <AnimatedShape className="w-[200px] h-[200px] bottom-40 right-20" />

      {/* Profile Section */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image
            src="/images/mumbo-assets/Mumbo_Logo.png"
            alt="Mumbo Logo"
            width={128}
            height={128}
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-3xl font-bold font-display mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light">
            @mumbobeatz
          </span>
        </h1>
        <p className="text-gray-300">Do the things you love</p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {loading ? (
          // Loading skeleton for social links
          Array(6).fill(0).map((_, index) => (
            <div key={index} className="animate-pulse bg-gray-700 rounded-lg h-12" />
          ))
        ) : (
          socialLinks.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Button
                onClick={() => window.open(link.url, '_blank')}
                className="w-full p-button-outlined"
              >
                <div className="flex items-center justify-center gap-2">
                  <i className={`pi pi-${link.platform.toLowerCase()}`}></i>
                  <span>{link.title}</span>
                </div>
              </Button>
            </motion.div>
          ))
        )}
      </motion.div>

      {/* Music Links Accordion */}
      <motion.div
        className="w-full relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
                 <Accordion activeIndex={[0]}>
           {loading ? (
             // Loading skeleton for music links
             Array(3).fill(0).map((_, index) => (
               <div key={index} className="animate-pulse bg-gray-700 rounded-lg h-16 mb-2" />
             ))
           ) : (
             <>
               <AccordionTab header={
                 <div className="flex items-center gap-2">
                   <FaSpotify className="text-[#1DB954] text-xl" />
                   <span>Spotify Tracks ({spotifyLinks.length})</span>
                 </div>
               }>
                 <div className="space-y-2">
                   {spotifyLinks.length > 0 ? (
                     spotifyLinks.map((link, index) => (
                       <ContentCard key={link.id} link={link} index={index} />
                     ))
                   ) : (
                     <p className="text-gray-400 text-center py-4">No Spotify tracks available</p>
                   )}
                 </div>
               </AccordionTab>

               <AccordionTab header={
                 <div className="flex items-center gap-2">
                   <FaSoundcloud className="text-[#FF5500] text-xl" />
                   <span>SoundCloud Tracks ({soundCloudLinks.length})</span>
                 </div>
               }>
                 <div className="space-y-2">
                   {soundCloudLinks.length > 0 ? (
                     soundCloudLinks.map((link, index) => (
                       <ContentCard key={link.id} link={link} index={index} />
                     ))
                   ) : (
                     <p className="text-gray-400 text-center py-4">No SoundCloud tracks available</p>
                   )}
                 </div>
               </AccordionTab>

               <AccordionTab header={
                 <div className="flex items-center gap-2">
                   <FaYoutube className="text-[#FF0000] text-xl" />
                   <span>YouTube Videos ({youtubeLinks.length})</span>
                 </div>
               }>
                 <div className="space-y-2">
                   {youtubeLinks.length > 0 ? (
                     youtubeLinks.map((link, index) => (
                       <ContentCard key={link.id} link={link} index={index} />
                     ))
                   ) : (
                     <p className="text-gray-400 text-center py-4">No YouTube videos available</p>
                   )}
                 </div>
               </AccordionTab>
             </>
           )}
         </Accordion>
      </motion.div>
    </div>
  );
} 