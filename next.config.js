/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/rn-consider.github.io", // 移除 basePath
  images: {
    unoptimized: true, // 关闭图片优化
  },
  trailingSlash: true, // 添加这行
};

module.exports = nextConfig;
