import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Events | Theta Xi - Nu Chapter",
  description: "Upcoming events at Theta Xi, Nu Chapter at UC Berkeley.",
};

const events = [
  {
    date: "Apr 5",
    day: "Saturday",
    title: "Spring Rush Kickoff",
    description:
      "Meet the brothers of Theta Xi. Open to all UC Berkeley students interested in rushing.",
    tag: "Rush",
  },
  {
    date: "Apr 7",
    day: "Monday",
    title: "Rush BBQ",
    description:
      "Come hang out, eat some food, and get to know us in a casual setting.",
    tag: "Rush",
  },
  {
    date: "Apr 10",
    day: "Thursday",
    title: "Rush Interview Night",
    description:
      "Final rush event. Invitation only for those who have attended previous events.",
    tag: "Rush",
  },
  {
    date: "Apr 19",
    day: "Saturday",
    title: "Philanthropy 5K",
    description:
      "Annual charity run supporting local Berkeley community organizations.",
    tag: "Philanthropy",
  },
  {
    date: "May 3",
    day: "Saturday",
    title: "Spring Formal",
    description: "End-of-semester formal for brothers and dates.",
    tag: "Social",
  },
  {
    date: "May 17",
    day: "Saturday",
    title: "Alumni Weekend",
    description:
      "Welcoming back Nu Chapter alumni for a day of reconnection and celebration.",
    tag: "Alumni",
  },
];

function tagStyle(tag: string): CSSProperties {
  switch (tag) {
    case "Rush":
      return { backgroundColor: "rgba(197,164,78,0.15)", color: "#a8893a" };
    case "Philanthropy":
      return { backgroundColor: "rgba(30,58,95,0.1)", color: "#1e3a5f" };
    case "Social":
      return { backgroundColor: "#f3e8ff", color: "#7e22ce" };
    case "Alumni":
      return { backgroundColor: "#dcfce7", color: "#15803d" };
    default:
      return { backgroundColor: "#f3f4f6", color: "#6b7280" };
  }
}

export default function EventsPage() {
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
            Upcoming Events
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)" }}>
            See what&apos;s coming up at Theta Xi, Nu Chapter.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 768, margin: "0 auto" }}>
          <div className="events-list">
            {events.map((event) => (
              <div
                key={event.title}
                style={{
                  display: "flex",
                  gap: 24,
                  borderRadius: 4,
                  border: "1px solid rgba(30,58,95,0.1)",
                  padding: 24,
                }}
              >
                <div
                  style={{
                    width: 64,
                    flexShrink: 0,
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#1e3a5f",
                    }}
                  >
                    {event.date.split(" ")[1]}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: "#6b7280",
                      textTransform: "uppercase",
                    }}
                  >
                    {event.date.split(" ")[0]}
                  </p>
                  <p
                    style={{
                      marginTop: 4,
                      fontSize: 12,
                      color: "#6b7280",
                    }}
                  >
                    {event.day}
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      marginBottom: 4,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <h3
                      style={{
                        fontWeight: 600,
                        color: "#1f2937",
                      }}
                    >
                      {event.title}
                    </h3>
                    <span
                      style={{
                        borderRadius: 9999,
                        padding: "2px 8px",
                        fontSize: 12,
                        fontWeight: 500,
                        ...tagStyle(event.tag),
                      }}
                    >
                      {event.tag}
                    </span>
                  </div>
                  <p style={{ fontSize: 14, color: "#6b7280" }}>
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "#f1f3f5",
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 672, margin: "0 auto" }}>
          <h2
            style={{
              marginBottom: 16,
              fontSize: 24,
              fontWeight: 700,
              color: "#1e3a5f",
            }}
          >
            Want to host an event with us?
          </h2>
          <p style={{ marginBottom: 24, color: "#6b7280" }}>
            We partner with clubs and organizations for events at our house.
          </p>
          <a
            href="/host"
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
            Learn More
          </a>
        </div>
      </section>
    </>
  );
}
