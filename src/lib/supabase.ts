import { createClient } from '@supabase/supabase-js'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
	throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
	throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Test function to verify Supabase connection
export async function testSupabaseConnection() {
	try {
		const { error } = await supabase.from('events').select('count').single()
		if (error) {
			console.error('Supabase connection test failed:', error.message)
			return false
		}
		console.log('Supabase connection test successful')
		return true
	} catch (err) {
		console.error('Supabase connection test error:', err)
		return false
	}
}
