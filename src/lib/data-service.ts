import fs from 'fs/promises';
import path from 'path';
import { BaseContent } from '@/types/content';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');

export async function readData<T extends BaseContent>(filename: string): Promise<T[]> {
  const filePath = path.join(DATA_DIR, filename);
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return [];
  }
}

export async function writeData<T extends BaseContent>(filename: string, data: T[]): Promise<boolean> {
  const filePath = path.join(DATA_DIR, filename);
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    return false;
  }
}

// Helper function to get the appropriate filename for a content type
export function getFilename(contentType: string): string {
  switch (contentType) {
    case 'spotify':
      return 'spotify-links.json';
    case 'soundcloud':
      return 'soundcloud-links.json';
    case 'youtube':
      return 'youtube-links.json';
    case 'events':
      return 'events.json';
    case 'social':
      return 'social-links.json';
    case 'community':
      return 'community-posts.json';
    default:
      throw new Error(`Unknown content type: ${contentType}`);
  }
} 