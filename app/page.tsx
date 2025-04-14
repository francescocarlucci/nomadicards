import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">

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

        <p>So, please meet 💬 <b>nomadicards</b>, a card game designed for digital nomads<br/>
        who want to go beyond small talk and explore different aspects of their life<br/>
        through <b>engaging, thought-provoking, and entertaining scenarios</b>.</p>

        <p>💬 <b>nomadicards</b> are a side project by Francesco, a seasoned nomad<br/>
        who loves deep conversations. They are not for sale, but you can request<br/>
        a <b>free deck</b> by <a href="mailto:info@francescocarlucci.com" className="underline">shooting him an email</a> (especially if you run a coliving)! ☺️</p>

        <p>And if you really can&apos;t wait to play, scroll down this page and get a digital<br/>
        version! But remember, nomadicards are meant to be played in person — to think,<br/>
        to laugh, and to cry together ✨</p>
        
        <Image
          className="rounded-lg"
          src="/images/1.jpg"
          alt="Nomadicards preview 1"
          width={500}
          height={300}
        />

        <Image
          className="rounded-lg"
          src="/images/2.jpg"
          alt="Nomadicards preview 2"
          width={500}
          height={300}
        />

        <Image
          className="rounded-lg"
          src="/images/3.jpg"
          alt="Nomadicards preview 3"
          width={500}
          height={300}
        />

        <Image
          className="rounded-lg"
          src="/images/4.jpg"
          alt="Nomadicards preview 4"
          width={500}
          height={300}
        />

        <Image
          className="rounded-lg"
          src="/images/5.jpg"
          alt="Nomadicards preview 5"
          width={500}
          height={300}
        />

        <Image
          className="rounded-lg"
          src="/images/6.jpg"
          alt="Nomadicards preview 6"
          width={500}
          height={300}
        />

        <Image
          className="rounded-lg"
          src="/images/7.jpg"
          alt="Nomadicards preview 7"
          width={500}
          height={300}
        />

        <Image
          className="rounded-lg"
          src="/images/8.jpg"
          alt="Nomadicards preview 8"
          width={500}
          height={300}
        />

        <Image
          className="rounded-lg"
          src="/images/9.jpg"
          alt="Nomadicards preview 9"
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
          href="https://francescocarlucci.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          A project by: francescocarlucci.com
        </a>
      </footer>
    </div>
  );
}
