'use client';

import Link from 'next/link';

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
    url: 'https://youtube.com/djmumbo',
    icon: 'pi pi-youtube'
  },
  {
    label: 'SoundCloud',
    url: 'https://soundcloud.com/djmumbo',
    icon: 'pi pi-cloud'
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
              <Link href="/contact" className="text-gray-400 hover:text-primary-light transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-light transition-colors"
                  aria-label={link.label}
                >
                  <i className={`${link.icon} text-2xl`}></i>
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