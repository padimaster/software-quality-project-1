import { Locale } from '@/i18n.config';
import { getAsanas } from '@/services/asanas.service';
import Image from 'next/image';

export default async function Home({
  params: { locale }
}: {
  params: { locale: Locale };
}) {
  const asanas = await getAsanas(locale);
  console.log(asanas);
  return (
    <main className="flex flex-col items-center justify-center gap-10 p-24">
      <h2 className="text-4xl color-foreground">ASANAS</h2>
      <Image
        src={'/images/logos/logo.svg'}
        alt="Asanas Logo"
        height={500}
        width={500}
        className="h-96 w-96"
      ></Image>
    </main>
  );
}
