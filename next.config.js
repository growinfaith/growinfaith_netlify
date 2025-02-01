/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures proper static export
  trailingSlash: true, // Fixes CSS issues in Netlify
};

module.exports = nextConfig;
