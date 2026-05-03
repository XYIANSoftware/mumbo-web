import { createClient } from '@/utils/supabase/server'

export async function getCurrentUser() {
	const supabase = await createClient()
	const { data: { user }, error } = await supabase.auth.getUser()

	if (error || !user) {
		return { data: null, error }
	}

	return { data: user, error: null }
}

export async function isAdmin() {
	const { data: user, error } = await getCurrentUser()
	if (error || !user) return false
	return user.email === process.env.ADMIN_EMAIL
}

export async function signIn(email: string, password: string) {
	const supabase = await createClient()
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	})

	return { data, error }
}

export async function signOut() {
	const supabase = await createClient()
	const { error } = await supabase.auth.signOut()
	return { error }
} 