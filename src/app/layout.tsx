import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import "./globals.css";
import { TonConnectProvider } from "@/components/ton-connect-provider";

export const metadata: Metadata = {
  title: "Cascade Contests",
  description: "Compete, win & improve",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <TonConnectProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </TonConnectProvider>
    </html>
  );
}
