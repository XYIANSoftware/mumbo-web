import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { CookieOptions } from '@supabase/ssr'
import {
	resolveSupabaseAnonKey,
	resolveSupabaseUrl,
} from '@/lib/supabase-config'

export async function checkAdminAuth() {
	const cookieStore = await cookies()

	const supabase = createServerClient(
		resolveSupabaseUrl(),
		resolveSupabaseAnonKey(),
		{
			cookies: {
				get(name: string) {
					return cookieStore.get(name)?.value
				},
				set(_name: string, _value: string, _options: CookieOptions) {
					// This is a read-only cookie store in API routes
				},
				remove(_name: string, _options: CookieOptions) {
					// This is a read-only cookie store in API routes
				},
			},
		}
	)

	const {
		data: { session },
	} = await supabase.auth.getSession()

	if (!session?.user) {
		return false
	}

	return session.user.email === process.env.ADMIN_EMAIL
} 