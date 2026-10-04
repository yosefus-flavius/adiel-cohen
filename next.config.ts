import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Send <title>/<meta> in <head> for every client (not streamed into <body>), so crawlers
  // and Lighthouse see them on dynamic pages such as /blog.
  htmlLimitedBots: /.*/,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'res.cloudinary.com',
    }],
  },

};

export default nextConfig;

