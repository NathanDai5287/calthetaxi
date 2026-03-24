import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Theta Xi - Nu Chapter | UC Berkeley",
  description:
    "Theta Xi Fraternity, Nu Chapter at UC Berkeley. Brotherhood since 1910.",
};

function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(30,58,95,0.1)",
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
        }}
      >
        <Link
          href="/"
          style={{ fontSize: 20, fontWeight: 700, color: "#1e3a5f" }}
        >
          &Theta;&Xi;{" "}
          <span
            className="sm-inline"
            style={{ fontWeight: 400, color: "#6b7280" }}
          >
            Nu Chapter
          </span>
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          <Link
            href="/"
            className="nav-link"
            style={{ color: "#1f2937", transition: "color 0.15s" }}
          >
            Home
          </Link>
          <Link
            href="/host"
            className="nav-link"
            style={{ color: "#1f2937", transition: "color 0.15s" }}
          >
            Host With Us
          </Link>
          <Link
            href="/events"
            className="nav-link"
            style={{ color: "#1f2937", transition: "color 0.15s" }}
          >
            Events
          </Link>
          <Link
            href="/#rush"
            className="btn-gold"
            style={{
              borderRadius: 4,
              backgroundColor: "#c5a44e",
              padding: "8px 16px",
              color: "#ffffff",
              transition: "background-color 0.15s",
            }}
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
    <footer
      style={{
        borderTop: "1px solid rgba(30,58,95,0.1)",
        backgroundColor: "#152a43",
        color: "#ffffff",
      }}
    >
      <div
        style={{ maxWidth: 1152, margin: "0 auto", padding: "48px 24px" }}
      >
        <div className="footer-grid">
          <div>
            <h3 style={{ marginBottom: 8, fontSize: 18, fontWeight: 700 }}>
              Theta Xi - Nu Chapter
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
              Brotherhood at UC Berkeley since 1910.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: 8, fontWeight: 600 }}>Contact</h4>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
              contact@calthetaxi.org
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
              Berkeley, CA
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: 8, fontWeight: 600 }}>Links</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                fontSize: 14,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <Link href="/host" className="footer-link">
                Host With Us
              </Link>
              <Link href="/events" className="footer-link">
                Events
              </Link>
              <a
                href="https://www.thetaxi.org"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                National Theta Xi
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
            textAlign: "center",
            fontSize: 12,
            color: "rgba(255,255,255,0.5)",
          }}
        >
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
    <html lang="en" style={{ height: "100%" }}>
      <body
        className={geistSans.className}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          backgroundColor: "#ffffff",
          color: "#1f2937",
        }}
      >
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
