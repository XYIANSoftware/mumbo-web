import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import {
	resolveSupabaseAnonKey,
	resolveSupabaseUrl,
} from '@/lib/supabase-config'

export async function createClient() {
	const cookieStore = await cookies()
	return createServerClient(
		resolveSupabaseUrl(),
		resolveSupabaseAnonKey(),
		{
			cookies: {
				getAll() {
					return cookieStore.getAll()
				},
				setAll(cookiesToSet, _headers) {
					try {
						for (const { name, value, options } of cookiesToSet) {
							if (value) {
								cookieStore.set(name, value, options)
							} else {
								cookieStore.delete(name)
							}
						}
						// Auth cache headers: prefer root `proxy` `setAll` for full control.
					} catch (e) {
						console.debug('Cookie set failed:', e)
					}
				},
			},
		}
	)
} 