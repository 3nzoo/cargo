/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'keaproof.s3.ap-southeast-1.amazonaws.com',
      port: '',
      pathname: '/**',
    },
  ],
};

export default nextConfig;
