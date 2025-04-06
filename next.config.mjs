/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.deckbae.hu",
          },
        ],
        destination: "https://deckbae.hu/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
