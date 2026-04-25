import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wi-Fi Client – Hilton Brazzaville Les Tours Jumelles",
  description: "Portail captif Wi-Fi – Hilton Brazzaville Hotel & Résidences",
  icons: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
