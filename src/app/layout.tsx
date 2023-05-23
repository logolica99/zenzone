import { AppContextProvider } from "./Contexts/AppContext";
import AppBar from "./components/AppBar";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zenzone",
  description: "Unleash your zen mode!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>
          <AppBar />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
