import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DCV Corporation",
  description: "DCV Corporation"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}