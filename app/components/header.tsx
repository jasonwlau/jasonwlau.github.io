'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex">
      <div className="w-1/2 pt-5">
        <div className="h-32 pt-4">
          <a
            href="/"
          >
            <p className="text-lg font-semibold">Jason Lau</p>
          </a>
        </div>
      </div>

      <div className="w-1/2 p-4 ">
        <div className="flex justify-end">
          <div className="py-2">
            <div className="h-32 p-3">
              <a
                href="/about"
              >
                <p className="text-lg font-semibold">About</p>
              </a>
            </div>
          </div>

          <div className="py-2">
            <div className="h-32 p-3">
              <a
                href="/projects"
              >
                <p className="text-lg font-semibold">Projects</p>
              </a>
            </div>
          </div>

          <div className="py-2">
            <div className="h-32 p-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-lg font-semibold">Resume</p>
              </a>
            </div>
          </div>

          <div className="pt-5 pl-2">
            <Image
              src={theme === 'dark' ? '/assets/moon.svg' : '/assets/sun.svg'}
              alt="Light/Dark Mode"
              width={24}
              height={24}
              onClick={() => ((theme === 'dark') ? setTheme('light') : setTheme('dark'))}
              className="dark:invert"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
