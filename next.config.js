/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 关闭图片优化
  },
};

module.exports = nextConfig;
