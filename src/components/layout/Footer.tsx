'use client';

import Link from 'next/link';
import { FaSpotify } from 'react-icons/fa';

const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://instagram.com/djmumbo',
    icon: 'pi pi-instagram'
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/djmumbo',
    icon: 'pi pi-twitter'
  },
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/@DJMumbo',
    icon: 'pi pi-youtube'
  },
  {
    label: 'SoundCloud',
    url: 'https://soundcloud.com/mumbobeatz',
    icon: 'pi pi-cloud'
  },
  {
    label: 'Spotify',
    url: 'https://open.spotify.com/artist/your-spotify-id',
    icon: 'custom-spotify'
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61575874555012',
    icon: 'pi pi-facebook'
  }
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <span className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light">
                DJ MUMBO
              </span>
            </Link>
            <p className="text-gray-400 text-center md:text-left">
              Experience the fusion of EDM and playful vibes
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/events" className="text-gray-400 hover:text-primary-light transition-colors">
                Events
              </Link>
              <Link href="/music" className="text-gray-400 hover:text-primary-light transition-colors">
                Music
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-primary-light transition-colors">
                About
              </Link>
              <a href="mailto:mumbobeatz@gmail.com" className="text-gray-400 hover:text-primary-light transition-colors">
                Book
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-light transition-colors"
                  aria-label={link.label}
                >
                  {link.icon === 'custom-spotify' ? (
                    <span className="inline-flex items-center justify-center w-8 h-8">
                      <FaSpotify className="text-4xl" />
                    </span>
                  ) : (
                    <i className={`${link.icon} text-2xl`}></i>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-background-paper text-center text-gray-400">
          <p>© {currentYear} DJ Mumbo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 