import "./globals.scss";
import { Ubuntu, Tajawal } from "next/font/google";

export const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

export const metadata = {
  title: "MyPortfolio",
  description: "João Pedro Scarabelli Silva web developer portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${tajawal.variable} ${ubuntu.variable}`}>
      <body>{children}</body>
    </html>
  );
}
