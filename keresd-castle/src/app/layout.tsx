import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });



import { ThemeProvider } from "@/components/theme-provider/ThemeProvider"


export const metadata: Metadata = {
  title: "Keresd Castle",
  description: "Keresd Castle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <Header></Header>
        {children}
        <Footer></Footer>
      </ThemeProvider>
      </body>
    </html>
  );
}
