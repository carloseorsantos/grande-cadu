import Image from "next/image";
import Link from "next/link";
import { HiHome } from "react-icons/hi2";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const projects = [
    {
      title: "Quanto Rendeu?",
      description: "Calculate how much your investment will yield.",
      link: "https://v1-quantorendeu.vercel.app/",
      icon: "/qr-icon.svg",
    },
    {
      title: "ZapLinks",
      description: "Use my URL shortener and QR Codes generator.",
      link: "https://zaplinks.vercel.app/",
      icon: "/zap-links-icon.svg",
    }
  ];
  return (
    <div className="md:grid md:grid-rows-[20px_1fr_20px] items-center justify-items-center h-dvh p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col md:flex-row gap-4 md:row-start-2 items-center sm:items-start">
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 px-4 md:px-0">
          {projects.map((item, index) => (
            <div key={index}>
              <Link href={item.link}>
                <Card className="w-full md:hover:bg-zinc-100">
                  <CardContent className="flex items-center justify-between gap-4 pt-6">
                    <Image src={item.icon} alt="project icon" width={48} height={48} className="md:inline-block hidden" />
                    <div className="flex justify-between w-full items-center gap-4">
                      <div className="flex flex-col gap-2">
                        <h2 className="md:text-xl font-bold">{item.title}</h2>
                        <p className="text-xs">{item.description}</p>
                      </div>
                      <Button className="md:hidden block">Go</Button>
                      <Button className="hidden md:block">Visit</Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-center mt-4 md:text-xs text-[8px] max-w-[280px] mx-auto md:max-w-full md:mx-0">
          I&apos;m working on more projects, stay tuned!
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
      </footer>
    </div>
  );
}
