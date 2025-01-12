import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.misy.cloud',
        port: '',
        pathname: '/nish/**',
        search: '',
      },
    ],
  }
};

export default nextConfig;
