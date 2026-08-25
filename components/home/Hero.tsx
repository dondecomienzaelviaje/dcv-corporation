"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const VIDEO_SOURCE: "local" | "url" = "url";

const VIDEO_FILE = "/media/dcv-hero.mp4";

const VIDEO_URL = "https://media.dcvcorp.com/dcv-hero.mp4";

export default function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();

  const videoSrc =
    VIDEO_SOURCE === "local"
      ? VIDEO_FILE
      : VIDEO_URL;

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-black/10 bg-white"
    >
      {/* Decorative gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[var(--dcv-gold)]/5 blur-[120px]"
      />

      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1fr_0.75fr] lg:gap-12 lg:py-20">

        {/* TEXTO */}
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">
            {t("label")}
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-black sm:text-6xl lg:text-7xl">
            {t("title1")}
            <br />

            <span className="text-[var(--dcv-gold)]">
              {t("title2")}
            </span>

            <br />

            {t("title3")}
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-black/60 sm:text-lg">
            {t("description")}
          </p>

          {/* BOTONES */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/${locale}#ecosistema`}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--dcv-gold)] px-6 py-3 text-sm font-medium text-black transition duration-300 hover:scale-[1.02] hover:bg-[var(--dcv-gold-light)]"
            >
              {t("explore")}
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href={`/${locale}#nosotros`}
              className="inline-flex items-center rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-black transition duration-300 hover:border-black/30 hover:bg-black/5"
            >
              {t("about")}
            </Link>
          </div>
        </div>

        {/* VIDEO */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute h-[560px] w-[420px] rounded-[3rem] bg-[var(--dcv-gold)]/10 blur-[90px]"
          />

          <div className="relative w-full max-w-[420px]">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              <div className="relative aspect-[9/16] w-full">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                />

                <div className="pointer-events-none absolute bottom-5 left-5 right-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/60">
                    DCV Corporation
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    DCV Ecosystem
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between px-1">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--dcv-gold)]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/30">
                  Building the future
                </span>
              </div>

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/20">
                DCV
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}