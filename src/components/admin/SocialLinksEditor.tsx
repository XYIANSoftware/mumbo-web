'use client';

import { useEffect, useState } from 'react';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { EditableList } from './EditableList';
import { SocialLink } from '@/types/content';

export function SocialLinksEditor() {
  const [items, setItems] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);
  const toast = useRef<Toast>(null);

  const fields = [
    { field: 'title', header: 'Title', type: 'text' as const },
    { field: 'url', header: 'URL', type: 'text' as const },
    { field: 'platform', header: 'Platform', type: 'dropdown' as const, options: [
      { label: 'Instagram', value: 'INSTAGRAM' },
      { label: 'Twitter', value: 'TWITTER' },
      { label: 'Facebook', value: 'FACEBOOK' },
      { label: 'TikTok', value: 'TIKTOK' },
      { label: 'YouTube', value: 'YOUTUBE' },
    ]},
    { field: 'username', header: 'Username', type: 'text' as const },
  ];

  const platformToIcon = {
    INSTAGRAM: 'pi pi-instagram',
    TWITTER: 'pi pi-twitter',
    FACEBOOK: 'pi pi-facebook',
    TIKTOK: 'pi pi-video',
    YOUTUBE: 'pi pi-youtube',
  };

  const emptyItem = (): SocialLink => ({
    id: crypto.randomUUID(),
    title: '',
    url: '',
    platform: 'INSTAGRAM',
    icon: platformToIcon['INSTAGRAM'],
    username: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/admin/social-links');
      if (!response.ok) throw new Error('Failed to fetch social links');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching social links:', error);
      toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to fetch social links',
        life: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (items: SocialLink[]) => {
    // Add icons before saving
    const itemsWithIcons = items.map(item => ({
      ...item,
      icon: platformToIcon[item.platform],
    }));

    try {
      const response = await fetch('/api/admin/social-links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemsWithIcons),
      });

      if (!response.ok) {
        throw new Error('Failed to save social links');
      }

      const savedItems = await response.json();
      setItems(savedItems);
      
      toast.current?.show({
        severity: 'success',
        summary: 'Success',
        detail: 'Social links saved successfully',
        life: 3000,
      });
    } catch (error) {
      console.error('Error saving social links:', error);
      toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to save social links',
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
      <EditableList<SocialLink>
        items={items}
        onSave={handleSave}
        fields={fields}
        emptyItem={emptyItem}
      />
    </>
  );
} 