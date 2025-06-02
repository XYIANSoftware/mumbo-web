import { TargetAndTransition, VariantLabels } from 'framer-motion';

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
  ticketUrl?: string;
  price?: string;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  coverArt?: string;
  streamUrl?: string;
  releaseDate: string;
  genre: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  type: 'image' | 'video' | 'gif';
  url: string;
  thumbnailUrl?: string;
  description?: string;
  date: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  socials: SocialLink[];
}

// Theme related types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

// Common component props
export interface CardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  hover?: boolean;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  className?: string;
  disabled?: boolean;
}

export interface AnimationProps {
  initial?: TargetAndTransition | VariantLabels;
  animate?: TargetAndTransition | VariantLabels;
  exit?: TargetAndTransition | VariantLabels;
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string | number[];
  };
} 