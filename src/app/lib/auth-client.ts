'use client'

import { createBrowserClient } from '@supabase/ssr'
import {
	resolveSupabaseAnonKey,
	resolveSupabaseUrl,
} from '@/lib/supabase-config'

export async function signIn(email: string, password: string) {
	const supabase = createBrowserClient(
		resolveSupabaseUrl(),
		resolveSupabaseAnonKey()
	)

	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	})

	return { data, error }
}

export async function signOut() {
	const supabase = createBrowserClient(
		resolveSupabaseUrl(),
		resolveSupabaseAnonKey()
	)

	const { error } = await supabase.auth.signOut()
	return { error }
} 