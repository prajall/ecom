import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/nav/Navbar";
import Providers from "@/components/Providers";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "500", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Krist | Easy Fashion solution",
  description: "Fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(poppins.className, "relative h-full antialiased text-sm")}
      >
        <Providers>
          <Navbar />

          <main className="min-h-screen flex flex-col">
            <div className="flex-grow flex-1">{children}</div>
          </main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
