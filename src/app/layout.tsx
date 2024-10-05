import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-pretendard"
});

export const metadata: Metadata = {
  title: "Nutria",
  description: "Nutriaaaa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
