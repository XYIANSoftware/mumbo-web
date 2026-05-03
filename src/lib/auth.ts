import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { CookieOptions } from '@supabase/ssr'

export async function getCurrentUser() {
	const cookieStore = await cookies()

	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
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

	const { data: { session }, error } = await supabase.auth.getSession()
	if (error) {
		console.error('Error getting session:', error.message)
		return { data: null, error }
	}

	return { data: session?.user ?? null, error: null }
}

export async function isAdmin() {
	const { data: user, error } = await getCurrentUser()
	if (error || !user) return false
	return user.email === process.env.ADMIN_EMAIL
}

export async function signIn(email: string, password: string) {
	const cookieStore = await cookies()
	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
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

	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	})

	return { data, error }
}

export async function signOut() {
	const cookieStore = await cookies()
	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
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

	const { error } = await supabase.auth.signOut()
	return { error }
}
