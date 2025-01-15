import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {IBM_Plex_Sans} from "next/font/google";
import {cn} from "@/lib/utils";
import {ClerkProvider} from "@clerk/nextjs";


const IBMPlex = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-ibm-plex'
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edify",
  description: "AI-powered Image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider appearance={{
         variables: { colorPrimary: '#624cf5'}
     }}>

        <html lang="en">
          <body
            className={cn("font-IBMPlex antialiased", IBMPlex.variable)}
          >
            {children}
          </body>
        </html>
     </ClerkProvider>
  );
}
