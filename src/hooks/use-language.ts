import { useEffect, useState } from "react";
import { parseLanguage, type Language } from "@/lib/language";

export function useLanguage(initialLang?: Language) {
  const [lang, setLang] = useState<Language>(() => initialLang ?? parseLanguage(localStorage.getItem("app-lang")) ?? "en");
  // The route language remains authoritative, matching the page routing behavior.
  if (initialLang && initialLang !== lang) setLang(initialLang);
  useEffect(() => { localStorage.setItem("app-lang", lang); }, [lang]);
  return [lang, setLang] as const;
}
