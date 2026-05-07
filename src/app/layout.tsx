import './globals.css'
import 'primereact/resources/themes/lara-dark-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientLayout from '@/components/layout/ClientLayout'
import AuthProvider from '@/components/providers/AuthProvider'
import { createPageMetadata } from '@/lib/metadata'

const inter = Inter({ subsets: ['latin'] })

const homeMetadata = createPageMetadata({
	title: 'Mumbo - Electronic Music Artist',
	description: 'Experience the fusion of EDM and playful vibes',
	path: '/',
	imagePath: '/images/mumbo-assets/m_b06468.jpg',
	imageAlt: 'Mumbo performing live',
})

export const metadata: Metadata = {
	...homeMetadata,
	title: {
		default: 'Mumbo - Electronic Music Artist',
		template: '%s | Mumbo',
	},
	metadataBase: new URL('https://mumbobeatz.com'),
	robots: {
		index: true,
		follow: true,
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={`${inter.className} antialiased`}>
			<body className='min-h-screen'>
				<AuthProvider>
					<ClientLayout>
						<main>{children}</main>
					</ClientLayout>
				</AuthProvider>
			</body>
		</html>
	)
}
