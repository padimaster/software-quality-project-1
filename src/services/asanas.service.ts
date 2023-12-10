import { Locale } from '@/i18n.config';

type Asana = {
  name: string;
  img: string;
};

export const getAsanas = async (locale: Locale) => {
  const asanas = await import('@/dictionaries/asanas.json').then(
    (module) => module.default
  );

  const translatedAsanas: Asana[] = await asanas.map((asana) => ({
    name: asana.translations[locale],
    img: asana.img
  }));

  return translatedAsanas;
};
