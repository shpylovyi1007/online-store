import localFont from "next/font/local";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/vercel.svg" />
        <title>Online-store App</title>
        <meta name="description" content="Next app" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
