/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/popup',
        permanent: false, // true로 설정하면 301 리다이렉트 (영구 리다이렉트)
      },
    ];
  },
};

export default nextConfig;
