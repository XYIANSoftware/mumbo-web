'use client';

import { motion } from 'framer-motion';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';

const socialLinks = [
  {
    platform: 'Spotify',
    url: 'https://open.spotify.com/artist/mumbobeatz',
    icon: 'pi pi-spotify'
  },
  {
    platform: 'SoundCloud',
    url: 'https://soundcloud.com/mumbobeatz',
    icon: 'pi pi-cloud'
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com/@mumbobeatz',
    icon: 'pi pi-youtube'
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/mumbobeatz',
    icon: 'pi pi-instagram'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/mumbobeatz',
    icon: 'pi pi-twitter'
  },
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61575874555012',
    icon: 'pi pi-facebook'
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="About Mumbo"
        subtitle="The story behind the beats"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full">
            <div className="relative aspect-square rounded-lg overflow-hidden mb-6">
              <img
                src="/images/mumbo-assets/M_B04850-1-NR.jpg"
                alt="Mumbo"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-center mb-6">
              <img
                src="/images/mumbo-assets/Mumbo_Logo.png"
                alt="Mumbo Logo"
                className="h-24 w-auto"
              />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-light transition-colors"
                  aria-label={link.platform}
                >
                  <i className={`${link.icon} text-3xl`}></i>
                </a>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-6">The Journey</h2>
              <p className="mb-4">
                Mumbo is an innovative electronic music producer and artist, known for blending EDM with playful, cartoon-inspired elements. With releases like "Feelin' Pretty Suavé" and "Project Seismic", Mumbo has established a unique sound that bridges the gap between energetic dance music and nostalgic vibes.
              </p>
              <p className="mb-4">
                Starting with the "Mumbo Jumbo" series, which has now reached its 6th episode, Mumbo has consistently pushed the boundaries of electronic music. Each release showcases a perfect fusion of hard-hitting beats and whimsical elements that set him apart in the EDM scene.
              </p>
              <p className="mb-4">
                Recent projects include the successful "Mumbo's Secret Stuff Vol. 1" and notable remixes like the "Satellite (Mumbo Flip)" and "Eat the Bass (Mumbo flip)", demonstrating versatility and innovation in production.
              </p>
              <h3 className="text-xl font-semibold mb-4 mt-8">Latest Releases</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Feelin' Pretty Suavé</li>
                <li>Project Seismic</li>
                <li>Mumbo's Secret Stuff Vol. 1</li>
                <li>Satellite (Mumbo Flip)</li>
                <li>Eat the Bass (Mumbo flip)</li>
              </ul>
              <p>
                Catch Mumbo live at various venues and festivals, where the energy of his productions comes to life in dynamic, unforgettable performances.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 