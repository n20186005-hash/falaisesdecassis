import { Helmet } from "react-helmet-async";
import translations from "@/assets/translations.json";

interface SEOProps {
  currentLang: string;
  path: string; // Should be like "" for home, "/privacy" for privacy policy, etc.
}

const DOMAIN = "https://www.falaisesdecassis.com";
const SUPPORTED_LANGS = ["en", "fr", "ja", "es", "de", "zh-TW", "ko"];

export function SEO({ currentLang, path }: SEOProps) {
  // Ensure path starts with a slash or is empty
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const cleanPath = normalizedPath === "/" ? "" : normalizedPath;

  const currentUrl = `${DOMAIN}/${currentLang === 'en' ? '' : currentLang}${cleanPath}`;
  const defaultUrl = `${DOMAIN}${cleanPath}`;

  // Dynamically set title based on language and path
  const t = (translations as any)[currentLang] || translations.en;
  let pageTitle = t.title || "Falaises de Cassis";
  
  if (cleanPath === "/privacy") pageTitle = `${t.compliance?.privacy?.title || "Privacy Policy"} - ${pageTitle}`;
  else if (cleanPath === "/terms") pageTitle = `${t.compliance?.terms?.title || "Terms of Service"} - ${pageTitle}`;
  else if (cleanPath === "/cookie-settings") pageTitle = `${t.compliance?.settings?.title || "Cookie Settings"} - ${pageTitle}`;

  return (
    <Helmet>
      {/* Title */}
      <title>{pageTitle}</title>
      <meta name="description" content={t.hero?.description || ""} />
      
      {/* Language */}
      <html lang={currentLang} />

      {/* Self-referencing canonical */}
      <link rel="canonical" href={currentLang === 'en' ? defaultUrl : `${DOMAIN}/${currentLang}${cleanPath}`} />

      {/* Default (fallback) language */}
      <link rel="alternate" hrefLang="x-default" href={defaultUrl} />

      {/* Language alternates */}
      {SUPPORTED_LANGS.map((lang) => (
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
