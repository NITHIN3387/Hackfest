/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  async headers() {
    return  [
      {
        key: "Permissions-Policy",
        value: "interest-cohort=()"
      }
    ]
  }
};

export default nextConfig;
