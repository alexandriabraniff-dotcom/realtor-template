import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { config } from "@/lib/config";

// ── FONT SWAP ──────────────────────────────────────────────────────
// To use different Google Fonts for a new client, update the two
// imports below and adjust the subsets/weights as needed.
// The font *family name* in site-config.json is used for CSS
// font-family declarations — make sure it matches the font you load.
// ──────────────────────────────────────────────────────────────────
const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: config.meta.title,
  description: config.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { colors } = config.theme;

  return (
    <html
      lang="en"
      style={
        {
          "--color-bg": colors.bg,
          "--color-text": colors.text,
          "--color-text-muted": colors.textMuted,
          "--color-text-subtle": colors.textSubtle,
          "--color-accent": colors.accent,
          "--color-border": colors.border,
          "--color-dark-bg": colors.darkBg,
          "--color-dark-text": colors.darkText,
          "--color-footer-bg": colors.footerBg,
        } as React.CSSProperties
      }
    >
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
