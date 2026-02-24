"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  RocketIcon,
  MagicWand01Icon,
  Layers01Icon,
  CompassIcon,
  LayoutLeftIcon,
} from "@hugeicons/core-free-icons";
import { LinkPreview } from "@/components/tool-ui/link-preview";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

const GHOST = [
  "[&>div]:bg-transparent",
  "[&>div]:border-dashed",
  "[&>div]:border-border/50",
  "[&>div]:shadow-none",
  "[&>div]:transition-all",
  "[&>div]:duration-300",
  "[&>div]:ease-out",
  "[&>div]:hover:bg-muted/20",
  "[&>div]:hover:border-solid",
  "[&>div]:hover:border-border",
  "[&>div]:hover:shadow-lg",
  "[&>div]:hover:-translate-y-0.5",
].join(" ");

const HEADING = "font-[family-name:var(--font-poppins)] font-semibold tracking-tight";

const sections = [
  {
    icon: RocketIcon,
    label: "Getting started",
    preview: {
      id: "e-1",
      href: "https://nextjs.org/docs/app/getting-started/installation",
      title: "Next.js App Router — Installation",
      description:
        "System requirements, automatic installation, and project structure for building with the Next.js App Router.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      domain: "nextjs.org",
      favicon: "https://nextjs.org/favicon.ico",
      ratio: "16:9" as const,
    },
  },
  {
    icon: MagicWand01Icon,
    label: "Styling",
    preview: {
      id: "e-2",
      href: "https://tailwindcss.com/docs/installation/using-vite",
      title: "Tailwind CSS — Using Vite",
      description:
        "Install Tailwind CSS in your project using the Vite build tool. Get up and running in minutes with a modern workflow.",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
      domain: "tailwindcss.com",
      favicon: "https://tailwindcss.com/favicons/favicon.ico",
      ratio: "4:3" as const,
    },
  },
  {
    icon: Layers01Icon,
    label: "Components",
    preview: {
      id: "e-3",
      href: "https://ui.shadcn.com/docs",
      title: "shadcn/ui",
      description:
        "Beautifully designed components that you can copy and paste into your apps.",
      domain: "ui.shadcn.com",
      ratio: "16:9" as const,
    },
  },
  {
    icon: CompassIcon,
    label: "Quick start",
    preview: {
      id: "e-4",
      href: "https://www.tool-ui.com/docs/quick-start",
      title: "Tool UI — Quick Start",
      description:
        "Display-first AI tool components. Install from the registry, return structured data from your tool, and render the matching component.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      domain: "tool-ui.com",
      ratio: "1:1" as const,
    },
  },
];

export default function EditorialPage() {
  return (
    <main className={`${poppins.variable} min-h-screen bg-background px-6 py-16`}>
      <div className="mx-auto max-w-3xl space-y-12">

        <header className="space-y-4">
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Default</Link>
            <Link href="/ghost" className="hover:text-foreground transition-colors">Ghost</Link>
            <span className="text-foreground font-medium">Editorial</span>
          </nav>
          <div className="space-y-2">
            <h1 className={`${HEADING} text-3xl`}>
              tool-ui showcase — editorial
            </h1>
            <p className="text-muted-foreground">
              Ghost components · Poppins headlines ·{" "}
              <a
                href="https://hugeicons.com"
                className="underline underline-offset-4"
              >
                Hugeicons
              </a>{" "}
              section labels.
            </p>
          </div>
        </header>

        {sections.map(({ icon, label, preview }) => (
          <section key={preview.id} className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <HugeiconsIcon
                icon={icon}
                size={18}
                color="currentColor"
                strokeWidth={1.5}
              />
              <h2 className={`${HEADING} text-xl text-foreground`}>{label}</h2>
            </div>
            <LinkPreview {...preview} className={GHOST} />
          </section>
        ))}

        <section className="space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <HugeiconsIcon
              icon={LayoutLeftIcon}
              size={18}
              color="currentColor"
              strokeWidth={1.5}
            />
            <h2 className={`${HEADING} text-xl text-foreground`}>Side by side</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <LinkPreview {...sections[0].preview} id="e-grid-1" className={GHOST} />
            <LinkPreview {...sections[2].preview} id="e-grid-2" className={GHOST} />
          </div>
        </section>

      </div>
    </main>
  );
}
