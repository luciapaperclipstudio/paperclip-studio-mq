/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Addresses from the previous website that Google still has on record.
  // Permanent redirects pass any remaining link value to the blog instead of
  // leaving 404s in Search Console.
  async redirects() {
    return [
      { source: '/post/:slug*', destination: '/blog', permanent: true },
      { source: '/blog/categories/:slug*', destination: '/blog', permanent: true },
    ]
  },
}

export default nextConfig
