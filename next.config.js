/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com", "www.google.com"]
    }
}
//this is a security feature, add unsplash and google.com in nextConfig domain

module.exports = nextConfig
