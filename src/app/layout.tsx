import { Notification } from "@/components/notification";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { TonConnectProvider } from "@/components/ton-connect/provider";
import { Footer } from "@/components/footer";
import AlertTriangle from "@/icons/alert-triangle";

export const metadata: Metadata = {
  title: "Cascade",
  description: "Host, compete & win",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <TonConnectProvider>
        <body className="antialiased">
          <Notification
            type="warning"
            message="This is an early development build"
            href="https://github.com/cascadecontests/frontend/issues/new?assignees=&labels=&projects=&template=bug_report.md&title="
            icon={<AlertTriangle />}
          />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </TonConnectProvider>
    </html >
  );
}
