import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface LinkItem {
  name: string;
  url: string;
}

interface RecommendationsProps {
  translations: {
    attractions_title: string;
    routes_title: string;
    attractions: LinkItem[];
    routes: LinkItem[];
  };
}

export function Recommendations({ translations }: RecommendationsProps) {
  if (!translations) return null;

  return (
    <div className="mt-12 space-y-10 border-t border-border/50 pt-10">
      {/* Attractions Section */}
      <div>
        <div className="mb-5 flex items-center gap-3">
          <Badge variant="secondary" className="bg-accent/10 text-[oklch(var(--accent))]">
            Location
          </Badge>
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            {translations.attractions_title}
          </h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {translations.attractions.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border/50 bg-card/50 p-4 transition-all hover:border-[oklch(var(--accent))]/40 hover:bg-accent/5"
            >
              <span className="font-medium text-foreground/90 transition-colors group-hover:text-[oklch(var(--accent))]">
                {item.name}
              </span>
              <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-[oklch(var(--accent))]" />
            </a>
          ))}
        </div>
      </div>

      {/* Routes Section */}
      <div>
        <div className="mb-5 flex items-center gap-3">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Tours
          </Badge>
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            {translations.routes_title}
          </h3>
        </div>
        <div className="grid gap-3">
          {translations.routes.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border/50 bg-card/50 p-4 transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              <span className="font-medium text-foreground/90 transition-colors group-hover:text-primary">
                {item.name}
              </span>
              <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
