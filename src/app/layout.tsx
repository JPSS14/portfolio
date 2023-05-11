import "./globals.scss";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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
    <html lang="pt-BR">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
