"use client";

import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CookieConsent from "@/components/cookie-consent";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <body className="antialiased" suppressHydrationWarning>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
        <CookieConsent />
      </div>
    </body>
  );
}
