import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    return config;
  },
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disables ESLint on Vercel
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Disables TypeScript errors on Vercel
  },
};

export default nextConfig;
