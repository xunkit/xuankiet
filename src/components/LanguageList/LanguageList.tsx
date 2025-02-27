"use client";

import { localeOptions } from "@/constants";
// import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "motion/react";

interface LanguageButtonProps {
  locale: string;
  language: string;
  onClick: (locale: string) => void;
  isLoading: boolean;
}

const LanguageButton = ({
  locale,
  language,
  onClick,
  isLoading,
}: LanguageButtonProps) => {
  return (
    <motion.button
      type="button"
      onClick={() => onClick(locale)}
      className="styled-text text-3xl xl:text-5xl"
      disabled={isLoading}
      whileHover={{ scale: 1.1 }}
    >
      {language}
    </motion.button>
  );
};

export default function LanguageList() {
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter();
  // const localActive = useLocale(); >>> THIS IS FOR GETTING THE CURRENT LOCALE. NOT SURE WHAT TO USE IT FOR RN.

  const handleChangeLanguage = (nextLocale: string) => {
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <div
      // defaultValue={localActive}
      className="flex flex-col gap-1 xl:gap-4 text-center tracking-tighter"
    >
      {localeOptions.map(({ locale, language }) => (
        <LanguageButton
          locale={locale}
          language={language}
          isLoading={isPending}
          onClick={() => {
            handleChangeLanguage(locale);
          }}
          key={locale}
        />
      ))}
    </div>
  );
}
