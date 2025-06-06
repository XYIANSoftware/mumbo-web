import { NextResponse } from 'next/server';
import { getSocialLinks } from '@/lib/db-service';

export async function GET() {
  try {
    const links = await getSocialLinks();
    return NextResponse.json(links);
  } catch (error) {
    console.error('Error fetching social links:', error);
    return NextResponse.json(
      { error: 'Failed to fetch social links' },
      { status: 500 }
    );
  }
} 