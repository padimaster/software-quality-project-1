import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 p-24">
      <Image
        src={"/images/logos/logo.svg"}
        alt="Asanas Logo"
        height={300}
        width={300}
        className=""
      ></Image>
      <h1 className="text-5xl color-foreground">ASANAS</h1>
      <Button asChild className="text-2xl rounded-full px-10 py-8">
        <Link href={"/languages"}>Ingresar</Link>
      </Button>
    </main>
  );
}
