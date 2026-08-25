import { getTranslations } from "next-intl/server";

export default async function Identity() {
  const t = await getTranslations("Identity");

  const pillars = [
    {
      key: "knowledge",
      number: "01",
    },
    {
      key: "technology",
      number: "02",
    },
    {
      key: "innovation",
      number: "03",
    },
  ];

  return (
    <section
      id="nosotros"
      className="relative overflow-hidden border-t border-white/10 bg-black text-white"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[var(--dcv-gold)]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-40 h-[300px] w-[300px] rounded-full border border-[var(--dcv-gold)]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--dcv-gold)]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">

        {/* HEADER */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--dcv-gold)]" />

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--dcv-gold)]">
                {t("label")}
              </p>
            </div>

            <div className="mt-10 flex items-end gap-4">
              <span className="text-[100px] font-semibold leading-none tracking-[-0.08em] text-white/[0.06] md:text-[140px]">
                01
              </span>

              <span className="mb-3 text-xs uppercase tracking-[0.2em] text-white/30">
                DCV Corporation
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              {t("title1")}{" "}
              <span className="text-[var(--dcv-gold)]">
                {t("title2")}
              </span>
            </h2>
          </div>
        </div>

        {/* INTRO */}
        <div className="mt-20 grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-24">
          <div>
            <p className="max-w-4xl text-2xl font-medium leading-tight tracking-[-0.02em] text-white sm:text-3xl md:text-4xl">
              {t("paragraph1")}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[var(--dcv-gold)] to-transparent" />

            <p className="pl-6 text-base leading-7 text-white/50 md:text-lg">
              {t("paragraph2")}
            </p>
          </div>
        </div>

        {/* PILLARS */}
        <div className="mt-24">
          <div className="mb-8 flex items-center gap-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
              {t("drivers")}
            </p>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid overflow-hidden rounded-2xl border border-white/10 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.key}
                className={`group relative min-h-[360px] overflow-hidden bg-white/[0.025] p-8 transition-all duration-500 hover:bg-white/[0.06] md:p-10 ${
                  index !== 0
                    ? "border-t border-white/10 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                {/* Large background number */}
                <span
                  aria-hidden="true"
                  className="absolute -right-4 -top-8 text-[150px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] transition-all duration-500 group-hover:text-[var(--dcv-gold)]/[0.08]"
                >
                  {pillar.number}
                </span>

                {/* Top indicator */}
                <div className="relative flex items-center justify-between">
                  <span className="text-sm font-medium text-[var(--dcv-gold)]">
                    {pillar.number}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-[var(--dcv-gold)] group-hover:bg-[var(--dcv-gold)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--dcv-gold)] transition-colors duration-500 group-hover:bg-black" />
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-28">
                  <h3 className="text-2xl font-semibold tracking-tight text-white transition-transform duration-500 group-hover:translate-x-2">
                    {t(`pillars.${pillar.key}.title`)}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/40 transition-colors duration-500 group-hover:text-white/60">
                    {t(`pillars.${pillar.key}.description`)}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--dcv-gold)] transition-all duration-700 group-hover:w-full" />

                {/* Glow */}
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-32 -translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--dcv-gold)]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>

        {/* STATEMENT */}
        <div className="relative mt-24 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-[var(--dcv-gold)]/10 blur-3xl"
          />

          <div className="relative p-8 sm:p-12 md:p-16">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--dcv-gold)] shadow-[0_0_12px_rgba(212,175,55,0.7)]" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
                {t("philosophy")}
              </span>
            </div>

            <p className="mt-10 max-w-6xl text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {t("statement")}
            </p>

            <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                DCV Corporation
              </span>

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--dcv-gold)]" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--dcv-gold)]">
                  2035
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}