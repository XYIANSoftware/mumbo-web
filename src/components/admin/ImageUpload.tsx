'use client'

import { useState } from 'react'
import { FileUpload } from 'primereact/fileupload'
import { Image } from 'primereact/image'
import { ProgressBar } from 'primereact/progressbar'
import { Button } from 'primereact/button'

interface ImageUploadProps {
	value?: string
	onChange: (url: string, path: string) => void
	folder?: string
}

export function ImageUpload({
	value,
	onChange,
	folder = 'events',
}: ImageUploadProps) {
	const [uploading, setUploading] = useState(false)
	const [progress, setProgress] = useState(0)

	const handleUpload = async (event: { files: File[] }) => {
		try {
			setUploading(true)
			setProgress(0)

			const file = event.files[0]
			const formData = new FormData()
			formData.append('file', file)
			formData.append('folder', folder)

			// Simulate progress
			const progressInterval = setInterval(() => {
				setProgress(prev => Math.min(prev + 10, 90))
			}, 100)

			const response = await fetch('/api/admin/upload-image', {
				method: 'POST',
				body: formData,
			})

			clearInterval(progressInterval)

			if (!response.ok) {
				throw new Error('Failed to upload image')
			}

			const { data } = await response.json()
			setProgress(100)
			onChange(data.url, data.path)
		} catch (error) {
			console.error('Error uploading image:', error)
		} finally {
			setUploading(false)
			setProgress(0)
		}
	}

	return (
		<div className='flex flex-col gap-4'>
			{value && (
				<div className='relative w-48 h-48'>
					<Image
						src={value}
						alt='Preview'
						width='200'
						height='200'
						className='object-cover rounded-lg'
						preview
					/>
					<Button
						icon='pi pi-times'
						className='absolute top-2 right-2 p-button-rounded p-button-danger p-button-text'
						onClick={() => onChange('', '')}
						aria-label='Remove image'
					/>
				</div>
			)}

			<FileUpload
				mode='basic'
				name='image'
				url='/api/upload-image'
				accept='image/*'
				maxFileSize={5000000}
				customUpload
				uploadHandler={handleUpload}
				auto
				chooseLabel={value ? 'Change Image' : 'Upload Image'}
				className='w-full'
				disabled={uploading}
			/>

			{uploading && (
				<ProgressBar
					value={progress}
					showValue={false}
					style={{ height: '6px' }}
				/>
			)}
		</div>
	)
}
