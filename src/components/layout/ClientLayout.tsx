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
			<Header />
			<main className='grow'>{children}</main>
			<Footer />
		</PrimeReactProvider>
	)
}
