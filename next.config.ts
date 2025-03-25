import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: "loose", // Allows both ESM & CJS dependencies
  },
};

export default nextConfig;
