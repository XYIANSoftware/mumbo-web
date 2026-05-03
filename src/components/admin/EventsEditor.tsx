'use client'

import { useEffect, useState } from 'react'
import { Toast } from 'primereact/toast'
import { useRef } from 'react'
import { EditableList } from './EditableList'
import { Event } from '@/types/content'
import { Button } from 'primereact/button'

export function EventsEditor() {
	const [items, setItems] = useState<Event[]>([])
	const [loading, setLoading] = useState(true)
	const [seeding, setSeeding] = useState(false)
	const toast = useRef<Toast>(null)

	const fields = [
		{ field: 'title', header: 'Title', type: 'text' as const },
		{ field: 'date', header: 'Date', type: 'date' as const },
		{ field: 'time', header: 'Time', type: 'time' as const },
		{ field: 'location', header: 'Location', type: 'text' as const },
		{ field: 'description', header: 'Description', type: 'textarea' as const },
		{ field: 'image_url', header: 'Image', type: 'image' as const },
		{ field: 'ticket_url', header: 'Ticket URL', type: 'text' as const },
		{ field: 'price', header: 'Price', type: 'text' as const },
		{
			field: 'status',
			header: 'Status',
			type: 'dropdown' as const,
			options: [
				{ label: 'Upcoming', value: 'UPCOMING' },
				{ label: 'Past', value: 'PAST' },
				{ label: 'Cancelled', value: 'CANCELLED' },
			],
		},
	]

	const emptyItem = (): Event => ({
		id: crypto.randomUUID(),
		title: '',
		date: new Date().toISOString().split('T')[0],
		time: '20:00',
		location: '',
		description: '',
		status: 'UPCOMING',
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
	})

	const fetchItems = async () => {
		try {
			const response = await fetch('/api/admin/events')
			if (!response.ok) throw new Error('Failed to fetch events')
			const { data } = await response.json()
			setItems(data)
		} catch (error) {
			console.error('Error fetching events:', error)
			toast.current?.show({
				severity: 'error',
				summary: 'Error',
				detail: 'Failed to fetch events',
				life: 3000,
			})
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		void fetchItems()
	}, [])

	const handleSave = async (items: Event[]) => {
		try {
			const response = await fetch('/api/admin/events', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(items),
			})

			if (!response.ok) {
				throw new Error('Failed to save events')
			}

			const { data } = await response.json()
			setItems(data)

			toast.current?.show({
				severity: 'success',
				summary: 'Success',
				detail: 'Events saved successfully',
				life: 3000,
			})
		} catch (error) {
			console.error('Error saving events:', error)
			toast.current?.show({
				severity: 'error',
				summary: 'Error',
				detail: 'Failed to save events',
				life: 3000,
			})
			throw error
		}
	}

	const handleSeed = async () => {
		try {
			setSeeding(true)
			const response = await fetch('/api/admin/seed-events', {
				method: 'POST',
			})

			if (!response.ok) {
				throw new Error('Failed to seed events')
			}

			await fetchItems()

			toast.current?.show({
				severity: 'success',
				summary: 'Success',
				detail: 'Events seeded successfully',
				life: 3000,
			})
		} catch (error) {
			console.error('Error seeding events:', error)
			toast.current?.show({
				severity: 'error',
				summary: 'Error',
				detail: 'Failed to seed events',
				life: 3000,
			})
		} finally {
			setSeeding(false)
		}
	}

	if (loading) {
		return (
			<div className='flex justify-center items-center p-4'>
				<i className='pi pi-spin pi-spinner text-4xl'></i>
			</div>
		)
	}

	return (
		<>
			<Toast ref={toast} />
			<div className='flex justify-between items-center mb-4'>
				<h2 className='text-xl font-semibold'>Manage Events</h2>
				<Button
					label='Seed Test Events'
					icon='pi pi-refresh'
					onClick={handleSeed}
					loading={seeding}
					className='p-button-secondary'
				/>
			</div>
			<EditableList<Event>
				items={items}
				onSave={handleSave}
				fields={fields}
				emptyItem={emptyItem}
			/>
		</>
	)
}
