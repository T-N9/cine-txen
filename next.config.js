/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["www.qbittorrent.org", "image.tmdb.org", "www.themoviedb.org"],
  },
};

module.exports = nextConfig;
