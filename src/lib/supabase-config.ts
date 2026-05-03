/** Used when env is unset or blank (e.g. Netlify without Supabase). */
export const FALLBACK_SUPABASE_URL =
	'https://placeholder.notconfigured.local'
export const FALLBACK_SUPABASE_ANON_KEY = 'not-configured-anon-key'

export function isSupabaseConfigured(): boolean {
	return Boolean(
		process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() &&
			process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
	)
}

export function resolveSupabaseUrl(): string {
	const v = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
	return v && v.length > 0 ? v : FALLBACK_SUPABASE_URL
}

export function resolveSupabaseAnonKey(): string {
	const v = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
	return v && v.length > 0 ? v : FALLBACK_SUPABASE_ANON_KEY
}
