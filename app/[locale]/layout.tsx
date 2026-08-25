import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/routing";
import "../globals.css";

export const metadata: Metadata = {
  title: "DCV Corporation",
  description:
    "DCV Corporation — un ecosistema de innovación, tecnología, educación y crecimiento.",
  openGraph: {
    title: "DCV Corporation",
    description:
      "DCV Corporation — un ecosistema de innovación, tecnología, educación y crecimiento.",
    url: "https://www.dcvcorp.com",
    siteName: "DCV Corporation",
    images: [
      {
        url: "https://www.dcvcorp.com/social-preview.png",
        width: 1200,
        height: 630,
        alt: "DCV Corporation",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DCV Corporation",
    description:
      "DCV Corporation — un ecosistema de innovación, tecnología, educación y crecimiento.",
    images: ["https://www.dcvcorp.com/social-preview.png"],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return null;
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}