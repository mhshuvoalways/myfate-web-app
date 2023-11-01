/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SITE_KEY: process.env.SITE_KEY,
    CLIENT_ID: process.env.CLIENT_ID,
  }
}

module.exports = nextConfig
