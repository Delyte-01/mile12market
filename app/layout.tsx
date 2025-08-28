import type { Metadata } from "next";
import {  Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { AppProvider } from "@/hooks/use-context";

 const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700","900"],
 });
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mile 12 Market",
  description: "A marketplace for fresh produce and groceries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.className} antialiased`}>
        <AppProvider>
          {children}
          <Toaster richColors closeButton  />
        </AppProvider>
      </body>
    </html>
  );
}
