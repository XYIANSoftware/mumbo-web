'use client';

// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Panel } from 'primereact/panel';

// Content Editors
import { SpotifyLinksEditor } from '@/components/admin/SpotifyLinksEditor';
import { SoundCloudLinksEditor } from '@/components/admin/SoundCloudLinksEditor';
import { YouTubeLinksEditor } from '@/components/admin/YouTubeLinksEditor';
import { EventsEditor } from '@/components/admin/EventsEditor';
import { SocialLinksEditor } from '@/components/admin/SocialLinksEditor';
import { CommunityEditor } from '@/components/admin/CommunityEditor';

export default function AdminDashboard() {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (status === 'unauthenticated') {
  //     router.push('/admin/login');
  //   } else if (status === 'authenticated' && !session?.user?.isAdmin) {
  //     router.push('/admin/login');
  //   }
  // }, [session, status, router]);

  // if (status === 'loading' || !session?.user?.isAdmin) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center">
  //       <div className="text-center">
  //       <i className="pi pi-spin pi-spinner text-4xl"></i>
  //       <p className="mt-4">Loading...</p>
  //     </div>
  //   );
  // }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        {/* <p className="text-gray-400">Welcome back, {session.user.name}</p> */}
        <p className="text-gray-400">Welcome to the Admin Dashboard</p>
      </div>

      <TabView>
        <TabPanel header="Music Links">
          <div className="grid grid-cols-1 gap-6">
            <Panel header="Spotify Links">
              <SpotifyLinksEditor />
            </Panel>
            <Panel header="SoundCloud Links">
              <SoundCloudLinksEditor />
            </Panel>
            <Panel header="YouTube Links">
              <YouTubeLinksEditor />
            </Panel>
          </div>
        </TabPanel>
        
        <TabPanel header="Events">
          <Panel header="Upcoming Events">
            <EventsEditor />
          </Panel>
        </TabPanel>

        <TabPanel header="Social Media">
          <Panel header="Social Links">
            <SocialLinksEditor />
          </Panel>
        </TabPanel>

        <TabPanel header="Community">
          <Panel header="Community Posts">
            <CommunityEditor />
          </Panel>
        </TabPanel>
      </TabView>
    </div>
  );
} 