import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiHome } from 'react-icons/hi2';

const FooterMenu: React.FC = () => {
    return (
        <footer className="fixed bottom-10 md:row-start-3 flex gap-6 items-center justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <HiHome aria-hidden className="text-[#666]" size={20} />
          <span>Home</span>
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
          <span>About</span>
          
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
          <span>Projects</span>
        </Link>
      </footer>
    );
};

export default FooterMenu;