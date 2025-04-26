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

        <p>So, please meet <b>Nomadicards</b>, a card game designed for digital nomads<br/>
        who want to go beyond small talk and explore different aspects of their life<br/>
        through <b>engaging, thought-provoking, and entertaining scenarios</b>.</p>

        <p><b>Nomadicards</b> are a side project by Francesco, a seasoned nomad<br/>
        who loves deep conversations. Until a few weeks ago, you could find<br/>
        <b>Nomadicards</b> only in Francesco&apos;s bedroom, but they started traveling<br/>
        and now you can find them in the coolest coliving spaces on the planet:</p>

        <ul className="ml-3">
          <li>• <a href="https://www.altcoliving.com/" className="font-bold" target="_blank">Alt_ Chiang Mai (Thailand)</a> 🐘 🇹🇭</li>
          <li>• <a href="https://hubhoian.com/" className="font-bold" target="_blank">Hub Hoi Han (Vietnam)</a> 🍜 🇻🇳</li>
          <li>• <a href="https://colivingsemkovo.com/" className="font-bold" target="_blank">Coliving Semkovo (Bulgaria)</a> ⛰️ 🇧🇬</li>
          <li>• <a href="https://www.outsite.co/locations/madeira-ponta-do-sol" className="font-bold" target="_blank">Outsite Ponta do Sol (Madeira)</a> 🍌 🇵🇹</li>
          <li>• More to come... 🌎</li>
        </ul>


        <p><b>Nomadicards</b> are not for sale, but if you run a coliving space you can get<br/>
        a <b>free deck</b> if you are willing to cover the shipping cost! Just <a href="mailto:info@francescocarlucci.com?subject=I want Nomadicards please!" className="underline">email Francesco</a><br/>
        and we will arrange it ☺️</p>

        <p>And if you really can&apos;t wait to play, scroll down this page and get a digital<br/>
        version! But remember, nomadicards are meant to be played in person — to think,<br/>
        to laugh, and to cry together ✨</p>

        <h3 className="text-lg font-bold">Nomadic-friends who like Nomadi-cards:</h3>

        <ul className="ml-3">
          <li>• <a href="https://www.thedigitalnomad.site/subscribe" className="font-bold" target="_blank">The Digital Nomad</a></li>
          <li>• <a href="https://www.mapmelon.com/" className="font-bold" target="_blank">Mapmelon 🍉</a></li>
          <li>• <a href="https://remotebase.co/" className="font-bold" target="_blank">RemoteBase</a></li>
          <li>• <a href="https://www.nomadgossip.com/nomad_directory" className="font-bold" target="_blank">Nomad Gossip Magazine</a></li>
        </ul>
        
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
