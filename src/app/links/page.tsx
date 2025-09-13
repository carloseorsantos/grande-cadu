import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { HiHome } from "react-icons/hi2";
import { MdVerified } from "react-icons/md";

export default async function Home() {
  const socialmedias = [
    {
      title: "Instagram",
      link: "https://www.instagram.com/caducodes/",
      icon: "/instagram.svg",
    },
    {
      title: "TikTok",
      link: "https://www.tiktok.com/@caducodes",
      icon: "/tiktok.svg",
    },
  ];

  return (
    <div className="md:grid md:grid-rows-[20px_1fr_20px] items-center justify-items-center h-dvh p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 md:row-start-2 items-center md:justify-center sm:items-start">
        <div className="md:w-full md:text-center h-full flex-col items-center justify-center">
          <Avatar className="w-[150px] h-[150px] m-auto">
            <AvatarImage src="https://github.com/carloseorsantos.png" />
            <AvatarFallback>CS</AvatarFallback>
          </Avatar>
          <div className="text-center mt-4">
            <h1 className="text-2xl md:text-4xl font-bold flex items-center justify-center text-center gap-1">
              Carlos Santos
              <MdVerified className="inline text-blue-500" />
            </h1>
            <h2 className="text-base">@caducodes</h2>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-1 px-4 md:px-0">
            {socialmedias.map((item, index) => (
              <div key={index}>
                <Link href={item.link}>
                  <Card className="w-[280px] md:w-[440px] md:hover:bg-zinc-100">
                    <CardContent className="flex items-center justify-between gap-4 pt-6">
                      <Image
                        src={item.icon}
                        alt="project icon"
                        width={48}
                        height={48}
                        className="md:inline-block hidden"
                      />
                      <div className="flex justify-between w-full items-center gap-4">
                        <div className="flex flex-col gap-2">
                          <h2 className="md:text-xl font-bold">{item.title}</h2>
                        </div>
                        <Button>Follow</Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-center mt-4 md:text-xs text-[8px] max-w-[280px] mx-auto md:max-w-full md:mx-0">
            Follow me to stay tuned!
          </p>
        </div>
      </main>
      <footer className="fixed bottom-10 md:row-start-3 flex gap-6 items-center justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <HiHome aria-hidden className="text-[#666]" size={20} />
          Home
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
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
