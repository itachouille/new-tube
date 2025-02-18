import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      /*    {
        protocol: "https",
        hostname: "image.mux.com",
      }, */
      {
        protocol: "https",
        hostname: "p4phe4xdwe.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
