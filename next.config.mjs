/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'taxi70.de',
      },
    ],
  },
};

export default nextConfig;

