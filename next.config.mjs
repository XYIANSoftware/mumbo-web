/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
};

export default config; 