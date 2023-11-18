/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SITE_KEY: process.env.SITE_KEY,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_PANEL_BACKEND_URL: process.env.CLIENT_PANEL_BACKEND_URL,
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
  }
}

module.exports = nextConfig
