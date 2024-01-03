import Sidebar from '@/components/layout/sidebar/Sidebar';
import { Locale } from '@/i18n.config';
import { getAsanas } from '@/services/asanas.service';
import Image from 'next/image';

export default async function Home({
  params: { locale, id }
}: {
  params: { locale: Locale; id: string };
}) {
  const asanas = await getAsanas();
  const asana = asanas.find((asana) => asana.id === id);

  return (
    <main className="flex flex-row h-screen w-full items-start justify-center gap-10 p-24">
      <Sidebar asanas={asanas} locale={locale}></Sidebar>
      <div className="w-4/5 flex flex-col justify-center items-center p-4">
        <h2 className="text-4xl color-foreground">
          {asana?.translations[locale].name}
        </h2>
        <Image
          src={asana?.img || '/images/logos/logo.svg'}
          alt="Asanas Logo"
          height={500}
          width={500}
          className="mt-4 h-96 w-96"
        ></Image>
        <div className="flex gap-8 flex-wrap justify-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <p>{asana?.translations.es.name}</p>
            <audio controls preload="none">
              <source src={asana?.translations.es.audio} />
            </audio>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p>{asana?.translations.en.name}</p>
            <audio controls preload="none">
              <source src={asana?.translations.en.audio} />
            </audio>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p>{asana?.translations.sa.name}</p>
            <audio controls preload="none">
              <source src={asana?.translations.sa.audio} />
            </audio>
          </div>
        </div>
      </div>
    </main>
  );
}
