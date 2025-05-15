/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Keep other image configurations if they exist
        remotePatterns: [
            {
                protocol: 'https', // Protocol of the image source (http or https)
                hostname: 'i.pinimg.com', // The domain name
                port: '', // Optional: specify a port if needed
                pathname: '/**', // Optional: specify a path pattern if needed (e.g., '/images/**')
            },
            // Add other patterns here if needed
        ],
    },
    // Keep other Next.js configurations
};
 
export default nextConfig;
