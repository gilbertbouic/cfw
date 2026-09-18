import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider, SkipToContent } from "@/i18n/LanguageProvider";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cfw.mkweli.tech"),
  title: {
    default: "Climate Fund Watch",
    template: "%s · Climate Fund Watch",
  },
  description:
    "Independent, sourced ledger of public climate-finance figures for Mauritius. Every number links to a government or funder document.",
  keywords: [
    "climate finance",
    "transparency",
    "Mauritius",
    "adaptation",
    "accountability",
    "open data",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/brand/mkweli-favicon.ico",
  },
  openGraph: {
    title: "Climate Fund Watch",
    description:
      "Sourced climate-finance figures for Mauritius - need, tagged budget, and international projects, each with a public citation.",
    type: "website",
    siteName: "Climate Fund Watch",
    locale: "en_MU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <LanguageProvider>
          <SkipToContent />
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
