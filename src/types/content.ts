export interface BaseContent {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface MusicLink extends BaseContent {
  url: string;
  platform: 'SPOTIFY' | 'SOUNDCLOUD' | 'YOUTUBE';
  type: 'TRACK' | 'ALBUM' | 'PLAYLIST';
  imageUrl?: string;
  description?: string;
}

export interface Event extends BaseContent {
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
  ticketUrl?: string;
  price?: string;
  status: 'UPCOMING' | 'PAST' | 'CANCELLED';
}

export interface SocialLink extends BaseContent {
  platform: 'INSTAGRAM' | 'TWITTER' | 'FACEBOOK' | 'TIKTOK' | 'YOUTUBE';
  url: string;
  icon: string;
  username: string;
}

export interface CommunityPost extends BaseContent {
  content: string;
  imageUrl?: string;
  type: 'UPDATE' | 'ANNOUNCEMENT' | 'RELEASE';
  link?: string;
} 