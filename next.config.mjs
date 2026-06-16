/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // TODO: remplacer par le domaine du CMS (Sanity CDN) quand il sera branché
    remotePatterns: [
      { protocol: "https", hostname: "df-batiment-site.vercel.app" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.sanity.io" }
    ]
  }
};
export default nextConfig;
