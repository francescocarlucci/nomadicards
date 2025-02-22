import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <Image
          className=""
          src="/nomadicards_logo.png"
          alt=""
          width={280}
          height={100}
        />

        <p>What’s your name?<br/>
        Where are you from?<br/>
        What do you do?</p>

        <p>This is how every conversation between digital nomads starts,<br/>
        but sometimes we need more than that!</p>

        <p>So, please meet <b>nomadicards</b>, a card game designed for digital nomads<br/>
        who want to go beyond small talk and explore different aspects of their life<br/>
        through <b>engaging, thought-provoking, and entertaining scenarios</b>.</p>

        <p>Free for everyone :)</p>
        
        <Image
          className="rounded-lg"
          src="/nomadicards_1.jpg"
          alt=""
          width={500}
          height={300}
        />

        <Image
          className="rounded-lg"
          src="/nomadicards_2.jpg"
          alt=""
          width={500}
          height={300}
        />

        <Image
          className="rounded-lg"
          src="/nomadicards_3.jpg"
          alt=""
          width={500}
          height={300}
        />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/Nomadicards_v0_online.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Online Version
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/Nomadicards_v0_print.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Printable Version
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Created by Frenxi →
        </a>
      </footer>
    </div>
  );
}
