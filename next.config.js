/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com','images.pexels.com'],
  },
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig