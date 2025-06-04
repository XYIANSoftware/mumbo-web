import { NextResponse } from 'next/server';
import { getYouTubeLinks } from '@/lib/db-service';

export async function GET() {
  try {
    const links = await getYouTubeLinks();
    return NextResponse.json(links);
  } catch (error) {
    console.error('Error fetching YouTube links:', error);
    return NextResponse.json(
      { error: 'Failed to fetch YouTube links' },
      { status: 500 }
    );
  }
} 