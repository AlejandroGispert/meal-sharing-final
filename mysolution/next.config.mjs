/** @type {import('next').NextConfig} */
import i18n from "./i18n/next-i18next.config.js";

const nextConfig = {
  images: {
    domains: ["github.com"], // Add allowed domains here
  },

  output: "export",
};

export default nextConfig;
