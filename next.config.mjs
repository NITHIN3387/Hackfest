/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return  [
      {
        source: "/:slug*",
        headers: [
          {
            key: "Permissions-Policy",
            value: "interest-cohort=()"
          }
        ]
      }
    ]
  }
};

export default nextConfig;
