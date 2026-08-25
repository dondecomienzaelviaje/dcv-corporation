import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default async function ContactPage() {
  const t = await getTranslations("Contact");
  const locale = await getLocale();

  return (
    <main className="min-h-screen bg-[var(--dcv-black)] text-[var(--dcv-white)]">
      <Navbar />

      {/* HEADER */}
      <section className="border-b border-[var(--dcv-border)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--dcv-gold)]">
            {t("label")}
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--dcv-text)]">
            {t("description")}
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          {/* FORM */}
          <div className="rounded-3xl border border-[var(--dcv-border)] bg-[var(--dcv-surface)] p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-[var(--dcv-white)]">
              {t("form.title")}
            </h2>

            <p className="mt-3 text-sm leading-6 text-[var(--dcv-text-muted)]">
              {t("form.description")}
            </p>

            <form className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[var(--dcv-white)]"
                >
                  {t("form.name")}
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-[var(--dcv-border)] bg-[var(--dcv-black)] px-4 py-3 text-sm text-[var(--dcv-white)] outline-none transition placeholder:text-[var(--dcv-text-muted)] focus:border-[var(--dcv-gold)]"
                  placeholder={t("form.namePlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[var(--dcv-white)]"
                >
                  {t("form.email")}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-[var(--dcv-border)] bg-[var(--dcv-black)] px-4 py-3 text-sm text-[var(--dcv-white)] outline-none transition placeholder:text-[var(--dcv-text-muted)] focus:border-[var(--dcv-gold)]"
                  placeholder={t("form.emailPlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-[var(--dcv-white)]"
                >
                  {t("form.subject")}
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full rounded-xl border border-[var(--dcv-border)] bg-[var(--dcv-black)] px-4 py-3 text-sm text-[var(--dcv-white)] outline-none transition placeholder:text-[var(--dcv-text-muted)] focus:border-[var(--dcv-gold)]"
                  placeholder={t("form.subjectPlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[var(--dcv-white)]"
                >
                  {t("form.message")}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-[var(--dcv-border)] bg-[var(--dcv-black)] px-4 py-3 text-sm text-[var(--dcv-white)] outline-none transition placeholder:text-[var(--dcv-text-muted)] focus:border-[var(--dcv-gold)]"
                  placeholder={t("form.messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[var(--dcv-gold)] px-6 py-3 text-sm font-medium text-[var(--dcv-black)] transition hover:bg-[var(--dcv-gold-light)]"
              >
                {t("form.submit")}
              </button>
            </form>
          </div>

          {/* INFORMATION */}
          <div className="lg:pl-8">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--dcv-gold)]">
              {t("info.label")}
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--dcv-white)]">
              {t("info.title")}
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--dcv-text)]">
              {t("info.description")}
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--dcv-gold)]">
                  {t("info.emailLabel")}
                </p>

                <p className="mt-2 text-sm text-[var(--dcv-white)]">
                  contacto@dcvcorp.com
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--dcv-gold)]">
                  {t("info.responseLabel")}
                </p>

                <p className="mt-2 text-sm leading-6 text-[var(--dcv-text-muted)]">
                  {t("info.response")}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--dcv-gold)]">
                  {t("info.helpLabel")}
                </p>

                <ul className="mt-4 space-y-3 text-sm text-[var(--dcv-text-muted)]">
                  <li>• {t("info.items.ecosystem")}</li>
                  <li>• {t("info.items.partnerships")}</li>
                  <li>• {t("info.items.technology")}</li>
                  <li>• {t("info.items.projects")}</li>
                  <li>• {t("info.items.general")}</li>
                </ul>
              </div>
            </div>

            {/* BACK TO HOME */}
            <Link
              href={`/${locale}`}
              className="mt-10 inline-flex text-sm text-[var(--dcv-gold)] transition hover:text-[var(--dcv-gold-light)]"
            >
              ← {t("back")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}