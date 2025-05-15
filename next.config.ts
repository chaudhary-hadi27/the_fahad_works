// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',      // if you still use it
      'randomuser.me',      // for your testimonial avatars
      // add any other hosts here
    ],
  },
};

module.exports = nextConfig;
