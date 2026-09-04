import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "foodtogo",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Structure mirrors the original Vite App.jsx */}
        <div>
          <div className="App">
            <Navbar />
            <ScrollToTop />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
