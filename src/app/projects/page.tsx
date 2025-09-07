import Image from "next/image";
import bg from "../../../public/background/projects-background.png";

export default function Projects() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="relative w-full h-full">
        <Image
          src={bg}
          alt="Projects background"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Projects</h1>
        </div>
      </div>
    </main>
  );
}
