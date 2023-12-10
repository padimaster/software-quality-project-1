'use client';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type Asana = {
  name: string;
  img: string;
};

export default function Asanas({ asanas }: { asanas: Asana[] }) {
  const [filteredAsanas, setFilteredAsanas] = useState(asanas);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    const lowerCaseTerm = term.toLowerCase();
    const filtered = asanas.filter((asana) =>
      asana.name.toLowerCase().includes(lowerCaseTerm)
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
              key={asana.name}
              href={asana.img}
              className="rounded-md border p-2 text-sm w-full"
            >
              {asana.name}
            </Link>
          ))}
        </div>
      </ScrollArea>
      <Separator orientation="vertical" />
    </aside>
  );
}
