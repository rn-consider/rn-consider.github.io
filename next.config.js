/** @type {import('next').NextConfig} */
let assetPrefix = `/rn-consider.github.io`;
// 用于为应用设置基础路径。这在将应用部署到子目录下时特别有用，因为它允许您指定应用所在的目录
let basePath = `/rn-consider.github.io`;
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  assetPrefix,
  basePath,
  images: {
    unoptimized: true, // 关闭图片优化
  },
};

module.exports = nextConfig;
