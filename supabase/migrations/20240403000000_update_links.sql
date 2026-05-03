-- Drop existing tables that will be replaced
drop table if exists public.youtube_links;
drop table if exists public.spotify_links;
drop table if exists public.soundcloud_links;

-- Drop existing policy if exists
drop policy if exists "Enable read access for all users" on public.links;

-- Drop and recreate the table
drop table if exists public.links;

-- Create new links table
create table if not exists public.links (
    id uuid default uuid_generate_v4() primary key,
    title text not null,
    description text,
    url text not null,
    image_url text,
    icon text,
    type text not null, -- 'main', 'spotify', 'youtube', 'soundcloud', etc.
    category text not null default 'main', -- For grouping in accordions
    platform text, -- Optional platform-specific info
    sort_order integer not null default 0,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.links enable row level security;

-- Create policy for public read access
create policy "Enable read access for all users" on public.links
    for select using (true);

-- Insert some sample data
insert into public.links (title, description, url, icon, type, category, platform, sort_order)
values 
    -- Main profile links
    ('Spotify Profile', 'Follow me on Spotify', 'https://open.spotify.com/artist/mumbobeatz', 'pi pi-music', 'main', 'main', 'SPOTIFY', 0),
    ('SoundCloud Profile', 'Follow my DJ mixes and more', 'https://soundcloud.com/mumbobeatz', 'pi pi-cloud', 'main', 'main', 'SOUNDCLOUD', 1),
    ('YouTube Channel', 'Behind the scenes and music videos', 'https://youtube.com/@mumbobeatz', 'pi pi-youtube', 'main', 'main', 'YOUTUBE', 2),
    ('Instagram', 'Daily updates and stories', 'https://instagram.com/mumbobeatz', 'pi pi-instagram', 'main', 'main', 'INSTAGRAM', 3),

    -- Platform-specific content
    ('Latest Album', 'Check out my latest album release', 'https://open.spotify.com/album/example1', 'pi pi-music', 'release', 'spotify', 'SPOTIFY', 1),
    ('Featured Track', 'My newest single', 'https://open.spotify.com/track/example2', 'pi pi-music', 'track', 'spotify', 'SPOTIFY', 2),
    ('Latest Mix', 'New DJ mix on SoundCloud', 'https://soundcloud.com/mumbobeatz/latest-mix', 'pi pi-cloud', 'mix', 'soundcloud', 'SOUNDCLOUD', 1),
    ('Studio Session', 'Behind the scenes of my latest track', 'https://youtube.com/watch?v=example1', 'pi pi-youtube', 'video', 'youtube', 'YOUTUBE', 1);

-- Drop old tables if they exist and are no longer needed
drop table if exists public.social_links;
drop table if exists public.music_links; 