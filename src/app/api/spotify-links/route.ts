import { NextResponse } from 'next/server';
import { getSpotifyLinks } from '@/lib/data-service';

export async function GET() {
  try {
    const data = await getSpotifyLinks();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Spotify links:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Spotify links' },
      { status: 500 }
    );
  }
} 