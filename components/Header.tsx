"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function updateHeaderDepth() {
      setHasScrolled(window.scrollY > 8);
    }

    updateHeaderDepth();
    window.addEventListener("scroll", updateHeaderDepth, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderDepth);
  }, []);

  return (
    <>
      <div className="bg-charcoal px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-cream">
        {siteConfig.announcement}
      </div>
      <header
        className={cn(
          "sticky top-0 z-40 border-b border-border/70 bg-ivory/88 backdrop-blur-xl transition-shadow duration-300",
          hasScrolled && "shadow-[0_12px_40px_rgba(94,70,56,0.08)]",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group inline-flex flex-col leading-none text-charcoal"
            aria-label="CC & CO home"
          >
            <span className="font-serif text-3xl font-semibold tracking-[0.16em]">
              CC & CO.
            </span>
            <span className="mt-1 text-[0.62rem] uppercase tracking-[0.48em] text-taupe">
              Aesthetics
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {siteConfig.navigation.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground transition hover:text-primary",
                      pathname === item.href && "text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/book" size="sm">
              Book Now
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-charcoal lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen ? "true" : "false"}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {isOpen ? (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-border bg-ivory px-4 py-5 lg:hidden"
          >
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal hover:bg-secondary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>
      <ButtonLink
        href="/book"
        className="fixed inset-x-4 bottom-4 z-50 h-12 shadow-2xl lg:hidden"
      >
        Book Now
      </ButtonLink>
    </>
  );
}
