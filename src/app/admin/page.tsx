import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import AdminDashboard from '@/components/admin/AdminDashboard'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
	const supabase = await createClient()

	const { data: { user } } = await supabase.auth.getUser()

	if (!user) {
		redirect('/admin/login')
	}

	const isAdmin = user.email === process.env.ADMIN_EMAIL

	if (!isAdmin) {
		redirect('/admin/login')
	}

	return <AdminDashboard user={user} />
}
