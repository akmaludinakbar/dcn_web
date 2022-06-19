/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // BASE_URL:'http://localhost:8090' //dev
    BASE_URL: "http://api.dinarcahayanegara.com", //prod
  },
};

module.exports = nextConfig;
