const languages = new Set(["en", "fr", "ja", "es", "de", "zh-TW", "ko"]);
const pages = new Set(["privacy", "terms", "cookie-settings", "guide", "family-zoo", "blog", "quick", "routes", "map", "reviews"]);

function isAppRoute(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return true;
  if (languages.has(parts[0])) return parts.length === 1 || (parts.length === 2 && pages.has(parts[1]));
  return parts.length === 1 && pages.has(parts[0]);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (isAppRoute(url.pathname)) {
      const root = new URL("/", url);
      return env.ASSETS.fetch(new Request(root, request));
    }
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;
    const headers = new Headers(response.headers);
    headers.set("X-Robots-Tag", "noindex");
    return new Response(response.body, { status: 404, headers });
  },
};
