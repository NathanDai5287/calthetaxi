import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Host With Us | Theta Xi - Nu Chapter",
  description:
    "Host your next event at the Theta Xi house at UC Berkeley. Capacity for 200 guests.",
};

export default function HostPage() {
  return (
    <>
      {/* Header */}
      <section
        style={{
          backgroundColor: "#1e3a5f",
          padding: "80px 24px",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        <div style={{ maxWidth: 768, margin: "0 auto" }}>
          <h1
            style={{ marginBottom: 16, fontSize: 36, fontWeight: 700 }}
          >
            Host With Us
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)" }}>
            Looking for a venue for your next event? The Theta Xi house is one
            of the best event spaces near UC Berkeley.
          </p>
        </div>
      </section>

      {/* Details */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 896, margin: "0 auto" }}>
          <div className="grid-2" style={{ gap: 48 }}>
            <div>
              <h2
                style={{
                  marginBottom: 24,
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#1e3a5f",
                }}
              >
                The Venue
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  color: "#6b7280",
                  lineHeight: 1.625,
                }}
              >
                <p>
                  Our chapter house is a spacious venue located near the UC
                  Berkeley campus, perfect for mixers, club events, fundraisers,
                  and private parties.
                </p>
                <p>
                  We&apos;ve hosted events for student organizations, campus
                  clubs, and social groups across the Bay Area.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                aspectRatio: "4/3",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
                backgroundColor: "#f1f3f5",
                color: "#6b7280",
              }}
            >
              <span style={{ fontSize: 14 }}>[Photo: Venue]</span>
            </div>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section style={{ backgroundColor: "#f1f3f5", padding: "80px 24px" }}>
        <div style={{ maxWidth: 896, margin: "0 auto" }}>
          <h2
            style={{
              marginBottom: 40,
              textAlign: "center",
              fontSize: 24,
              fontWeight: 700,
              color: "#1e3a5f",
            }}
          >
            At a Glance
          </h2>
          <div className="grid-3">
            <div
              style={{
                borderRadius: 4,
                backgroundColor: "#ffffff",
                padding: 24,
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: 30, fontWeight: 700, color: "#c5a44e" }}>
                200
              </p>
              <p style={{ marginTop: 4, fontSize: 14, color: "#6b7280" }}>
                Guest Capacity
              </p>
            </div>
            <div
              style={{
                borderRadius: 4,
                backgroundColor: "#ffffff",
                padding: 24,
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: 30, fontWeight: 700, color: "#c5a44e" }}>
                Near Campus
              </p>
              <p style={{ marginTop: 4, fontSize: 14, color: "#6b7280" }}>
                Berkeley Location
              </p>
            </div>
            <div
              style={{
                borderRadius: 4,
                backgroundColor: "#ffffff",
                padding: 24,
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: 30, fontWeight: 700, color: "#c5a44e" }}>
                Flexible
              </p>
              <p style={{ marginTop: 4, fontSize: 14, color: "#6b7280" }}>
                Event Setup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 896, margin: "0 auto" }}>
          <h2
            style={{
              marginBottom: 32,
              fontSize: 24,
              fontWeight: 700,
              color: "#1e3a5f",
            }}
          >
            What We Offer
          </h2>
          <ul className="grid-2" style={{ listStyle: "none" }}>
            {[
              "Large open event space",
              "Sound system available",
              "Flexible layout and setup",
              "Coordination with our event team",
              "Convenient Berkeley location",
              "Competitive pricing",
            ].map((item) => (
              <li
                key={item}
                style={{
                  borderRadius: 4,
                  border: "1px solid rgba(30,58,95,0.1)",
                  padding: 16,
                  color: "#6b7280",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        style={{
          backgroundColor: "#1e3a5f",
          padding: "64px 24px",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        <div style={{ maxWidth: 672, margin: "0 auto" }}>
          <h2 style={{ marginBottom: 16, fontSize: 30, fontWeight: 700 }}>
            Ready to Book?
          </h2>
          <p
            style={{
              marginBottom: 32,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Reach out to discuss availability, pricing, and event details.
            We&apos;ll work with you to make your event happen.
          </p>
          <a
            href="mailto:contact@calthetaxi.org"
            className="btn-gold"
            style={{
              display: "inline-block",
              borderRadius: 4,
              backgroundColor: "#c5a44e",
              padding: "12px 32px",
              fontWeight: 600,
              color: "#ffffff",
              transition: "background-color 0.15s",
            }}
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
