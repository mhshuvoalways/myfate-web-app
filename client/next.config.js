/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SITE_KEY: process.env.SITE_KEY,
    CLIENT_ID: process.env.CLIENT_ID,
    FRONTEND_DEV: process.env.FRONTEND_DEV,
    BACKENDURL_DEV: process.env.BACKENDURL_DEV,
  }
}

module.exports = nextConfig
