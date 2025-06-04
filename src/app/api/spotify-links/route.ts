import { NextResponse } from 'next/server';
import { getSpotifyLinks } from '@/lib/db-service';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Test Supabase connection first
    const { error: testError } = await supabase.from('spotify_links').select('count');
    if (testError) {
      console.error('Supabase connection test failed:', testError);
      throw new Error(`Supabase connection failed: ${testError.message}`);
    }

    console.log('Attempting to fetch Spotify links...');
    const data = await getSpotifyLinks();
    console.log('Successfully fetched data:', data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Detailed error in spotify-links GET:', error);
    // Log more details about the error
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    // Log Supabase connection details (without sensitive info)
    console.log('Supabase URL configured:', !!process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('Supabase Anon Key configured:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      }, 
      { status: 500 }
    );
  }
} 