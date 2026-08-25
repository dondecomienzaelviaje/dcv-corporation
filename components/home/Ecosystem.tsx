"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const ecosystemItems = [
  {
    key: "id",
    number: "01",
    href: "https://id.dcvcorp.com/",
    external: true,
  },
  {
    key: "portal",
    number: "02",
    href: "#",
    external: false,
  },
  {
    key: "shop",
    number: "03",
    href: "https://shop.dcvcorp.com/",
    external: true,
  },
  {
    key: "trading",
    number: "04",
    href: "#",
    external: false,
  },
];

export default function Ecosystem() {
  const t = useTranslations("Ecosystem");

  return (
    <section
      id="ecosistema"
      className="border-t border-black/10 bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#C9A227]">
            {t("label")}
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-black md:text-6xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-black/60 md:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-2">
          {ecosystemItems.map((item) => (
            <article
              key={item.key}
              className="group relative bg-white p-8 transition-all duration-500 hover:bg-[#faf9f5] md:p-10"
            >
              <div className="absolute left-0 top-0 h-0 w-1 bg-[#C9A227] transition-all duration-500 group-hover:h-full" />

              <div className="flex min-h-[280px] flex-col justify-between">

                <div>
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-xs font-medium tracking-[0.2em] text-[#C9A227]">
                      {item.number}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-black/10 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#C9A227]" />
                  </div>

                  <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-black/40">
                    {t(`items.${item.key}.category`)}
                  </p>

                  <h3 className="text-3xl font-semibold tracking-tight text-black transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
                    {t(`items.${item.key}.name`)}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-black/60 md:text-base">
                    {t(`items.${item.key}.description`)}
                  </p>
                </div>

                {item.external ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-medium text-black transition-all duration-300 group-hover:gap-4"
                  >
                    <span>{t("visit")}</span>

                    <span
                      aria-hidden="true"
                      className="text-[#C9A227] transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                ) : (
                  <span className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-medium text-black/30">
                    {t("comingSoon")}
                    <span className="text-black/20">→</span>
                  </span>
                )}

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}