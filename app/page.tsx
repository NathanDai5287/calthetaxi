import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "#1e3a5f",
          padding: "96px 24px",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        <div style={{ maxWidth: 768, margin: "0 auto" }}>
          <p
            style={{
              marginBottom: 8,
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#d4b96a",
            }}
          >
            Theta Xi Fraternity
          </p>
          <h1
            style={{
              marginBottom: 16,
              fontSize: 48,
              fontWeight: 700,
              letterSpacing: "-0.025em",
            }}
          >
            Nu Chapter
          </h1>
          <p
            style={{
              marginBottom: 32,
              fontSize: 18,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Brotherhood at UC Berkeley since 1910
          </p>
          <div className="hero-buttons">
            <a
              href="#rush"
              className="btn-gold"
              style={{
                borderRadius: 4,
                backgroundColor: "#c5a44e",
                padding: "12px 32px",
                fontWeight: 600,
                color: "#ffffff",
                transition: "background-color 0.15s",
              }}
            >
              Rush Theta Xi
            </a>
            <Link
              href="/host"
              className="btn-outline"
              style={{
                borderRadius: 4,
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "12px 32px",
                fontWeight: 600,
                color: "#ffffff",
                transition: "background-color 0.15s",
              }}
            >
              Host With Us
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 896, margin: "0 auto" }}>
          <h2
            style={{
              marginBottom: 24,
              textAlign: "center",
              fontSize: 30,
              fontWeight: 700,
              color: "#1e3a5f",
            }}
          >
            Who We Are
          </h2>
          <p
            style={{
              maxWidth: 672,
              margin: "0 auto",
              textAlign: "center",
              color: "#6b7280",
              lineHeight: 1.625,
            }}
          >
            Theta Xi is one of the oldest fraternities in the country, and our
            Nu Chapter has been a home for brothers at UC Berkeley for over a
            century. We&apos;re a group of guys who push each other to be
            better&mdash;in academics, leadership, and life. Our mascot is the
            unicorn, because why blend in?
          </p>
        </div>
      </section>

      {/* Why Rush */}
      <section
        id="rush"
        style={{ backgroundColor: "#f1f3f5", padding: "80px 24px" }}
      >
        <div style={{ maxWidth: 1024, margin: "0 auto" }}>
          <h2
            style={{
              marginBottom: 40,
              textAlign: "center",
              fontSize: 30,
              fontWeight: 700,
              color: "#1e3a5f",
            }}
          >
            Why Rush Theta Xi?
          </h2>
          <div className="grid-4">
            <Card
              title="Brotherhood"
              description="Lifelong friendships built on trust, respect, and shared experiences that go far beyond college."
            />
            <Card
              title="Leadership"
              description="Run events, manage budgets, lead committees. Real responsibility that prepares you for life after Berkeley."
            />
            <Card
              title="Academics"
              description="Study groups, test banks, and brothers in every major. We hold each other accountable."
            />
            <Card
              title="Social Life"
              description="Mixers, formals, tailgates, and more. A social calendar that makes college worth it."
            />
          </div>
        </div>
      </section>

      {/* Community / Photos */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1024, margin: "0 auto" }}>
          <h2
            style={{
              marginBottom: 40,
              textAlign: "center",
              fontSize: 30,
              fontWeight: 700,
              color: "#1e3a5f",
            }}
          >
            Our Community
          </h2>
          <div className="grid-3">
            <PhotoPlaceholder label="Brotherhood" />
            <PhotoPlaceholder label="Events" />
            <PhotoPlaceholder label="Campus Life" />
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Interested in Rushing?
          </h2>
          <p
            style={{
              marginBottom: 32,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Come meet the brothers and see what Theta Xi is all about. Rush
            events are open to all UC Berkeley students.
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
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}

function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        borderRadius: 4,
        border: "1px solid rgba(30,58,95,0.1)",
        backgroundColor: "#ffffff",
        padding: 24,
      }}
    >
      <h3
        style={{
          marginBottom: 8,
          fontSize: 18,
          fontWeight: 600,
          color: "#1e3a5f",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.625 }}>
        {description}
      </p>
    </div>
  );
}

function PhotoPlaceholder({ label }: { label: string }) {
  return (
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
      <span style={{ fontSize: 14 }}>[Photo: {label}]</span>
    </div>
  );
}
