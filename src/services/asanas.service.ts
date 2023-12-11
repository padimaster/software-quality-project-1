import { Locale } from '@/i18n.config';

export type Asana = {
  id: string;
  name: string;
  img: string;
  audio: string;
};

export const getAsanas = async (locale: Locale) => {
  const asanas = await import('@/dictionaries/asanas.json').then(
    (module) => module.default
  );

  const translatedAsanas: Asana[] = await asanas.map((asana) => ({
    id: asana.id,
    name: asana.translations[locale].name,
    img: asana.img,
    audio: asana.translations[locale].audio
  }));

  return translatedAsanas;
};
