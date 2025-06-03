'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Toolbar } from 'primereact/toolbar';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Events', path: '/events' },
  { label: 'Music', path: '/music' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Links', path: '/links' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
] as const;

export default function Header() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const pathname = usePathname();

  const start = (
    <Link href="/" className="flex items-center gap-2 no-underline">
      <span className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light">
        MUMBO
      </span>
    </Link>
  );

  const center = (
    <nav className="hidden md:flex gap-6">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`text-white hover:text-primary-light transition-colors ${
            pathname === item.path ? 'text-primary-light font-semibold' : ''
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );

  const end = (
    <div className="flex items-center">
      <Button
        icon="pi pi-bars"
        onClick={() => setSidebarVisible(true)}
        className="md:hidden p-button-text text-white hover:bg-background-paper/30 p-3"
        aria-label="Menu"
      />
    </div>
  );

  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-md bg-background-primary/80">
        <Toolbar
          start={start}
          center={center}
          end={end}
          className="border-none bg-transparent px-4"
          style={{ minHeight: '4rem' }}
        />
      </div>

      <Sidebar
        visible={sidebarVisible}
        onHide={() => setSidebarVisible(false)}
        className="w-full sm:w-80 p-0"
        position="right"
        showCloseIcon={false}
      >
        <div className="flex flex-col h-full bg-background-primary">
          <div className="flex justify-between items-center p-4 border-b border-background-paper">
            <span className="font-display text-xl font-bold">Menu</span>
            <Button
              icon="pi pi-times"
              onClick={() => setSidebarVisible(false)}
              className="p-button-text text-white hover:bg-background-paper/30 p-3"
              aria-label="Close"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-3 text-lg rounded-lg transition-colors hover:bg-background-paper/50 ${
                    pathname === item.path
                      ? 'bg-background-paper text-primary-light font-semibold'
                      : 'text-white'
                  }`}
                  onClick={() => setSidebarVisible(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
} 