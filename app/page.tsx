import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-row items-center justify-between pt-48">
        <h1 className="text-4xl">
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
        <div className="pb-3 pr-2">
          <a
            href="https://linkedin.com"
            className="group px-5 py-4 "
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
            href="https://github.com"
            className="group px-5 py-4 "
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
        {/*
          <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
            <h2 className="mb-3 text-2xl font-semibold">
              Lights
            </h2>
          </div>
        */}
      </div>
    </main>
  );
}
