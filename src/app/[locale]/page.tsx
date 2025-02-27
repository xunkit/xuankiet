import Clock from "@/components/Clock";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageList from "@/components/LanguageList";

export default function Home() {
  const t = useTranslations("Page-Home");

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
            {t("bio")}
          </p>
        </div>
        <div className="homepage-grid-njz">
          <Image
            src="/newjeans_flower.png"
            height={150}
            width={150}
            alt="Newjeans Murakami Flower"
          />
          <p className="text-center">{t("hobby")}</p>
        </div>
        <div className="homepage-grid-time flex flex-col gap-4">
          <p>{t("timeLabel")}</p>
          <Clock />
        </div>
        <div className="homepage-grid-languages">
          <ul className="flex flex-col items-center justify-center h-[100%] py-8 gap-4">
            <p>{t("languageLabel")}</p>
            <LanguageList />
          </ul>
        </div>
      </div>
    </main>
  );
}
