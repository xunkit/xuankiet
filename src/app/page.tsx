import Clock from "@/components/Clock";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-2 py-4">
      <div className="homepage-grid">
        <div className="homepage-grid-name">
          <p className="name-styled-text text-6xl xl:text-9xl tracking-tighter area">
            xuân kiệt
          </p>
        </div>
        <div className="homepage-grid-bio">
          <p className="styled-text text-3xl xl:text-5xl leading-snug tracking-tighter">
            I&apos;m a web developer who likes creating useful stuff.
          </p>
        </div>
        <div className="homepage-grid-njz">
          <Image
            src="/newjeans_flower.png"
            height={150}
            width={150}
            alt="Newjeans Murakami Flower"
          />
          <p>I like NJZ! (NewJeans)</p>
        </div>
        <div className="homepage-grid-time flex flex-col gap-4">
          <p>Local time</p>
          <Clock />
        </div>
        <div className="homepage-grid-languages">
          <ul className="flex flex-col items-center justify-center h-[100%] py-8 gap-4">
            <p>I speak</p>
            <div className="flex flex-col gap-1 xl:gap-4 text-center tracking-tighter">
              <li className="styled-text text-3xl xl:text-5xl">English</li>
              <li className="styled-text text-3xl xl:text-5xl">Tiếng Việt</li>
              <li className="styled-text text-3xl xl:text-5xl">日本語</li>
            </div>
          </ul>
        </div>
      </div>
    </main>
  );
}
