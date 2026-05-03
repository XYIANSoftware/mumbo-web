/** @type {import('next').NextConfig} */
const config = {
	images: {
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
