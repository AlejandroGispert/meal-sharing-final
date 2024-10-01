/** @type {import('next').NextConfig} */
import i18n from "./i18n/next-i18next.config.js";

const nextConfig = {
  images: {
    domains: ["github.com"], // Add allowed domains here
  },
  i18n: i18n(),
};

export default nextConfig;
