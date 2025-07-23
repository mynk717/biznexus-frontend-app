
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
        
      },
      {
        protocol: 'https',
        hostname: 'wp1.mktgdime.com',
        port: '',
        pathname: '/**', // This allows any path on wp1.mktgdime.com
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com', // Or just 'flaticon.com' if that works
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Ensure this allowedDevOrigins list matches your Firebase Studio preview URL,
  // especially if you are running on a custom port.
  // Example: If your preview URL is https://3001-your-studio-id.cluster.dev
  // then 'https://3001-your-studio-id.cluster.dev' should be in this list.
  allowedDevOrigins: [
    'http://localhost:3000', // Default Next.js
    'http://localhost:9002', // Your current package.json dev script port
    'https://6000-firebase-studio-1748583118187.cluster-nzwjpk4dvagxet7vzbvsyj.cloudworkstations.dev',
  ],
};

export default nextConfig;
