/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'aaronsblog.oss-cn-shanghai.aliyuncs.com'
            },
        ],
    },
};

export default nextConfig;
