import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://dcmacedo.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DC Macedo | Tecnologia, dados e negócios",
    template: "%s | DC Macedo",
  },
  description:
    "Um espaço profissional sobre tecnologia, desenvolvimento de software, dados e melhoria de processos de negócio.",
  applicationName: "DC Macedo",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "DC Macedo",
    title: "DC Macedo | Tecnologia, dados e negócios",
    description:
      "Tecnologia aplicada a problemas reais: software, dados e processos de negócio.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0d12",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
