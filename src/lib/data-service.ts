import { MusicLink, Event, SocialLink, CommunityPost } from '@/types/content';

// Import local JSON data
import spotifyLinksData from '@/data/spotify-links.json';
import soundcloudLinksData from '@/data/soundcloud-links.json';
import youtubeLinksData from '@/data/youtube-links.json';
import eventsData from '@/data/events.json';
import socialLinksData from '@/data/social-links.json';
import communityPostsData from '@/data/community-posts.json';

// Spotify Links
export async function getSpotifyLinks(): Promise<MusicLink[]> {
  return spotifyLinksData as MusicLink[];
}

// SoundCloud Links
export async function getSoundCloudLinks(): Promise<MusicLink[]> {
  return soundcloudLinksData as MusicLink[];
}

// YouTube Links
export async function getYouTubeLinks(): Promise<MusicLink[]> {
  return youtubeLinksData as MusicLink[];
}

// Events
export async function getEvents(): Promise<Event[]> {
  return eventsData as Event[];
}

// Social Links
export async function getSocialLinks(): Promise<SocialLink[]> {
  return socialLinksData as SocialLink[];
}

// Community Posts
export async function getCommunityPosts(): Promise<CommunityPost[]> {
  return communityPostsData as CommunityPost[];
} 