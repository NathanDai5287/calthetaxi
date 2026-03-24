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

function tagColor(tag: string): string {
  switch (tag) {
    case "Rush":
      return "bg-gold/15 text-gold-dark";
    case "Philanthropy":
      return "bg-blue-primary/10 text-blue-primary";
    case "Social":
      return "bg-purple-100 text-purple-700";
    case "Alumni":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-mid";
  }
}

export default function EventsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-blue-primary px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold">Upcoming Events</h1>
          <p className="text-lg text-white/80">
            See what&apos;s coming up at Theta Xi, Nu Chapter.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.title}
                className="flex gap-6 rounded border border-blue-primary/10 p-6"
              >
                <div className="w-16 shrink-0 text-center">
                  <p className="text-lg font-bold text-blue-primary">
                    {event.date.split(" ")[1]}
                  </p>
                  <p className="text-xs text-gray-mid uppercase">
                    {event.date.split(" ")[0]}
                  </p>
                  <p className="mt-1 text-xs text-gray-mid">{event.day}</p>
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="font-semibold text-gray-dark">
                      {event.title}
                    </h3>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${tagColor(event.tag)}`}
                    >
                      {event.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-mid">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-light px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-2xl font-bold text-blue-primary">
            Want to host an event with us?
          </h2>
          <p className="mb-6 text-gray-mid">
            We partner with clubs and organizations for events at our house.
          </p>
          <a
            href="/host"
            className="inline-block rounded bg-gold px-8 py-3 font-semibold text-white transition-colors hover:bg-gold-dark"
          >
            Learn More
          </a>
        </div>
      </section>
    </>
  );
}
