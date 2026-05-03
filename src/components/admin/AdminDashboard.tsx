'use client'

import { TabView, TabPanel } from 'primereact/tabview'
import { Panel } from 'primereact/panel'
import type { User } from '@supabase/supabase-js'

// Content Editors
import { SpotifyLinksEditor } from '@/components/admin/SpotifyLinksEditor'
import { SoundCloudLinksEditor } from '@/components/admin/SoundCloudLinksEditor'
import { YouTubeLinksEditor } from '@/components/admin/YouTubeLinksEditor'
import { EventsEditor } from '@/components/admin/EventsEditor'
import { SocialLinksEditor } from '@/components/admin/SocialLinksEditor'
import { CommunityEditor } from '@/components/admin/CommunityEditor'

interface AdminDashboardProps {
	user: User
}

export default function AdminDashboard({ user }: AdminDashboardProps) {
	return (
		<div className='p-6'>
			<div className='mb-6'>
				<h1 className='text-3xl font-bold'>Admin Dashboard</h1>
				<p className='text-gray-400'>Welcome back, {user.email}</p>
			</div>

			<TabView>
				<TabPanel header='Music Links'>
					<div className='grid grid-cols-1 gap-6'>
						<Panel header='Spotify Links'>
							<SpotifyLinksEditor />
						</Panel>
						<Panel header='SoundCloud Links'>
							<SoundCloudLinksEditor />
						</Panel>
						<Panel header='YouTube Links'>
							<YouTubeLinksEditor />
						</Panel>
					</div>
				</TabPanel>

				<TabPanel header='Events'>
					<Panel header='Upcoming Events'>
						<EventsEditor />
					</Panel>
				</TabPanel>

				<TabPanel header='Social Media'>
					<Panel header='Social Links'>
						<SocialLinksEditor />
					</Panel>
				</TabPanel>

				<TabPanel header='Community'>
					<Panel header='Community Posts'>
						<CommunityEditor />
					</Panel>
				</TabPanel>
			</TabView>
		</div>
	)
}
