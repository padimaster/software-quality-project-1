import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import ToogleLanguage from './ToogleLanguage';

export default function Header() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b px-8 md:px-16 py-2 bg-white backdrop-blur">
        <div className="w-full flex justify-between h-14 items-center">
          <Link href={'/'}>
            <Image
              src={'/images/logos/logo.svg'}
              alt="Asanas Logo"
              width={200}
              height={200}
              className="h-[2rem] w-[6rem] md:h-[2.75rem] md:w-[8.25rem]"
            />
          </Link>
          <ToogleLanguage />
        </div>
      </header>
    </>
  );
}
