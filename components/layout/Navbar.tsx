"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations("Navbar");

  const [menuOpen, setMenuOpen] = useState(false);

  const otherLocale = locale === "es" ? "en" : "es";

  const home = `/${locale}`;

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="relative mx-auto max-w-7xl border-b border-[var(--dcv-border)] px-6 py-4 lg:px-8">
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <Link
          href={home}
          className="flex items-center"
          onClick={closeMenu}
        >
          <Image
            src="/logo-dcv.png"
            alt="DCV Corporation"
            width={140}
            height={45}
            priority
            className="h-auto w-[105px] object-contain sm:w-[120px] md:w-[140px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 text-sm text-[var(--dcv-text-muted)] md:flex">
          <Link
            href={`${home}#nosotros`}
            className="transition hover:text-[var(--dcv-gold)]"
          >
            {t("about")}
          </Link>

          <Link
            href={`${home}#ecosistema`}
            className="transition hover:text-[var(--dcv-gold)]"
          >
            {t("ecosystem")}
          </Link>

          <Link
            href={`${home}#roadmap`}
            className="transition hover:text-[var(--dcv-gold)]"
          >
            {t("roadmap")}
          </Link>

          <Link
            href={`${home}/contacto`}
            className="transition hover:text-[var(--dcv-gold)]"
          >
            {t("contact")}
          </Link>
        </div>

        {/* DESKTOP RIGHT SIDE */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={`/${otherLocale}`}
            className="text-xs font-medium text-[var(--dcv-text-muted)] transition hover:text-[var(--dcv-gold)]"
          >
            {otherLocale.toUpperCase()}
          </Link>

          <Link
            href={`${home}#ecosistema`}
            className="rounded-full border border-[var(--dcv-gold)]/40 px-4 py-2 text-sm text-[var(--dcv-white)] transition hover:border-[var(--dcv-gold)] hover:bg-[var(--dcv-gold)] hover:text-[var(--dcv-black)]"
          >
            {t("explore")}
          </Link>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-3 md:hidden">

          {/* LANGUAGE */}
          <Link
            href={`/${otherLocale}`}
            className="text-xs font-medium text-[var(--dcv-text-muted)] transition hover:text-[var(--dcv-gold)]"
            onClick={closeMenu}
          >
            {otherLocale.toUpperCase()}
          </Link>

          {/* MENU BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--dcv-gold)]/40 text-[var(--dcv-white)] transition hover:border-[var(--dcv-gold)] hover:text-[var(--dcv-gold)]"
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`block h-px w-5 bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />

              <span
                className={`block h-px w-5 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`block h-px w-5 bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-[var(--dcv-border)] md:hidden">
          <div className="flex flex-col py-5">

            <Link
              href={`${home}#nosotros`}
              onClick={closeMenu}
              className="border-b border-[var(--dcv-border)] py-4 text-sm text-[var(--dcv-text-muted)] transition hover:text-[var(--dcv-gold)]"
            >
              {t("about")}
            </Link>

            <Link
              href={`${home}#ecosistema`}
              onClick={closeMenu}
              className="border-b border-[var(--dcv-border)] py-4 text-sm text-[var(--dcv-text-muted)] transition hover:text-[var(--dcv-gold)]"
            >
              {t("ecosystem")}
            </Link>

            <Link
              href={`${home}#roadmap`}
              onClick={closeMenu}
              className="border-b border-[var(--dcv-border)] py-4 text-sm text-[var(--dcv-text-muted)] transition hover:text-[var(--dcv-gold)]"
            >
              {t("roadmap")}
            </Link>

            <Link
              href={`${home}/contacto`}
              onClick={closeMenu}
              className="border-b border-[var(--dcv-border)] py-4 text-sm text-[var(--dcv-text-muted)] transition hover:text-[var(--dcv-gold)]"
            >
              {t("contact")}
            </Link>

            <Link
              href={`${home}#ecosistema`}
              onClick={closeMenu}
              className="mt-5 rounded-full border border-[var(--dcv-gold)]/40 px-4 py-3 text-center text-sm text-[var(--dcv-white)] transition hover:border-[var(--dcv-gold)] hover:bg-[var(--dcv-gold)] hover:text-[var(--dcv-black)]"
            >
              {t("explore")}
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}