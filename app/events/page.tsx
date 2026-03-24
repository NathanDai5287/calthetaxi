import type { Metadata } from "next";

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

function tagStyle(tag: string): string {
  switch (tag) {
    case "Rush":
      return "text-gold-dark bg-gold/10";
    case "Philanthropy":
      return "text-navy-light bg-navy-light/10";
    case "Social":
      return "text-[#8b5e3c] bg-[#8b5e3c]/10";
    case "Alumni":
      return "text-[#3c6e5e] bg-[#3c6e5e]/10";
    default:
      return "text-ink-faint bg-ink-faint/10";
  }
}

export default function EventsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-gold uppercase">
            Calendar
          </p>
          <h1 className="font-display text-5xl font-semibold text-white sm:text-6xl">
            Upcoming Events
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60">
            See what&apos;s coming up at Nu Chapter.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="divide-y divide-stone">
            {events.map((event) => (
              <div
                key={event.title}
                className="grid gap-4 py-10 sm:grid-cols-[100px_1fr] sm:gap-8"
              >
                <div>
                  <span className="font-display text-4xl font-bold text-navy">
                    {event.date.split(" ")[1]}
                  </span>
                  <p className="mt-1 text-xs tracking-[0.15em] text-ink-faint uppercase">
                    {event.date.split(" ")[0]}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="font-display text-xl font-semibold text-navy">
                      {event.title}
                    </h3>
                    <span
                      className={`rounded-sm px-2 py-0.5 text-[10px] font-medium tracking-[0.1em] uppercase ${tagStyle(event.tag)}`}
                    >
                      {event.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-ink-light leading-relaxed">
                    {event.description}
                  </p>
                  <p className="mt-2 text-xs text-ink-faint">{event.day}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] text-gold uppercase">
            Venue
          </p>
          <h2 className="font-display text-3xl font-semibold text-navy">
            Want to host an event with us?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-ink-light">
            We partner with clubs and organizations for events at our house.
          </p>
          <a
            href="/host"
            className="mt-8 inline-block border border-gold px-8 py-3 text-xs font-semibold tracking-[0.1em] text-gold uppercase transition-colors hover:bg-gold hover:text-white"
          >
            Learn More
          </a>
        </div>
      </section>
    </>
  );
}
