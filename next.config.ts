import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['media.gettyimages.com','upload.wikimedia.org'], // Add the domain of your image source
  },
};

export default nextConfig;
