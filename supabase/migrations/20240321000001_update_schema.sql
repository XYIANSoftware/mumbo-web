-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Create storage bucket for images if not exists
insert into storage.buckets (id, name, public)
select 'content-images', 'content-images', true
where not exists (
    select 1 from storage.buckets where id = 'content-images'
);

-- Alter events table if it exists
do $$
begin
    if exists (select 1 from information_schema.columns where table_name = 'events') then
        -- Add new columns if they don't exist
        if not exists (select 1 from information_schema.columns where table_name = 'events' and column_name = 'image_path') then
            alter table public.events add column image_path text;
        end if;
        if not exists (select 1 from information_schema.columns where table_name = 'events' and column_name = 'sort_order') then
            alter table public.events add column sort_order integer not null default 0;
        end if;
        if not exists (select 1 from information_schema.columns where table_name = 'events' and column_name = 'status') then
            alter table public.events add column status text not null default 'UPCOMING';
        end if;

        -- Update image_path from existing image_url
        update public.events
        set image_path = image_url
        where image_path is null and image_url is not null;
    else
        -- Create events table if it doesn't exist
        create table public.events (
            id uuid default uuid_generate_v4() primary key,
            title text not null,
            description text,
            date timestamp with time zone not null,
            location text,
            image_path text,
            image_url text,
            sort_order integer not null default 0,
            status text not null default 'UPCOMING',
            created_at timestamp with time zone default timezone('utc'::text, now()) not null,
            updated_at timestamp with time zone default timezone('utc'::text, now()) not null
        );
    end if;
end $$;

-- Create music_links table if not exists
create table if not exists public.music_links (
    id uuid default uuid_generate_v4() primary key,
    title text not null,
    url text not null,
    platform text not null,
    type text not null,
    image_path text,
    description text,
    sort_order integer not null default 0,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create gallery_items table if not exists
create table if not exists public.gallery_items (
    id uuid default uuid_generate_v4() primary key,
    title text not null,
    description text,
    image_path text not null,
    sort_order integer not null default 0,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create social_links table if not exists
create table if not exists public.social_links (
    id uuid default uuid_generate_v4() primary key,
    platform text not null,
    url text not null,
    icon text not null,
    username text not null,
    sort_order integer not null default 0,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.events enable row level security;
alter table public.music_links enable row level security;
alter table public.gallery_items enable row level security;
alter table public.social_links enable row level security;

-- Create policies for public read access
do $$
begin
    if not exists (
        select 1 from pg_policies where tablename = 'events' and policyname = 'Enable read access for all users'
    ) then
        create policy "Enable read access for all users" on public.events
            for select using (true);
    end if;

    if not exists (
        select 1 from pg_policies where tablename = 'music_links' and policyname = 'Enable read access for all users'
    ) then
        create policy "Enable read access for all users" on public.music_links
            for select using (true);
    end if;

    if not exists (
        select 1 from pg_policies where tablename = 'gallery_items' and policyname = 'Enable read access for all users'
    ) then
        create policy "Enable read access for all users" on public.gallery_items
            for select using (true);
    end if;

    if not exists (
        select 1 from pg_policies where tablename = 'social_links' and policyname = 'Enable read access for all users'
    ) then
        create policy "Enable read access for all users" on public.social_links
            for select using (true);
    end if;
end
$$; 