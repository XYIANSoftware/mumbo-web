import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { getSoundCloudLinks } from '@/lib/data-service';

export async function GET() {
  const session = await getServerSession();
  
  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await getSoundCloudLinks();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching SoundCloud links:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession();
  
  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // For now, return a message that updates are not supported
  return NextResponse.json({ 
    error: 'Updates are not currently supported. Data is read-only from local files.' 
  }, { status: 501 });
} 