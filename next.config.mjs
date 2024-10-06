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
            : "https://nutri-ai-6.vercel.app/api/py/:path*", // 프로덕션 백엔드 주소
      },
      // /docs 경로에 대한 처리
      {
        source: "/docs",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/docs"
            : "https://nutri-ai-6.vercel.app/docs", // 프로덕션 백엔드의 docs로 수정
      },
      // /openapi.json 경로 처리
      {
        source: "/openapi.json",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/openapi.json"
            : "https://nutri-ai-6.vercel.app/openapi.json", // 프로덕션 백엔드의 openapi.json으로 수정
      },
    ];
  },
};

export default nextConfig;
