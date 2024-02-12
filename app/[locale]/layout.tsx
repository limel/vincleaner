import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Header, Footer } from "components/Layout";
import { NextIntlClientProvider, useMessages } from "next-intl";
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
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale} className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-primary font-normal">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
          <div id="modal"></div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
