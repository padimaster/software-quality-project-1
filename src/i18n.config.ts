export const i18n = {
  defaultLocale: 'sa',
  locales: ['es', 'en', 'sa']
} as const;

export type Locale = (typeof i18n)['locales'][number];
