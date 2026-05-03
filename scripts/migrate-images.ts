import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const publicDir = path.join(process.cwd(), 'public')

async function uploadImage(filePath: string): Promise<string | null> {
	try {
		const fileName = path.basename(filePath)
		const fileBuffer = await fs.promises.readFile(filePath)
		const fileExt = path.extname(fileName)
		const timestamp = Date.now()
		const newFileName = `${path.basename(fileName, fileExt)}-${timestamp}${fileExt}`

		const { error } = await supabase.storage
			.from('content-images')
			.upload(newFileName, fileBuffer)

		if (error) {
			console.error('Error uploading file:', fileName, error)
			return null
		}

		const { data: publicUrl } = supabase.storage
			.from('content-images')
			.getPublicUrl(newFileName)

		return publicUrl.publicUrl
	} catch (error) {
		console.error('Error processing file:', filePath, error)
		return null
	}
}

async function migrateImages() {
	try {
		// Get all events
		const { data: events, error: eventsError } = await supabase
			.from('events')
			.select('*')

		if (eventsError) {
			throw eventsError
		}

		// Process each event
		for (const event of events) {
			if (!event.imageUrl) continue

			// Check if the image is in the public directory
			const localPath = path.join(publicDir, event.imageUrl.replace(/^\//, ''))
			if (!fs.existsSync(localPath)) {
				console.log('Image not found:', localPath)
				continue
			}

			// Upload to Supabase storage
			const newUrl = await uploadImage(localPath)
			if (!newUrl) continue

			// Update the event record
			const { error: updateError } = await supabase
				.from('events')
				.update({ image_path: newUrl })
				.eq('id', event.id)

			if (updateError) {
				console.error('Error updating event:', event.id, updateError)
			} else {
				console.log('Successfully migrated image for event:', event.id)
			}
		}

		console.log('Image migration completed')
	} catch (error) {
		console.error('Migration failed:', error)
	}
}

migrateImages() 