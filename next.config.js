/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/2048",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
