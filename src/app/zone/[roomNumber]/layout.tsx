"use client";

import React from "react";
import { AppContextProvider } from "../../Contexts/AppContext";
import AppBar from "./components/AppBar";
import Nav from "./components/Nav";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import "../../globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handle = useFullScreenHandle();
  return (
    <html lang="en">
      <title>Zenzone</title>
      <meta name="description" content="Unleash your Zen Mode!" />
      <body className={inter.className}>
<Toaster/>
          <FullScreen handle={handle}>
            <AppContextProvider>
              <Nav handle={handle} />
              <AppBar />
              {children}
            </AppContextProvider>
          </FullScreen>
    
      </body>
    </html>
  );
}
