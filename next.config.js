/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  }
}

const withImages = require('next-images')
module.exports = withImages()

module.exports = nextConfig
