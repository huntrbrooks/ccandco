import Link from "next/link";
import { getAddressLine, getInstagramUrl, siteConfig, footerLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal pb-24 pt-14 text-cream lg:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Link href="/" className="inline-flex flex-col">
            <span className="font-serif text-4xl tracking-[0.18em]">
              CC & CO.
            </span>
            <span className="mt-2 text-xs uppercase tracking-[0.48em] text-champagne">
              Aesthetics
            </span>
          </Link>
          <p className="mt-6 max-w-md text-sm leading-7 text-cream/75">
            Premium boutique beauty in Elwood, Melbourne, focused on natural
            confidence, precision care and an elevated client experience.
          </p>
          <a
            href={getInstagramUrl()}
            className="mt-5 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-champagne hover:text-cream"
            target="_blank"
            rel="noreferrer"
          >
            Instagram: @{siteConfig.instagramHandle}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-champagne">
            Explore
          </h2>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/75 transition hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-champagne">
            Service Area
          </h2>
          <p className="mt-5 text-sm leading-7 text-cream/75">
            {getAddressLine()}
          </p>
          <dl className="mt-5 space-y-2 text-sm text-cream/75">
            {siteConfig.hours.map((item) => (
              <div key={item.label} className="flex justify-between gap-4">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 text-xs text-cream/55 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {siteConfig.legalName}. All rights
        reserved.
      </div>
    </footer>
  );
}
