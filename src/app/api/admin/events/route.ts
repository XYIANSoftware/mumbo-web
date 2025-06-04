import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { getEvents, updateEvents } from '@/lib/db-service';

export async function GET() {
  const session = await getServerSession();
  
  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await getEvents();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession();
  
  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const events = await request.json();
    
    if (!Array.isArray(events)) {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 });
    }

    const updatedEvents = await updateEvents(events);
    return NextResponse.json(updatedEvents);
  } catch (error) {
    console.error('Error saving events:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 