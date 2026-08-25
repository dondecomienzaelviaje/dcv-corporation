import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const locale = await getLocale();

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">

        {/* BRAND + ECOSYSTEM + COMPANY */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center text-xl font-semibold tracking-tight"
            >
              <span className="text-white">DCV</span>
              <span className="ml-1 text-[var(--dcv-gold)]">
                CORPORATION
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
              {t("description")}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--dcv-gold)]" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--dcv-gold)]">
                {t("tagline")}
              </p>
            </div>
          </div>

          {/* ECOSYSTEM */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              {t("ecosystem.title")}
            </h3>

            <ul className="mt-6 space-y-4 text-sm">

              <li>
                <a
                  href="https://id.dcvcorp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-white/60 transition hover:text-[var(--dcv-gold)]"
                >
                  DCV ID
                  <span className="text-xs opacity-0 transition group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              </li>

              <li>
                <Link
                  href={`/${locale}#ecosistema`}
                  className="text-white/60 transition hover:text-[var(--dcv-gold)]"
                >
                  DCV Portal
                </Link>
              </li>

              <li>
                <a
                  href="https://shop.dcvcorp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-white/60 transition hover:text-[var(--dcv-gold)]"
                >
                  DCV Shop
                  <span className="text-xs opacity-0 transition group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              </li>

              <li>
                <Link
                  href={`/${locale}#ecosistema`}
                  className="text-white/30 transition hover:text-[var(--dcv-gold)]"
                >
                  DCV Trading
                </Link>
              </li>

            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              {t("company.title")}
            </h3>

            <ul className="mt-6 space-y-4 text-sm">

              <li>
                <Link
                  href={`/${locale}#nosotros`}
                  className="text-white/60 transition hover:text-[var(--dcv-gold)]"
                >
                  {t("company.about")}
                </Link>
              </li>

              <li>
                <Link
                  href={`/${locale}#ecosistema`}
                  className="text-white/60 transition hover:text-[var(--dcv-gold)]"
                >
                  {t("company.ecosystem")}
                </Link>
              </li>

              <li>
                <Link
                  href={`/${locale}#roadmap`}
                  className="text-white/60 transition hover:text-[var(--dcv-gold)]"
                >
                  {t("company.roadmap")}
                </Link>
              </li>

              <li>
                <Link
                  href={`/${locale}/contacto`}
                  className="text-white/60 transition hover:text-[var(--dcv-gold)]"
                >
                  {t("company.contact")}
                </Link>
              </li>

            </ul>
          </div>
        </div>

        {/* SOCIAL + CONTACT */}
        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2">

          {/* SOCIAL */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              {t("social.title")}
            </h3>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4 text-sm">

              {/* TIKTOK */}
             <a
  href="https://www.tiktok.com/@dondecomienzaelviaje"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/60 transition hover:text-[var(--dcv-gold)]"
>
  TikTok ↗
</a>

              {/* INSTAGRAM */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition hover:text-[var(--dcv-gold)]"
              >
                Instagram ↗
              </a>

              {/* FACEBOOK */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition hover:text-[var(--dcv-gold)]"
              >
                Facebook ↗
              </a>

              {/* LINKEDIN */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition hover:text-[var(--dcv-gold)]"
              >
                LinkedIn ↗
              </a>

              {/* YOUTUBE */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition hover:text-[var(--dcv-gold)]"
              >
                YouTube ↗
              </a>

              {/* X */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition hover:text-[var(--dcv-gold)]"
              >
                X ↗
              </a>

            </div>
          </div>

          {/* WHATSAPP */}
          <div className="md:text-right">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              {t("contact.title")}
            </h3>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-[var(--dcv-gold)]"
            >
              {t("contact.whatsapp")}
              <span>→</span>
            </a>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">

          <span>
            {t("copyright")}
          </span>

          <span className="text-white/20">
            {t("builtBy")}
          </span>

        </div>
      </div>
    </footer>
  );
}