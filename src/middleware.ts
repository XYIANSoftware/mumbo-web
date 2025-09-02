import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// Authentication temporarily disabled
export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: []
}; 