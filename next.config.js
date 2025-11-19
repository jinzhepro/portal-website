const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost"],
  },
  // 确保支持JavaScript文件
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

module.exports = nextConfig;
