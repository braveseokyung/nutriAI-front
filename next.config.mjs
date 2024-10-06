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

  rewrites: async () => {
    return [
      // API 요청을 백엔드로 포워딩
      {
        source: "/api/py/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/py/:path*"
            : "https://astounding-choux-1a8b7b.netlify.app/api/py/:path*", // Netlify 배포 주소로 수정
      },
      // /docs 경로에 대한 처리
      {
        source: "/docs",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/docs"
            : "https://astounding-choux-1a8b7b.netlify.app/docs", // Netlify 배포 주소로 수정
      },
      // /openapi.json 경로 처리
      {
        source: "/openapi.json",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/openapi.json"
            : "https://astounding-choux-1a8b7b.netlify.app/openapi.json", // Netlify 배포 주소로 수정
      },
    ];
  },
};

export default nextConfig;
