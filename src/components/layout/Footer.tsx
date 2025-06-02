'use client';

import Link from 'next/link';

const socialLinks = [
  { label: 'SoundCloud', icon: 'pi pi-cloud', url: 'https://soundcloud.com' },
  { label: 'Instagram', icon: 'pi pi-instagram', url: 'https://instagram.com' },
  { label: 'YouTube', icon: 'pi pi-youtube', url: 'https://youtube.com' },
  { label: 'Twitter', icon: 'pi pi-twitter', url: 'https://twitter.com' },
];

const quickLinks = [
  { label: 'Events', path: '/events' },
  { label: 'Music', path: '/music' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-primary mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-2xl font-bold text-white mb-4">
              DJ MUMBO
            </Link>
            <p className="text-gray-400 text-center md:text-left">
              Bringing the fusion of EDM and playful vibes to your ears
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-gray-400 hover:text-primary-light transition-colors"
                >
                  {link.label}
                </Link>
              ))}
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
};

export default Footer; 