/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "giant-cod-881.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
