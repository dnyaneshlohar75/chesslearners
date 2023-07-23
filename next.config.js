/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    nextConfig,
    plugins: [
        require('tailwindcss-animated')
    ],
    images: {
        domains: ['images.wallpaperscraft.com', 'images.unsplash.com']
    },
    experimental: {
        serverActions: false,
    },
}
