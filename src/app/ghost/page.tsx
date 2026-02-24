import Link from "next/link";
import { LinkPreview } from "@/components/tool-ui/link-preview";

const GHOST = [
  // base ghost surface
  "[&>div]:bg-transparent",
  "[&>div]:border-dashed",
  "[&>div]:border-border/50",
  "[&>div]:shadow-none",
  // smooth transition on all changing properties
  "[&>div]:transition-all",
  "[&>div]:duration-300",
  "[&>div]:ease-out",
  // hover: fill appears, border solidifies, shadow blooms
  "[&>div]:hover:bg-muted/20",
  "[&>div]:hover:border-solid",
  "[&>div]:hover:border-border",
  "[&>div]:hover:shadow-lg",
  // hover: subtle upward lift
  "[&>div]:hover:-translate-y-0.5",
].join(" ");

const previews = [
  {
    id: "g-1",
    href: "https://nextjs.org/docs/app/getting-started/installation",
    title: "Next.js App Router — Installation",
    description:
      "System requirements, automatic installation, and project structure for building with the Next.js App Router.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    domain: "nextjs.org",
    favicon: "https://nextjs.org/favicon.ico",
    ratio: "16:9" as const,
  },
  {
    id: "g-2",
    href: "https://tailwindcss.com/docs/installation/using-vite",
    title: "Tailwind CSS — Using Vite",
    description:
      "Install Tailwind CSS in your project using the Vite build tool. Get up and running in minutes with a modern workflow.",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
    domain: "tailwindcss.com",
    favicon: "https://tailwindcss.com/favicons/favicon.ico",
    ratio: "4:3" as const,
  },
  {
    id: "g-3",
    href: "https://ui.shadcn.com/docs",
    title: "shadcn/ui",
    description:
      "Beautifully designed components that you can copy and paste into your apps.",
    domain: "ui.shadcn.com",
    ratio: "16:9" as const,
  },
  {
    id: "g-4",
    href: "https://www.tool-ui.com/docs/quick-start",
    title: "Tool UI — Quick Start",
    description:
      "Display-first AI tool components. Install from the registry, return structured data from your tool, and render the matching component.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    domain: "tool-ui.com",
    ratio: "1:1" as const,
  },
];

export default function GhostPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-12">
        <header className="space-y-4">
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Default
            </Link>
            <span className="text-foreground font-medium">Ghost</span>
            <Link href="/editorial" className="hover:text-foreground transition-colors">
              Editorial
            </Link>
          </nav>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">
              tool-ui showcase — ghost
            </h1>
            <p className="text-muted-foreground">
              Same{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-sm font-mono">
                LinkPreview
              </code>{" "}
              component with{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-sm font-mono">
                className
              </code>{" "}
              overrides applied via{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-sm font-mono">
                [&gt;div]:
              </code>{" "}
              child selectors.
            </p>
          </div>
        </header>

        <section className="space-y-6">
          <h2 className="text-xl font-medium">With image — 16:9</h2>
          <LinkPreview {...previews[0]} className={GHOST} />
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-medium">With image — 4:3</h2>
          <LinkPreview {...previews[1]} className={GHOST} />
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-medium">No image</h2>
          <LinkPreview {...previews[2]} className={GHOST} />
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-medium">With image — 1:1 (square)</h2>
          <LinkPreview {...previews[3]} className={GHOST} />
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-medium">Side by side</h2>
          <div className="flex flex-wrap gap-4">
            <LinkPreview {...previews[0]} id="g-grid-1" className={GHOST} />
            <LinkPreview {...previews[2]} id="g-grid-2" className={GHOST} />
          </div>
        </section>
      </div>
    </main>
  );
}
