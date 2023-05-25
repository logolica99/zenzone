"use client";

import React from "react";

import "../../globals.css";
import { Inter } from "next/font/google";


import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <title>Zenzone</title>
      <meta name="description" content="Unleash your Zen Mode!" />
      <body className={inter.className}>
        {" "}
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
