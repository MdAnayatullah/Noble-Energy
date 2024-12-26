// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: { unoptimized: true },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures a fully static export
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint warnings during the build
  },
  images: {
    unoptimized: true, // Disables Next.js image optimization
  },
};

module.exports = nextConfig;
