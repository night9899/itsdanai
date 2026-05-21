"use client";

import { createContext, useContext, useEffect, useState } from "react";

import en from "@/content/en";
import th from "@/content/th";

type Language = "en" | "th";

const translations = {
  en,
  th,
};

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof en;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");

    if (savedLang === "en" || savedLang === "th") {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
