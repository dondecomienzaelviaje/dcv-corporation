import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export default async function CTA() {
  const t = await getTranslations("CTA");
  const locale = await getLocale();

  return (
    <section
      id="contacto"
      className="border-t border-black/10 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">

        <div className="relative overflow-hidden bg-black px-7 py-16 md:px-14 md:py-20 lg:px-20 lg:py-24">

          {/* DECORATIVE ELEMENT */}
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[var(--dcv-gold)]/20"
          />

          <div
            aria-hidden="true"
            className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[var(--dcv-gold)]/30"
          />

          <div className="relative z-10">

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--dcv-gold)]" />

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--dcv-gold)]">
                {t("label")}
              </p>
            </div>

            <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              {t("title")}
            </h2>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">

              <Link
                href={`/${locale}/contacto`}
                className="inline-flex w-fit items-center gap-3 bg-[var(--dcv-gold)] px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-[var(--dcv-gold-light)]"
              >
                {t("contact")}
                <span
                  aria-hidden="true"
                  className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <span className="text-xs uppercase tracking-[0.18em] text-white/30">
                DCV Corporation
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}