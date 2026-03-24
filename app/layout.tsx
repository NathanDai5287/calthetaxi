import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Theta Xi - Nu Chapter | UC Berkeley",
  description:
    "Theta Xi Fraternity, Nu Chapter at UC Berkeley. Brotherhood since 1910.",
};

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-blue-primary/10 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-blue-primary">
          ΘΞ <span className="hidden font-normal text-gray-mid sm:inline">Nu Chapter</span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="text-gray-dark transition-colors hover:text-blue-primary"
          >
            Home
          </Link>
          <Link
            href="/host"
            className="text-gray-dark transition-colors hover:text-blue-primary"
          >
            Host With Us
          </Link>
          <Link
            href="/events"
            className="text-gray-dark transition-colors hover:text-blue-primary"
          >
            Events
          </Link>
          <Link
            href="/#rush"
            className="rounded bg-gold px-4 py-2 text-white transition-colors hover:bg-gold-dark"
          >
            Rush
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-blue-primary/10 bg-blue-dark text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-2 text-lg font-bold">Theta Xi - Nu Chapter</h3>
            <p className="text-sm text-white/70">
              Brotherhood at UC Berkeley since 1910.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Contact</h4>
            <p className="text-sm text-white/70">contact@calthetaxi.org</p>
            <p className="text-sm text-white/70">Berkeley, CA</p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Links</h4>
            <div className="flex flex-col gap-1 text-sm text-white/70">
              <Link href="/host" className="hover:text-gold-light">
                Host With Us
              </Link>
              <Link href="/events" className="hover:text-gold-light">
                Events
              </Link>
              <a
                href="https://www.thetaxi.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-light"
              >
                National Theta Xi
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          Theta Xi Fraternity - Nu Chapter at the University of California,
          Berkeley
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-gray-dark">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
