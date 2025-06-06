import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { getSocialLinks, updateSocialLinks } from '@/lib/db-service';

export async function GET() {
  const session = await getServerSession();
  
  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await getSocialLinks();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching social links:', error);
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
    
    if (!Array.isArray(links)) {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 });
    }

    const updatedLinks = await updateSocialLinks(links);
    return NextResponse.json(updatedLinks);
  } catch (error) {
    console.error('Error saving social links:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 