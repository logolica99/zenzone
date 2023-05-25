"use client";

import React from "react";

import "../../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
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
