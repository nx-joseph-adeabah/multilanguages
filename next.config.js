module.exports = {
  reactStrictMode: true,

  images: {},
  i18n: {
    locales: ['en', 'de', 'fr', 'en-GB'],
    defaultLocale: 'fr',
    localeDetection: true,
    domains: [
      {
        domain: 'https://multilanguages-nu.vercel.app',
        defaultLocale: 'en',
        // locales:['en-GB']
      },
      {
        domain: 'https://multilanguages-de.vercel.app',
        defaultLocale: 'de',
      },
      {
        domain: 'https://multilanguages-fr.vercel.app',
        defaultLocale: 'fr',
      },
    ],
  },
  trailingSlash: true,
};
