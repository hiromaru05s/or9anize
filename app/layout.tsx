import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ContextMenuHandler from "@/components/context-menu";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog - hiromaru05s",
  description: "The world of hiromaru05s",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} active:cursor-customClick `}>
        <ContextMenuHandler /> {/* コンポーネントを追加 */}
        <Header />
        {children}
      </body>
    </html>
  );
}


