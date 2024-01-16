const withMDX = require("@next/mdx")()

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx"],
}

module.exports = withMDX(nextConfig)
