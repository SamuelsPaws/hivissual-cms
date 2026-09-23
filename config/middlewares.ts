import type { Core } from '@strapi/strapi';

const config: Core.Config.Middlewares = [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://market-assets.strapi.io",
            "https://hivissual.0fee5e97019c22302a68e6218bef4d7d.r2.cloudflarestorage.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://hivissual.0fee5e97019c22302a68e6218bef4d7d.r2.cloudflarestorage.com",
          ],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default config;
