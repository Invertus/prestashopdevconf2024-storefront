/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '192.168.6.105',
            port: '8001',
            pathname: '/img/**'
          },
        ],
      },
};

export default nextConfig;
