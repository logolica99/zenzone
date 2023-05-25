import React from "react";

import "./globals.css";
import { Inter } from "next/font/google";
// import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Zenzone",
//   description: "Unleash your Zen Mode!",
// };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Zenzone</title>
      <meta name="description" content="Unleash your Zen Mode!" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
