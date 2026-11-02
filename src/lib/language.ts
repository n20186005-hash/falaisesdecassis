import translations from "@/assets/translations.json";
export type Language = keyof typeof translations;
export function parseLanguage(value: string | null | undefined): Language | undefined {
  return value && Object.hasOwn(translations, value) ? value as Language : undefined;
}
