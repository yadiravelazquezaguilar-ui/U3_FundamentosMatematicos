import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fundamentos Matemáticos",
  description: "Plataforma interactiva de la Unidad 3 de Fundamentos Matemáticos: solución de ecuaciones con matrices.",
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
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
