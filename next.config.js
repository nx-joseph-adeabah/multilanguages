module.exports = {
  reactStrictMode: true,

  images: {},
  i18n: {
    locales: ['en', 'de', 'fr', 'en-gb'],
    defaultLocale: 'en',
    localeDetection: false,
    domains: [
      {
        domain: 'https://multilanguages-english.vercel.app',
        defaultLocale: 'en',
        locales:['en-gb']
      },
      {
        domain: 'https://multilanguages-german.vercel.app',
        defaultLocale: 'de',
      },
      {
        domain: 'https://multilanguages-french.vercel.app',
        defaultLocale: 'fr',
      },
    ],
  },
  trailingSlash: true,
};
