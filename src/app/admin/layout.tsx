'use client'

import { ReactNode } from 'react'
import AuthProvider from '@/components/providers/AuthProvider'

export default function AdminLayout({ children }: { children: ReactNode }) {
	return <AuthProvider>{children}</AuthProvider>
}
