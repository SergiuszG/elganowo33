import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elganowo33.pl"),
  title: "Elganowo 33 — dom na Mazurach",
  description: "Kameralny dom wśród mazurskich jezior, lasów i ciszy.",
  openGraph: {
    title: "Elganowo 33 — dom na Mazurach",
    description: "Tu rano słychać żurawie. Kameralny dom wśród mazurskich jezior, lasów i ciszy.",
    url: "https://elganowo33.pl",
    siteName: "Elganowo 33",
    locale: "pl_PL",
    type: "website",
    images: [{ url: "/og.png", width: 1733, height: 907, alt: "Elganowo 33 — Tu rano słychać żurawie." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elganowo 33 — dom na Mazurach",
    description: "Tu rano słychać żurawie.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
