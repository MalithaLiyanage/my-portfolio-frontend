import Image from "next/image";
import bg from "../../public/background/home-background.png";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Image
        src={bg}
        alt="background"
        className="w-full h-full object-cover object-center opacity-25"
      />
    </main>
  );
}
