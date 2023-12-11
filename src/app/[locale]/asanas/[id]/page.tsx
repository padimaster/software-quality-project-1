import Asanas from '@/components/layout/sidebar/Sidebar';
import { Locale } from '@/i18n.config';
import { getAsanas } from '@/services/asanas.service';
import Image from 'next/image';

export default async function Home({
  params: { locale, id }
}: {
  params: { locale: Locale; id: string };
}) {
  const asanas = await getAsanas(locale);
  const asana = asanas.find((asana) => asana.id === id);

  return (
    <main className="flex flex-row h-screen w-full items-start justify-center gap-10 p-24">
      <Asanas asanas={asanas}></Asanas>
      <div className="w-4/5 flex flex-col justify-center items-center p-4">
        <h2 className="text-4xl color-foreground">{asana?.name}</h2>
        <Image
          src={asana?.img || '/images/logos/logo.svg'}
          alt="Asanas Logo"
          height={500}
          width={500}
          className="mt-4 h-96 w-96"
        ></Image>
        <div className="mt-4">
          <audio controls preload="none">
            <source src={asana?.audio} />
          </audio>
        </div>
      </div>
    </main>
  );
}
