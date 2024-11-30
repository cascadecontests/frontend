import type { Metadata } from "next";
import "./globals.css";
import { cookies } from 'next/headers';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Notification } from "@/components/notification";
import AlertTriangle from "@/icons/alert-triangle";
import { TonConnectProvider } from "@/components/ton-connect/provider";

export const metadata: Metadata = {
  title: "Cascade",
  description: "Compete. Win. Improve.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = cookies();
  const theme: 'light' | 'dark' = cookieStore.get('theme')?.value === 'dark' ? 'dark' : 'light';

  return (
    <html lang="en" className={theme}>
      <TonConnectProvider>
        <body className='antialiased'>
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
    </html>
  );
}
