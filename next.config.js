/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tailwindui.com',
            port: '',
            pathname: '/img/logos/mark.svg?color=indigo&shade=600',
          },
        ],
    },
}

module.exports = nextConfig
