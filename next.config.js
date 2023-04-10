/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@fullcalendar/react',
    '@fullcalendar/common',
    '@fullcalendar/daygrid',
  ],
}

module.exports = nextConfig
