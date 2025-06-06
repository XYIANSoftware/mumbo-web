import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './globals.css';

import { Inter } from 'next/font/google';
import ClientLayout from '@/components/layout/ClientLayout';
import AuthProvider from '@/components/providers/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mumbo - Electronic Music Artist',
  description: 'Experience the fusion of EDM and playful vibes',
  metadataBase: new URL('https://mumbobeatz.com'),
  openGraph: {
    title: 'Mumbo - Electronic Music Artist',
    description: 'Experience the fusion of EDM and playful vibes',
    url: 'https://mumbobeatz.com',
    siteName: 'Mumbo',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mumbo - Electronic Music Artist',
    description: 'Experience the fusion of EDM and playful vibes',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="min-h-screen bg-background-primary text-white">
        <AuthProvider>
          <ClientLayout>
            <main>{children}</main>
          </ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
