import { asanasData } from '../dictionaries/asanas';

export type Asana = {
  id: string;
  translations: {
    en: {
      name: string;
      audio: string;
    };
    es: {
      name: string;
      audio: string;
    };
    sa: {
      name: string;
      audio: string;
    };
  };
  img: string;
};

export const getAsanas = async () => {
  const asanas = asanasData;

  return asanas;
};
