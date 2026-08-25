import { getTranslations } from "next-intl/server";

const phases = [
  ["01", "foundation"],
  ["02", "integration"],
  ["03", "intelligence"],
  ["04", "expansion"],
  ["05", "solutions"],
] as const;

export default async function Roadmap() {
  const t = await getTranslations("Roadmap");

  return (
    <section
      id="roadmap"
      className="border-t border-black/10 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">

        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/40">
            {t("label")}
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-black md:text-6xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-black/60 md:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="relative mt-20">

          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[32px] hidden h-px bg-black/10 md:block"
          />

          <div className="grid gap-5 md:grid-cols-5">
            {phases.map(([number, key]) => {
              const isCurrent = key === "integration";

              return (
                <article
                  key={key}
                  className={`group relative ${
                    isCurrent ? "md:-translate-y-3" : ""
                  }`}
                >

                  <div className="relative z-10 flex items-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-300 ${
                        isCurrent
                          ? "border-[var(--dcv-gold)] bg-[var(--dcv-gold)] text-black shadow-[0_0_0_8px_rgba(212,175,55,0.08)]"
                          : "border-black/15 bg-white text-black/40 group-hover:border-[var(--dcv-gold)] group-hover:text-black"
                      }`}
                    >
                      {number}
                    </div>
                  </div>

                  <div
                    className={`mt-6 border-t pt-6 transition-all duration-300 ${
                      isCurrent
                        ? "border-[var(--dcv-gold)]"
                        : "border-black/10 group-hover:border-black/30"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">

                      <h3 className="text-xl font-semibold tracking-tight text-black">
                        {t(`phases.${key}.title`)}
                      </h3>

                      {isCurrent && (
                        <span className="shrink-0 rounded-full bg-[var(--dcv-gold)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-black">
                          {t("current")}
                        </span>
                      )}

                    </div>

                    <p className="mt-4 text-sm leading-6 text-black/55">
                      {t(`phases.${key}.description`)}
                    </p>
                  </div>

                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-20 overflow-hidden border border-black/10 bg-black p-7 md:mt-24 md:p-10">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div className="max-w-2xl">

              <div className="flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-[var(--dcv-gold)]" />

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--dcv-gold)]">
                  {t("current")}
                </p>

              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {t("statusTitle")}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60 md:text-base">
                {t("statusDescription")}
              </p>

            </div>

            <div className="hidden shrink-0 md:block">

              <div className="flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[var(--dcv-gold)]" />

                <span className="h-px w-16 bg-white/20" />

                <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                  DCV
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}