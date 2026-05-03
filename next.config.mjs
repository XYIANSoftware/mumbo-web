/** @type {import('next').NextConfig} */
const config = {
	async redirects() {
		return [
			{ source: '/gallery', destination: '/highlights', permanent: true },
			{ source: '/links', destination: '/socials', permanent: true },
		]
	},
	images: {
		// Next 16 defaults to qualities: [75]; declare any `quality` used in <Image />.
		qualities: [75, 90, 100],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*.supabase.co',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'mumbobeatz.com',
				pathname: '/**',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				pathname: '/**',
			},
		],
		unoptimized: process.env.NODE_ENV === 'development',
	},
	reactStrictMode: true,
	// Static export (output: 'export') is incompatible with App Router API
	// routes (admin, Supabase, etc.). Deploy as a Node server or Vercel.
}

export default config
