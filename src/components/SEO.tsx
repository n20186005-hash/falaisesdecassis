import { Helmet } from "react-helmet-async";

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

  // Construct URLs
  // For standard languages, we might use query params or assume the client routing handles it via state.
  // However, for SEO hreflang to work perfectly, usually each language needs a distinct URL path.
  // Since this app uses a single page with localStorage for language, true SEO indexing of multiple languages 
  // requires distinct URLs.
  // Let's implement URL structure assuming query parameter ?lang=xx is supported or using URL hashes.
  // But wait, the user asked for structure like:
  // <link rel="alternate" hreflang="en" href="https://*****.com/en/页面路径" />
  // We need to generate these links. Even if the current app routing doesn't fully support /en/ routing yet,
  // we will generate the tags as requested.
  
  const currentUrl = `${DOMAIN}/${currentLang === 'en' ? '' : currentLang}${cleanPath}`;
  const defaultUrl = `${DOMAIN}${cleanPath}`;

  return (
    <Helmet>
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
