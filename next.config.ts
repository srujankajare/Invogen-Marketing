import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML/CSS/JS for nginx (Plan A)
  output: "export",
  // Required for next/image with static export (no Image Optimization server)
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
