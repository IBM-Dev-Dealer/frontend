/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["riverlegacy.org", "purepng.com", "upload.wikimedia.org", "angular.io"],
  },
  env: {
    HOST: process.env.HOST,
    NEXTJS_API: process.env.NEXTJS_API,
    BASE_URL_NEXT: process.env.BASE_URL_NEXT,
    BASE_URL_HOST: process.env.BASE_URL_HOST,
    PORT: process.env.PORT,
  },
};
