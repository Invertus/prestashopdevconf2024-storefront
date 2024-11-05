/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '192.168.32.5',
            port: '8001',
            pathname: '/img/**'
          },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '8001',
            pathname: '/img/**'
          },
        ],
      },
};

export default nextConfig;
