import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { getCommunityPosts, updateCommunityPosts } from '@/lib/db-service';

export async function GET() {
  const session = await getServerSession();
  
  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await getCommunityPosts();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching community posts:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession();
  
  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const posts = await request.json();
    
    if (!Array.isArray(posts)) {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 });
    }

    const updatedPosts = await updateCommunityPosts(posts);
    return NextResponse.json(updatedPosts);
  } catch (error) {
    console.error('Error saving community posts:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 