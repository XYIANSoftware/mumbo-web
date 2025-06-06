'use client';

import { useEffect, useState } from 'react';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { EditableList } from './EditableList';
import { CommunityPost } from '@/types/content';

export function CommunityEditor() {
  const [items, setItems] = useState<CommunityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const toast = useRef<Toast>(null);

  const fields = [
    { field: 'title', header: 'Title', type: 'text' as const },
    { field: 'content', header: 'Content', type: 'textarea' as const },
    { field: 'type', header: 'Type', type: 'dropdown' as const, options: [
      { label: 'Update', value: 'UPDATE' },
      { label: 'Announcement', value: 'ANNOUNCEMENT' },
      { label: 'Release', value: 'RELEASE' },
    ]},
    { field: 'imageUrl', header: 'Image URL', type: 'text' as const },
    { field: 'link', header: 'Link', type: 'text' as const },
  ];

  const emptyItem = (): CommunityPost => ({
    id: crypto.randomUUID(),
    title: '',
    content: '',
    type: 'UPDATE',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/admin/community-posts');
      if (!response.ok) throw new Error('Failed to fetch community posts');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching community posts:', error);
      toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to fetch community posts',
        life: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (items: CommunityPost[]) => {
    try {
      const response = await fetch('/api/admin/community-posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(items),
      });

      if (!response.ok) {
        throw new Error('Failed to save community posts');
      }

      const savedItems = await response.json();
      setItems(savedItems);
      
      toast.current?.show({
        severity: 'success',
        summary: 'Success',
        detail: 'Community posts saved successfully',
        life: 3000,
      });
    } catch (error) {
      console.error('Error saving community posts:', error);
      toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to save community posts',
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
      <EditableList<CommunityPost>
        items={items}
        onSave={handleSave}
        fields={fields}
        emptyItem={emptyItem}
      />
    </>
  );
} 