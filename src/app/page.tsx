import { RiNextjsFill, RiTailwindCssFill, RiReactjsFill, RiJavascriptFill, RiJavaFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { BiLogoSpringBoot, BiLogoTypescript } from "react-icons/bi";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import FooterMenu from "@/components/FooterMenu/footermenu";

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-dvh p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start">
       <div>
       <h1 className="text-5xl md:text-8xl">
        Hi! I&apos;m Carlos Santos
       </h1>
       <h2 className="text-2xl md:text-4xl">Software Developer</h2>
       </div>
        <div className="flex gap-4 mt-4 max-w-[300px] md:max-w-full flex-wrap md:flex-row">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <RiJavascriptFill size={32} />
            </TooltipTrigger>
            <TooltipContent>JavaScript</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <BiLogoTypescript size={32} />
            </TooltipTrigger>
            <TooltipContent>TypeScript</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <RiReactjsFill size={32} />
            </TooltipTrigger>
            <TooltipContent>ReactJS</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
          <RiNextjsFill size={32} />
            </TooltipTrigger>
            <TooltipContent>NEXT.js</TooltipContent>
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
          <Tooltip>
            <TooltipTrigger>
          <RiJavaFill size={32} />
            </TooltipTrigger>
            <TooltipContent>Java</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
          <BiLogoSpringBoot size={32} />
            </TooltipTrigger>
            <TooltipContent>SpringBoot</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </div>
      </main>
      <FooterMenu />
    </div>
  );
}
