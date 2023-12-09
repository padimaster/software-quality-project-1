import React from 'react';

import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export default function Header() {
  return (
    <>
      <div>
        <header className="w-full flex items-center justify-between px-16 py-4">
          <Image
            src={'/images/logos/logo.svg'}
            className="w-16"
            width={100}
            height={100}
            alt="Asanas Logo"
          />
          <div className="font-bold text-4xl">ASANAS</div>
          <div className="w-8"></div>
        </header>
        <Separator />
      </div>
    </>
  );
}
