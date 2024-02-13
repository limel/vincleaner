import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "app/globals.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--inter",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--montserrat",
});

export const metadata: Metadata = {
  title: "Autoclean",
  description: "Privacy Policy",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-primary font-normal">{children}</body>
    </html>
  );
}
