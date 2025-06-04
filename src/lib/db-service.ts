import { supabase } from './supabase';
import { MusicLink, Event, SocialLink, CommunityPost } from '@/types/content';

interface BaseRecord {
  id: string;
  created_at?: string;
  updated_at?: string;
  createdAt?: string;
  updatedAt?: string;
  image_url?: string;
  imageUrl?: string;
  ticket_url?: string;
  ticketUrl?: string;
}

// Validate database connection
async function validateConnection() {
  try {
    const { error } = await supabase.from('spotify_links').select('count');
    if (error) throw error;
    console.log('Database connection successful');
    return true;
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Failed to connect to database. Please check your credentials.');
  }
}

// Generic function to fetch data from a table
async function fetchData<T extends BaseRecord>(table: string): Promise<T[]> {
  await validateConnection();
  
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error(`Error fetching from ${table}:`, error);
    throw error;
  }

  // Convert snake_case to camelCase for JavaScript
  const formattedData = data?.map(item => {
    const {
      created_at,
      updated_at,
      image_url,
      ticket_url,
      ...rest
    } = item;
    
    return {
      ...rest,
      createdAt: created_at,
      updatedAt: updated_at,
      imageUrl: image_url,
      ticketUrl: ticket_url,
    };
  }) as T[];

  return formattedData || [];
}

// Generic function to update data in a table
async function updateData<T extends BaseRecord>(table: string, items: T[]): Promise<T[]> {
  // First, delete all existing records
  const { error: deleteError } = await supabase
    .from(table)
    .delete()
    .neq('id', '0'); // Delete all records

  if (deleteError) {
    console.error(`Error deleting from ${table}:`, deleteError);
    throw deleteError;
  }

  // Convert camelCase to snake_case for PostgreSQL
  const formattedItems = items.map(item => {
    const {
      createdAt,
      updatedAt,
      imageUrl,
      ticketUrl,
      ...rest
    } = item;
    
    return {
      ...rest,
      created_at: createdAt,
      updated_at: new Date().toISOString(),
      image_url: imageUrl,
      ticket_url: ticketUrl,
    };
  });

  // Then insert the new records
  const { data, error: insertError } = await supabase
    .from(table)
    .insert(formattedItems)
    .select();

  if (insertError) {
    console.error(`Error inserting into ${table}:`, insertError);
    throw insertError;
  }

  // Convert back to camelCase for JavaScript
  const formattedData = data?.map(item => ({
    ...item,
    createdAt: item.created_at,
    updatedAt: item.updated_at,
    imageUrl: item.image_url,
    ticketUrl: item.ticket_url,
  })) as T[];

  return formattedData || [];
}

// Spotify Links
export async function getSpotifyLinks(): Promise<MusicLink[]> {
  return fetchData<MusicLink>('spotify_links');
}

export async function updateSpotifyLinks(links: MusicLink[]): Promise<MusicLink[]> {
  const updatedLinks = links.map(link => ({
    ...link,
    platform: 'SPOTIFY' as const,
    updatedAt: new Date().toISOString()
  }));
  return updateData('spotify_links', updatedLinks);
}

// SoundCloud Links
export async function getSoundCloudLinks(): Promise<MusicLink[]> {
  return fetchData<MusicLink>('soundcloud_links');
}

export async function updateSoundCloudLinks(links: MusicLink[]): Promise<MusicLink[]> {
  const updatedLinks = links.map(link => ({
    ...link,
    platform: 'SOUNDCLOUD' as const,
    updatedAt: new Date().toISOString()
  }));
  return updateData('soundcloud_links', updatedLinks);
}

// YouTube Links
export async function getYouTubeLinks(): Promise<MusicLink[]> {
  return fetchData<MusicLink>('youtube_links');
}

export async function updateYouTubeLinks(links: MusicLink[]): Promise<MusicLink[]> {
  const updatedLinks = links.map(link => ({
    ...link,
    platform: 'YOUTUBE' as const,
    updatedAt: new Date().toISOString()
  }));
  return updateData('youtube_links', updatedLinks);
}

// Events
export async function getEvents(): Promise<Event[]> {
  return fetchData<Event>('events');
}

export async function updateEvents(events: Event[]): Promise<Event[]> {
  const updatedEvents = events.map(event => ({
    ...event,
    updatedAt: new Date().toISOString()
  }));
  return updateData('events', updatedEvents);
}

// Social Links
export async function getSocialLinks(): Promise<SocialLink[]> {
  return fetchData<SocialLink>('social_links');
}

export async function updateSocialLinks(links: SocialLink[]): Promise<SocialLink[]> {
  const updatedLinks = links.map(link => ({
    ...link,
    updatedAt: new Date().toISOString()
  }));
  return updateData('social_links', updatedLinks);
}

// Community Posts
export async function getCommunityPosts(): Promise<CommunityPost[]> {
  return fetchData<CommunityPost>('community_posts');
}

export async function updateCommunityPosts(posts: CommunityPost[]): Promise<CommunityPost[]> {
  const updatedPosts = posts.map(post => ({
    ...post,
    updatedAt: new Date().toISOString()
  }));
  return updateData('community_posts', updatedPosts);
} 