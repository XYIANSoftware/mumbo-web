import { createClient } from '@supabase/supabase-js'
import {
	isSupabaseConfigured,
	resolveSupabaseAnonKey,
	resolveSupabaseUrl,
} from './supabase-config'

export { isSupabaseConfigured }

// Never throw at import — static hosts (Netlify) often omit Supabase.
export const supabase = createClient(
	resolveSupabaseUrl(),
	resolveSupabaseAnonKey()
)

// Test function to verify Supabase connection
export async function testSupabaseConnection() {
	if (!isSupabaseConfigured()) {
		return false
	}
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
