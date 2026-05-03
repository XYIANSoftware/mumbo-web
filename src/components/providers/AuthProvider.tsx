'use client'

import { createBrowserClient } from '@supabase/ssr'
import { ReactNode, useState, useEffect } from 'react'
import {
	resolveSupabaseAnonKey,
	resolveSupabaseUrl,
} from '@/lib/supabase-config'

export default function AuthProvider({ children }: { children: ReactNode }) {
	const [supabase] = useState(() =>
		createBrowserClient(resolveSupabaseUrl(), resolveSupabaseAnonKey())
	)

	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((event, session) => {
			if (session?.access_token !== undefined) {
				// Refresh the page to update the UI based on auth state
				window.location.reload()
			}
		})

		return () => {
			subscription.unsubscribe()
		}
	}, [supabase])

	return children
}
