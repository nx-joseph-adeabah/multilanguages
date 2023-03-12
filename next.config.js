module.exports = {
  reactStrictMode: true,

  images: {},
  i18n: {
    locales: ["en", "de", "fr"],
    defaultLocale: "de",
    localeDetection: true,
    domains: [
      {
        domain: "https://multilanguages.vercel.app/",
        defaultLocale: "en",
      },
      {
        domain: "https://multilanguages.vercel.app/",
        defaultLocale: "de",
      },
      {
        domain: "https://multilanguages.vercel.app/",
        defaultLocale: "fr",
      },
    ],
  },
  trailingSlash: true,
};
