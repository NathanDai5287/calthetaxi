import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Theta Xi - Nu Chapter | UC Berkeley",
  description:
    "Theta Xi Fraternity, Nu Chapter at UC Berkeley. Brotherhood since 1910.",
};

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-2xl font-semibold tracking-wide text-navy"
        >
          &Theta;&Xi;
        </Link>
        <div className="flex items-center gap-4 sm:gap-8">
          <Link
            href="/"
            className="nav-link hidden text-xs font-medium tracking-[0.15em] text-ink uppercase md:block"
          >
            Home
          </Link>
          <Link
            href="/host"
            className="nav-link text-xs font-medium tracking-[0.15em] text-ink uppercase"
          >
            Host
          </Link>
          <Link
            href="/events"
            className="nav-link text-xs font-medium tracking-[0.15em] text-ink uppercase"
          >
            Events
          </Link>
          <Link
            href="/#rush"
            className="border border-gold px-4 py-2 text-xs font-medium tracking-[0.15em] text-gold uppercase transition-colors hover:bg-gold hover:text-white"
          >
            Rush
          </Link>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-white/60">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col gap-10 py-16 sm:flex-row sm:justify-between">
          <div>
            <p className="font-display text-3xl font-semibold text-white">
              &Theta;&Xi;
            </p>
            <p className="mt-2 text-sm">Nu Chapter &middot; UC Berkeley</p>
            <p className="text-sm">Est. 1910</p>
          </div>
          <div className="flex gap-12 text-sm sm:gap-16">
            <div>
              <p className="mb-3 text-xs font-medium tracking-[0.15em] text-white/50 uppercase">
                Navigate
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href="/host"
                  className="transition-colors hover:text-gold-light"
                >
                  Host With Us
                </Link>
                <Link
                  href="/events"
                  className="transition-colors hover:text-gold-light"
                >
                  Events
                </Link>
                <a
                  href="https://www.thetaxi.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-light"
                >
                  National Theta Xi
                </a>
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs font-medium tracking-[0.15em] text-white/50 uppercase">
                Contact
              </p>
              <div className="flex flex-col gap-2">
                <p>contact@calthetaxi.org</p>
                <p>Berkeley, CA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} Theta Xi Fraternity &mdash; Nu
          Chapter at the University of California, Berkeley
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
    <html
      lang="en"
      className={`${cormorant.variable} ${libreFranklin.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-cream antialiased text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
