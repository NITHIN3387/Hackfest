import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DarkLightToggler } from "@/components/dark-light-toggler";
import { Navbar } from "@/components/navbars";
import { AuthProvider } from "@/contexts/authContext";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " dark:bg-black dark:text-white"}>
        <AuthProvider>
          <Navbar />
          {children}
          <DarkLightToggler />
        </AuthProvider>
      </body>
    </html>
  );
}
