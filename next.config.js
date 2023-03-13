module.exports = {
  reactStrictMode: true,

  images: {},
  i18n: {
    locales: ["en", "de", "fr", "en-gb"],
    defaultLocale: "de",
    localeDetection: true,
    domains: [
      {
        domain: "https://multilanguages-blond.vercel.app/en",
        defaultLocale: "en" ,
      },
      {
        domain: "https://multilanguages-blond.vercel.app/en-gb",
        defaultLocale: "en-gb",
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
