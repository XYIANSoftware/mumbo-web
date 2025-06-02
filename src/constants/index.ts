import { SocialLink } from '@/types';

export const SITE_CONFIG = {
  name: 'DJ Mumbo',
  description: 'Experience the fusion of EDM and playful vibes',
  domain: 'djmumbo.com', // Replace with actual domain
  twitterHandle: '@djmumbo', // Replace with actual handle
};

export const NAVIGATION = {
  main: [
    { label: 'Home', path: '/' },
    { label: 'Events', path: '/events' },
    { label: 'Music', path: '/music' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'SoundCloud',
    url: 'https://soundcloud.com',
    icon: 'pi pi-cloud',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com',
    icon: 'pi pi-instagram',
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com',
    icon: 'pi pi-youtube',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com',
    icon: 'pi pi-twitter',
  },
];

export const CONTACT_INFO = {
  email: 'bookings@djmumbo.com', // Replace with actual email
  phone: '+1 (555) 123-4567', // Replace with actual phone
  location: 'Los Angeles, CA',
  socials: SOCIAL_LINKS,
};

export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.5,
    slow: 0.8,
  },
  ease: {
    default: [0.4, 0, 0.2, 1],
    in: [0.4, 0, 1, 1],
    out: [0, 0, 0.2, 1],
    inOut: [0.4, 0, 0.2, 1],
  },
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}; 