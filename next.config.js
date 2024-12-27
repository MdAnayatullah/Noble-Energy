/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures static export
  eslint: {
    ignoreDuringBuilds: true, // Ignore lint warnings during builds
  },
  images: { unoptimized: true }, // Disable image optimization for export
};

module.exports = nextConfig;
