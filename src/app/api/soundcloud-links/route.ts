import { NextResponse } from 'next/server';
import { getSoundCloudLinks } from '@/lib/data-service';

export async function GET() {
  try {
    const links = await getSoundCloudLinks();
    return NextResponse.json(links);
  } catch (error) {
    console.error('Error fetching SoundCloud links:', error);
    return NextResponse.json(
      { error: 'Failed to fetch SoundCloud links' },
      { status: 500 }
    );
  }
} 