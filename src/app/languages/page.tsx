import { Button } from "@/components/ui/button";
import { navLanguages } from "@/lib/languages.lib";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10 p-24">
      <h1 className="text-5xl color-foreground">Elige tu idioma</h1>
      <div className="mt-8 flex flex-col gap-4">
        {navLanguages.map((language) => (
          <Button
            key={language.code}
            asChild
            className="text-2xl px-10 py-8"
          >
            <Link href={language.link} className="flex justify-between w-96">
              <p>{language.name}</p>
              <Image src={language.image} alt={`${language.name} Flag`} width={50} height={50}/>
            </Link>
          </Button>
        ))}
      </div>
    </main>
  );
}
