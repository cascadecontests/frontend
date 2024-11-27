import { TonConnectProvider } from "@/components/ton-connect-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import "./globals.css";
import { Notification } from "@/components/notification";
import { TriangleAlert, Megaphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Cascade Contests",
  description: "Compete, win & improve",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <TonConnectProvider>
        <body>
          <Notification
            type="warning"
            message="This is an early development build. But still be as strict as possible to any bugs and not implemented things"
            icon={<Megaphone size={20} />}
            url="https://github.com/cascadecontests/frontend"
          />
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
