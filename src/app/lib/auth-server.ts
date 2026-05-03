import { createClient } from '@/utils/supabase/server'

export async function getCurrentUser() {
	const supabase = await createClient()
	const { data: { user }, error } = await supabase.auth.getUser()

	if (error || !user) {
		return null
	}

	return user
}

export async function isAdmin() {
	const user = await getCurrentUser()
	return user?.email === process.env.ADMIN_EMAIL
} 