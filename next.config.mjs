/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
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
