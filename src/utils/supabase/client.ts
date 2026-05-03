import { createBrowserClient } from '@supabase/ssr'
import type { SupabaseClient } from '@supabase/supabase-js'
import {
	resolveSupabaseAnonKey,
	resolveSupabaseUrl,
} from '@/lib/supabase-config'

let supabaseClient: SupabaseClient | null = null

export function createClient() {
	const url = resolveSupabaseUrl()
	const key = resolveSupabaseAnonKey()

	if (typeof window === 'undefined') {
		return createBrowserClient(url, key)
	}

	if (supabaseClient) return supabaseClient

	supabaseClient = createBrowserClient(url, key)
	
	return supabaseClient
} 