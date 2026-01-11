import type { NextConfig } from "next";
import createMDX from '@next/mdx'


const nextConfig: NextConfig = {
  /* config options here */
    // pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Unsplash
      },
      {
        protocol: "https",
        hostname: "pro.aceternity.com", // Aceternity site itself
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com", // Their actual CDN for images
      },
    ],
  },

};

// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
//     extension: /\.(md|mdx)$/,

// })
 

// export default withMDX(nextConfig)
export default nextConfig
