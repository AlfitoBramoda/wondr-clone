/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['wondr.bni.co.id'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wondr.bni.co.id',
        port: '',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'wondr.bni.co.id',
        port: '',
        pathname: '/api/**',
      },
    ],
  },
}

export default nextConfig; 