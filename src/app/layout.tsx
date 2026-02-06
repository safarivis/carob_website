import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { CopilotProvider } from "@/components/CopilotProvider";

export const metadata: Metadata = {
  title: "Carob Investment Analysis | Haggar Group",
  description:
    "Research analysis: Commercial carob production feasibility. 200 ha operation, $3M investment, 12-18% IRR range, 19-year payback. Independent benchmarks included.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Carob Investment Analysis | Haggar Group",
    description:
      "Research analysis: Commercial carob production feasibility. Includes industry benchmarks and risk assessment.",
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
