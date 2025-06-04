'use client';

import { useEffect, useState } from 'react';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { EditableList } from './EditableList';
import { MusicLink } from '@/types/content';

export function SpotifyLinksEditor() {
  const [items, setItems] = useState<MusicLink[]>([]);
  const [loading, setLoading] = useState(true);
  const toast = useRef<Toast>(null);

  const fields = [
    { field: 'title', header: 'Title', type: 'text' as const },
    { field: 'url', header: 'URL', type: 'text' as const },
    { field: 'type', header: 'Type', type: 'dropdown' as const, options: [
      { label: 'Track', value: 'TRACK' },
      { label: 'Album', value: 'ALBUM' },
      { label: 'Playlist', value: 'PLAYLIST' },
    ]},
    { field: 'description', header: 'Description', type: 'textarea' as const },
  ];

  const emptyItem = (): MusicLink => ({
    id: crypto.randomUUID(),
    title: '',
    url: '',
    platform: 'SPOTIFY',
    type: 'TRACK',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/admin/spotify-links');
      if (!response.ok) throw new Error('Failed to fetch Spotify links');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching Spotify links:', error);
      toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to fetch Spotify links',
        life: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (items: MusicLink[]) => {
    try {
      const response = await fetch('/api/admin/spotify-links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(items),
      });

      if (!response.ok) {
        throw new Error('Failed to save Spotify links');
      }

      const savedItems = await response.json();
      setItems(savedItems);
      
      toast.current?.show({
        severity: 'success',
        summary: 'Success',
        detail: 'Spotify links saved successfully',
        life: 3000,
      });
    } catch (error) {
      console.error('Error saving Spotify links:', error);
      toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to save Spotify links',
        life: 3000,
      });
      throw error;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-4">
        <i className="pi pi-spin pi-spinner text-4xl"></i>
      </div>
    );
  }

  return (
    <>
      <Toast ref={toast} />
      <EditableList<MusicLink>
        items={items}
        onSave={handleSave}
        fields={fields}
        emptyItem={emptyItem}
      />
    </>
  );
} 