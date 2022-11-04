/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.traction.one',
        port: '',
        pathname: '/pokedex/**'
      }
    ]
  }
}

module.exports = nextConfig
