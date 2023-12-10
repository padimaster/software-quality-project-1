import { Button } from '@/components/ui/button';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home({
  params: { locale }
}: {
  params: { locale: Locale };
}) {
  const { page } = await getDictionary(locale);
  console.log(page);

  return (
    <main className="flex flex-col items-center justify-center gap-10 p-24">
      <Image
        src={'/images/logos/logo.svg'}
        alt="Asanas Logo"
        height={300}
        width={300}
        className=""
      ></Image>
      <h1 className="text-5xl color-foreground">ASANAS</h1>
      <Button asChild className="text-2xl rounded-full px-10 py-8">
        <Link href={'/asanas'}>{page.login.title}</Link>
      </Button>
    </main>
  );
}
