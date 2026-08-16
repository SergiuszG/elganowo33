import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [82],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1440, 1600],
  },
};

export default nextConfig;
