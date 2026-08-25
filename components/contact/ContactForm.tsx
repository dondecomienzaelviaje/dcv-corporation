"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("Contact");

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSending(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error sending message");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
          disabled={sending}
          className="w-full rounded-xl border border-[var(--dcv-border)] bg-[var(--dcv-black)] px-4 py-3 text-sm text-[var(--dcv-white)] outline-none transition placeholder:text-[var(--dcv-text-muted)] focus:border-[var(--dcv-gold)] disabled:opacity-50"
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
          disabled={sending}
          className="w-full rounded-xl border border-[var(--dcv-border)] bg-[var(--dcv-black)] px-4 py-3 text-sm text-[var(--dcv-white)] outline-none transition placeholder:text-[var(--dcv-text-muted)] focus:border-[var(--dcv-gold)] disabled:opacity-50"
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
          disabled={sending}
          className="w-full rounded-xl border border-[var(--dcv-border)] bg-[var(--dcv-black)] px-4 py-3 text-sm text-[var(--dcv-white)] outline-none transition placeholder:text-[var(--dcv-text-muted)] focus:border-[var(--dcv-gold)] disabled:opacity-50"
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
          disabled={sending}
          className="w-full resize-none rounded-xl border border-[var(--dcv-border)] bg-[var(--dcv-black)] px-4 py-3 text-sm text-[var(--dcv-white)] outline-none transition placeholder:text-[var(--dcv-text-muted)] focus:border-[var(--dcv-gold)] disabled:opacity-50"
          placeholder={t("form.messagePlaceholder")}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-full bg-[var(--dcv-gold)] px-6 py-3 text-sm font-medium text-[var(--dcv-black)] transition hover:bg-[var(--dcv-gold-light)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {sending ? "Enviando..." : t("form.submit")}
      </button>

      {status === "success" && (
        <p className="text-sm text-[var(--dcv-gold)]">
          ¡Mensaje enviado correctamente!
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-400">
          No fue posible enviar el mensaje. Inténtalo nuevamente.
        </p>
      )}
    </form>
  );
}