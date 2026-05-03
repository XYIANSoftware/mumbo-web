import { NextResponse } from 'next/server'
import { checkAdminAuth } from '@/lib/api-auth'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
	const isAdmin = await checkAdminAuth()
	if (!isAdmin) {
		return NextResponse.json(
			{ error: 'Unauthorized' },
			{ status: 401 }
		)
	}

	try {
		const formData = await request.formData()
		const file = formData.get('file') as File
		const folder = formData.get('folder') as string || 'events'

		if (!file) {
			return NextResponse.json(
				{ error: 'No file provided' },
				{ status: 400 }
			)
		}

		// Convert File to ArrayBuffer
		const arrayBuffer = await file.arrayBuffer()
		const buffer = Buffer.from(arrayBuffer)

		// Upload to Supabase Storage
		const fileName = `${Date.now()}-${file.name}`
		const filePath = `${folder}/${fileName}`

		const { data, error: uploadError } = await supabase.storage
			.from('images')
			.upload(filePath, buffer, {
				contentType: file.type,
				upsert: false,
			})

		if (uploadError) {
			return NextResponse.json(
				{ error: uploadError.message },
				{ status: 500 }
			)
		}

		// Get public URL
		const { data: { publicUrl } } = supabase.storage
			.from('images')
			.getPublicUrl(filePath)

		return NextResponse.json({
			data: {
				path: data.path,
				url: publicUrl,
			},
		})
	} catch (error) {
		console.error('Error uploading image:', error)
		return NextResponse.json(
			{ error: 'Failed to upload image' },
			{ status: 500 }
		)
	}
} 