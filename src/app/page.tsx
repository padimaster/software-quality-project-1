import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={"/images/logos/logo.png"}
        alt="Asanas Logo"
        height={200}
        width={200}
      ></Image>
      <h1>ASANAS</h1>
      <Button>
        Login
      </Button>
    </main>
  );
}
