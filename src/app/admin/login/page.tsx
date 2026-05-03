'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'
import { useRef } from 'react'
import { createClient } from '@/utils/supabase/client'

export default function LoginPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	const toast = useRef<Toast>(null)

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)

		try {
			const supabase = createClient()
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password,
			})

			if (error) {
				throw error
			}

			router.push('/admin')
			router.refresh()
		} catch (error) {
			console.error('Error logging in:', error)
			toast.current?.show({
				severity: 'error',
				summary: 'Error',
				detail: 'Failed to log in. Please check your credentials.',
				life: 3000,
			})
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='flex justify-center items-center min-h-screen p-4'>
			<Toast ref={toast} />
			<Card title='Admin Login' className='w-full max-w-md'>
				<form onSubmit={handleLogin} className='space-y-4'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='email'>Email</label>
						<InputText
							id='email'
							type='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className='flex flex-col gap-2'>
						<label htmlFor='password'>Password</label>
						<Password
							id='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							feedback={false}
							required
						/>
					</div>
					<Button
						type='submit'
						label='Log In'
						loading={loading}
						className='w-full'
					/>
				</form>
			</Card>
		</div>
	)
}
