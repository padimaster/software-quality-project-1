import 'server-only';
import type { Locale } from '@/i18n.config';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
  sa: () => import('@/dictionaries/sa.json').then((module) => module.default)
};

export const getDictionary = async (locale: Locale) => {
  const defaultLocale: Locale = 'es';

  if (!(locale in dictionaries)) {
    locale = defaultLocale;
  }

  const dictionary = await dictionaries[locale]();
  return dictionary;
};
