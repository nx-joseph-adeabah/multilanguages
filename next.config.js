module.exports = {
  reactStrictMode: true,

  images: {},
  i18n: {
    locales: ["en", "de", "fr"],
    defaultLocale: "fr",
    localeDetection: true,
    domains: [
      {
        domain: "https://multilanguages-blond.vercel.app/",
        defaultLocale: "en",
      },
      {
        domain: "https://multilanguages-de.vercel.app/",
        defaultLocale: "de",
      },
      {
        domain: "https://multilanguages-fr.vercel.app/",
        defaultLocale: "fr",
      },
    ],
  },
  trailingSlash: true,
};
