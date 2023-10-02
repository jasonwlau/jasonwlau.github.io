import Image from 'next/image';

export default function Header() {
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

          <div className="pb-3 px-3">
            <div className="h-32">
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
        </div>
      </div>
    </div>
  );
}
