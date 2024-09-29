const i18n = () => ({
  locales: ["en", "no"], // 'en' for English and 'no' for Norwegian
  defaultLocale: "en", // Default language
  localeDetection: true, // Automatically detect the user's language
  fallbackLng: {
    no: ["en"],
    default: ["en"],
  },
});

export default i18n;