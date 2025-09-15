import FooterMenu from "@/components/FooterMenu/footermenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default async function Home() {
  return (
    <div className="md:grid md:grid-rows-[20px_1fr_20px] items-center justify-items-center h-dvh p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col md:flex-row gap-4 md:row-start-2 items-center sm:items-start">
        <div className="h-full flex items-center justify-center">
          <Avatar className="w-[200px] h-[200px]">
            <AvatarImage src="https://github.com/carloseorsantos.png" />
            <AvatarFallback>CS</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex p-4 flex-col gap-2">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold flex items-center gap-2">
              Carlos Santos
              <MdVerified className="inline text-blue-500" />
            </h1>
            <h2 className="text-base">@caducodes</h2>
          </div>
          <div>
            <p className="text-sm md:text-base max-w-[300px]">
              I&apos;m a software developer with 4+ years of experience.
            </p>
            <p className="text-sm md:text-base max-w-[250px]">
              FullStack Developer at
              <Link
                href="https://www.ciandt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#fa5a50]"
              >
                &nbsp;CI&T
              </Link>
            </p>
            <p className="text-sm md:text-base max-w-[250px]">Live in 🇧🇷</p>
            <div className="flex gap-4 mt-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/carloseorsantos/"
                    >
                      <FaLinkedin size={32} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/carloseorsantos"
                    >
                      <FaGithubSquare size={32} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Github</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/caducodes"
                    >
                      <FaInstagramSquare size={32} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Instagram</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </main>
      <FooterMenu />
    </div>
  );
}
