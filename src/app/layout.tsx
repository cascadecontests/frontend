// app/layout.tsx
import { Notification } from "@/components/notification";
import type { Metadata } from "next";
import { cookies } from 'next/headers'; // Import cookies utility
import "./globals.css";
import { Header } from "@/components/header";
import { TonConnectProvider } from "@/components/ton-connect/provider";
import { Footer } from "@/components/footer";
import AlertTriangle from "@/icons/alert-triangle";

// Define the metadata for the page
export const metadata: Metadata = {
  title: "Cascade",
  description: "Host, compete & win",
};

// Define the RootLayout component
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Access cookies
  const cookieStore = cookies();
  const theme: 'light' | 'dark' = cookieStore.get('theme')?.value === 'dark' ? 'dark' : 'light'; // Default to 'light' if no cookie is set

  return (
    <html lang="en" className={theme}>
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
    </html>
  );
}
