'use client';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Locale } from '@/i18n.config';
import { Asana } from '@/services/asanas.service';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Sidebar({
  asanas,
  locale
}: {
  asanas: Asana[];
  locale: Locale;
}) {
  const [filteredAsanas, setFilteredAsanas] = useState(asanas);
  const [searchTerm, setSearchTerm] = useState('');

  const pathname = usePathname();
  const baseAsanasPath = pathname.replace(/\/asanas\/\d+/, '/asanas');

  const handleSearch = (term: string) => {
    const lowerCaseTerm = term.toLowerCase();
    const filtered = asanas.filter((asana) =>
      asana.translations[locale].name.toLowerCase().includes(lowerCaseTerm)
    );
    setFilteredAsanas(filtered);
    setSearchTerm(term);
  };

  return (
    <aside className="w-96 h-full flex">
      <ScrollArea className="h-full w-full py-2 px-8">
        <div className="flex items-center space-x-2">
          <Search className="w-8 h-8" />
          <Input
            placeholder="Search..."
            className="w-full rounded-md border p-2 text-sm"
            onChange={(e) => handleSearch(e.target.value)}
            value={searchTerm}
          ></Input>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {filteredAsanas.map((asana: Asana) => (
            <Link
              key={`${asana.id}-sidebar`}
              href={`${baseAsanasPath}/${asana.id}`}
              className="rounded-md border p-2 text-sm w-full flex flex-col justify-center items-center"
            >
              {asana.translations[locale].name}
              <Image
                src={asana?.img || '/images/logos/logo.svg'}
                alt="Asanas Logo"
                height={200}
                width={200}
                className="mt-4 h-24 w-24"
              ></Image>
            </Link>
          ))}
        </div>
      </ScrollArea>
      <Separator orientation="vertical" />
    </aside>
  );
}
