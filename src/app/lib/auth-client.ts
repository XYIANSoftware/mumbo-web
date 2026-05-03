'use client'

import { createBrowserClient } from '@supabase/ssr'

export async function signIn(email: string, password: string) {
	const supabase = createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	)

	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	})

	return { data, error }
}

export async function signOut() {
	const supabase = createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	)

	const { error } = await supabase.auth.signOut()
	return { error }
} 