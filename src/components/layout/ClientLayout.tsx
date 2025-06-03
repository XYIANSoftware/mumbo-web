'use client';

import { PrimeReactProvider } from 'primereact/api';
import Header from './Header';
import Footer from './Footer';

// Styles
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <PrimeReactProvider>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </PrimeReactProvider>
  );
} 