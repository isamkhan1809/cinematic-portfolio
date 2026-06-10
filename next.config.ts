import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "maath",
  ],
  turbopack: {},
};

export default nextConfig;
