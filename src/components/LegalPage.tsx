import Link from "next/link";
import { business, legalLinks } from "@/data/business";

export const LEGAL_UPDATED = "16 October 2026";

export type LegalSection = { heading: string; body: (string | string[])[] };

/** Shared layout for Privacy, Terms and Cookie pages — server-rendered, no JS. */
export default function LegalPage({
  title,
  intro,
  sections,
  current,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
  current: string;
}) {
  return (
    <>
      <section className="bg-burgundy-dark pb-14 pt-32 sm:pb-16 sm:pt-36">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Legal</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-cream sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-cream/60">Last updated: {LEGAL_UPDATED}</p>
        </div>
      </section>

      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_240px] lg:px-10">
          <article className="min-w-0 text-burgundy-dark/80">
            <p className="text-base leading-relaxed">{intro}</p>

            {sections.map((s, i) => (
              <div key={s.heading} className="mt-10">
                <h2 className="font-display text-2xl text-burgundy-dark">
                  {i + 1}. {s.heading}
                </h2>
                {s.body.map((b, j) =>
                  Array.isArray(b) ? (
                    <ul key={j} className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed sm:text-base">
                      {b.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={j} className="mt-3 text-sm leading-relaxed sm:text-base">
                      {b}
                    </p>
                  )
                )}
              </div>
            ))}

            <div className="mt-12 rounded-2xl border border-burgundy/10 bg-white p-6">
              <h2 className="font-display text-xl text-burgundy-dark">Contact us</h2>
              <p className="mt-2 text-sm leading-relaxed">
                {business.name}
                <br />
                {business.addressSingleLine}
                <br />
                Phone:{" "}
                <a href={`tel:${business.phoneIntl}`} className="font-semibold text-burgundy hover:underline">
                  {business.phone}
                </a>
                <br />
                Email:{" "}
                <a href={`mailto:${business.email}`} className="break-all font-semibold text-burgundy hover:underline">
                  {business.email}
                </a>
              </p>
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-widest text-burgundy-dark/50">Policies</p>
            <ul className="mt-3 space-y-2 text-sm">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={l.href === current ? "page" : undefined}
                    className={l.href === current ? "font-semibold text-burgundy" : "text-burgundy-dark/70 hover:text-burgundy"}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-burgundy-dark/70 hover:text-burgundy">
                  Contact
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
