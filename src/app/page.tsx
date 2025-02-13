import Image from "next/image";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql, SiPrisma, SiShadcnui } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-dvh p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start">
       <h1 className="text-8xl">
        Hi! I&apos;m Carlos Santos
       </h1>
       <h2 className="text-2xl md:text-4xl">Software Developer</h2>
      <div className="flex gap-4 mt-4">
       <TooltipProvider>
         <Tooltip>
           <TooltipTrigger>
        <RiNextjsFill size={32} />
           </TooltipTrigger>
           <TooltipContent>NEXT.js</TooltipContent>
         </Tooltip>
         <Tooltip>
           <TooltipTrigger>
        <SiPrisma size={32} />
           </TooltipTrigger>
           <TooltipContent>Prisma</TooltipContent>
         </Tooltip>
         <Tooltip>
           <TooltipTrigger>
        <SiPostgresql size={32} />
           </TooltipTrigger>
           <TooltipContent>PostgreSQL</TooltipContent>
         </Tooltip>
         <Tooltip>
           <TooltipTrigger>
        <RiTailwindCssFill size={32} />
           </TooltipTrigger>
           <TooltipContent>Tailwind CSS</TooltipContent>
         </Tooltip>
         <Tooltip>
           <TooltipTrigger>
        <SiShadcnui size={32} />
           </TooltipTrigger>
           <TooltipContent>Shadcn UI</TooltipContent>
         </Tooltip>
       </TooltipProvider>
      </div>
      </main>
      <footer className="fixed bottom-10 md:row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href="/about"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          About me
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/projects"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Visit my projects
        </Link>

      </footer>
    </div>
  );
}
