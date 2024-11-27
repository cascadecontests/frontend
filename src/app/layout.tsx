import { TonConnectProvider } from "@/components/ton-connect-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import "./globals.css";

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
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </TonConnectProvider>
    </html>
  );
}
