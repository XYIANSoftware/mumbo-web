import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { getSpotifyLinks, updateSpotifyLinks } from '@/lib/db-service';

export async function GET() {
  const session = await getServerSession();
  
  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await getSpotifyLinks();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Spotify links:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession();
  
  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const links = await request.json();
    
    // Validate the data
    if (!Array.isArray(links)) {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 });
    }

    // Update in database
    const updatedLinks = await updateSpotifyLinks(links);
    return NextResponse.json(updatedLinks);
  } catch (error) {
    console.error('Error saving Spotify links:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 