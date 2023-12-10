'use client';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Locale } from '@/i18n.config';
import { usePathname, useRouter } from 'next/navigation';

export default function ToogleLanguage() {
  const router = useRouter();
  const currenPath = usePathname();
  const currentLocale = currenPath.split('/')[1];

  const languages: Record<Locale, string> = {
    es: 'Español',
    en: 'English',
    sa: 'Sanskrit'
  };

  function handleChangeLanguage(value: string) {
    const newLocale = value as Locale;

    const newUrl = currenPath.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newUrl);
  }

  return (
    <Select onValueChange={handleChangeLanguage}>
      <SelectTrigger className="w-32">
        <SelectValue placeholder={languages[currentLocale as Locale]} />
      </SelectTrigger>
      <SelectContent className="w-20 bg-white">
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem value="es">Español</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="sa">Sanskrit</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
