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
      <section className="bg-blue-primary px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold">Host With Us</h1>
          <p className="text-lg text-white/80">
            Looking for a venue for your next event? The Theta Xi house is one
            of the best event spaces near UC Berkeley.
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-blue-primary">
                The Venue
              </h2>
              <div className="space-y-4 text-gray-mid leading-relaxed">
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
            <div className="flex aspect-[4/3] items-center justify-center rounded bg-gray-light text-gray-mid">
              <span className="text-sm">[Photo: Venue]</span>
            </div>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="bg-gray-light px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-blue-primary">
            At a Glance
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded bg-white p-6 text-center">
              <p className="text-3xl font-bold text-gold">200</p>
              <p className="mt-1 text-sm text-gray-mid">Guest Capacity</p>
            </div>
            <div className="rounded bg-white p-6 text-center">
              <p className="text-3xl font-bold text-gold">Near Campus</p>
              <p className="mt-1 text-sm text-gray-mid">Berkeley Location</p>
            </div>
            <div className="rounded bg-white p-6 text-center">
              <p className="text-3xl font-bold text-gold">Flexible</p>
              <p className="mt-1 text-sm text-gray-mid">Event Setup</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold text-blue-primary">
            What We Offer
          </h2>
          <ul className="grid gap-4 text-gray-mid sm:grid-cols-2">
            <li className="rounded border border-blue-primary/10 p-4">
              Large open event space
            </li>
            <li className="rounded border border-blue-primary/10 p-4">
              Sound system available
            </li>
            <li className="rounded border border-blue-primary/10 p-4">
              Flexible layout and setup
            </li>
            <li className="rounded border border-blue-primary/10 p-4">
              Coordination with our event team
            </li>
            <li className="rounded border border-blue-primary/10 p-4">
              Convenient Berkeley location
            </li>
            <li className="rounded border border-blue-primary/10 p-4">
              Competitive pricing
            </li>
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-primary px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold">Ready to Book?</h2>
          <p className="mb-8 text-white/80">
            Reach out to discuss availability, pricing, and event details.
            We&apos;ll work with you to make your event happen.
          </p>
          <a
            href="mailto:contact@calthetaxi.org"
            className="inline-block rounded bg-gold px-8 py-3 font-semibold text-white transition-colors hover:bg-gold-dark"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
