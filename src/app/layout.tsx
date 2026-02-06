import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { CopilotProvider } from "@/components/CopilotProvider";

export const metadata: Metadata = {
  title: "Carob Business Proposal | Haggar Group",
  description:
    "Investment opportunity: Sustainable carob production in Sudan and Egypt. $1.4M investment, 12% projected IRR, strong ESG credentials.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Carob Business Proposal | Haggar Group",
    description:
      "Investment opportunity: Sustainable carob production in Sudan and Egypt.",
    type: "website",
    url: "https://carob.lewkai.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <CopilotProvider>
          <Navigation />
          <main>{children}</main>
          <footer className="border-t border-gray-200 py-8 mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-500">
                  Prepared by{" "}
                  <a
                    href="https://lewkai.com"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LewkAi
                  </a>{" "}
                  for Haggar Group
                </div>
                <div className="text-sm text-gray-400">
                  February 2026
                </div>
              </div>
            </div>
          </footer>
        </CopilotProvider>
      </body>
    </html>
  );
}
