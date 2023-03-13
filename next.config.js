module.exports = {
  reactStrictMode: true,

  images: {},
  i18n: {
    locales: ["en", "de", "fr", "en-gb"],
    defaultLocale: "en",
    localeDetection: true,
    domains: [
      {
        domain: "https://multilanguages-blond.vercel.app/en",
        defaultLocale: "en",
        locales: ["en-gb"]
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
