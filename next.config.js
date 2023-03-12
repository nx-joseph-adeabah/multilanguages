module.exports = {
  reactStrictMode: true,

  images: {},
  i18n: {
    locales: ["en", "de", "fr"],
    defaultLocale: "en",
    localeDetection: true,
    domains: [
      {
        domain: "https://multilanguages.vercel.app/",
        defaultLocale: "en",
      },
      {
        domain: "exampleigus.de",
        defaultLocale: "de",
      },
      {
        domain: "exampleigus.fr",
        defaultLocale: "fr",
      },
    ],
  },
  trailingSlash: true,
};
