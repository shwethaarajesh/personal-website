/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    images: {
      loader: 'akamai',
      path: '',
    },
    assetPrefix: '/personal-website',
  };
    module.exports = nextConfig