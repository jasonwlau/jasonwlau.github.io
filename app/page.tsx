'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="min-w-full flex justify-end p-3">
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
      <div className="flex flex-row items-center justify-between pt-48">
        <h1 className="text-4xl font-extrabold">
          Jason Lau
        </h1>
      </div>
      <div className="flex flex-row items-center justify-between pt-10">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <a
            href="/about"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              About
            </h2>
          </a>
        </div>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <a
            href="/projects"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Projects
            </h2>
          </a>
        </div>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <a
            href="/resume.pdf"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Resume
            </h2>
          </a>
        </div>
        <div className="pb-3 pr-4">
          <a
            href="https://linkedin.com/in/jason--lau"
            className="group px-5 py-4"
          >
            <Image
              src="/assets/linkedin.svg"
              alt="LinkedIn Logo"
              width={32}
              height={32}
              className="dark:invert"
              priority
            />
          </a>
        </div>
        <div className="pb-3">
          <a
            href="https://github.com/jasonwlau"
            className="group px-5 py-4"
          >
            <Image
              src="/assets/github.svg"
              alt="GitHub Logo"
              width={32}
              height={32}
              className="dark:invert"
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
