'use client'

import { PrimeReactProvider } from 'primereact/api'
import Header from './Header'
import Footer from './Footer'

interface ClientLayoutProps {
	children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
	return (
		<PrimeReactProvider value={{ unstyled: false, pt: {} }}>
			<div className='relative flex min-h-screen flex-col'>
				<Header />
				<main className='relative z-[1] flex-1'>{children}</main>
				<Footer />
			</div>
		</PrimeReactProvider>
	)
}
