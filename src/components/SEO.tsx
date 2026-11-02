import { parseLanguage } from "@/lib/language";
import { Helmet } from "react-helmet-async";
import translations from "@/assets/translations.json";

interface SEOProps {
  currentLang: string;
  path: string; // Should be like "" for home, "/privacy" for privacy policy, etc.
  customMeta?: { title: string; description: string; };
  robots?: string;
  alternateLangs?: readonly string[];
}

const DOMAIN = "https://www.falaisesdecassis.com";
const SUPPORTED_LANGS = ["en", "fr", "ja", "es", "de", "zh-TW", "ko"];

export function SEO({ currentLang, path, customMeta, robots, alternateLangs = SUPPORTED_LANGS }: SEOProps) {
  // Ensure path starts with a slash or is empty
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const cleanPath = normalizedPath === "/" ? "" : normalizedPath;

  const defaultUrl = `${DOMAIN}${cleanPath}`;

  // Dynamically set title based on language and path
  const t = translations[parseLanguage(currentLang) ?? "en"] || translations.en;
  let pageTitle = t.title || "Falaises de Cassis";
  
  if (customMeta?.title) pageTitle = customMeta.title;
  else if (cleanPath === "/privacy") pageTitle = `${t.compliance?.privacy?.title || "Privacy Policy"} - ${pageTitle}`;
  else if (cleanPath === "/terms") pageTitle = `${t.compliance?.terms?.title || "Terms of Service"} - ${pageTitle}`;
  else if (cleanPath === "/cookie-settings") pageTitle = `${t.compliance?.settings?.title || "Cookie Settings"} - ${pageTitle}`;

  const pageDescription = customMeta?.description || t.hero?.description || "";

  return (
    <Helmet>
      {/* Title */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {robots ? <meta name="robots" content={robots} /> : null}
      
      {/* Language */}
      <html lang={currentLang} />

      {/* Self-referencing canonical */}
      <link rel="canonical" href={currentLang === 'en' ? defaultUrl : `${DOMAIN}/${currentLang}${cleanPath}`} />

      {/* Default (fallback) language */}
      <link rel="alternate" hrefLang="x-default" href={defaultUrl} />

      {/* Language alternates */}
      {alternateLangs.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={lang === 'en' ? defaultUrl : `${DOMAIN}/${lang}${cleanPath}`}
        />
      ))}
    </Helmet>
  );
}
