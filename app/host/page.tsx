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
      <section className="bg-navy px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-gold uppercase">
            Venue
          </p>
          <h1 className="font-display text-5xl font-semibold text-white sm:text-6xl">
            Host With Us
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/40">
            Looking for a venue for your next event? The Theta Xi house is one
            of the best event spaces near UC Berkeley.
          </p>
        </div>
      </section>

      {/* Venue Description */}
      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-6 h-px w-12 bg-gold" />
            <h2 className="font-display text-3xl font-semibold text-navy lg:text-4xl">
              The Venue
            </h2>
            <div className="mt-6 space-y-4 text-ink-light leading-relaxed">
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
          <div className="relative flex aspect-[4/3] items-center justify-center bg-stone">
            <div className="absolute inset-0 border border-navy/5" />
            <div className="text-center">
              <p className="text-xs tracking-[0.2em] text-ink-faint uppercase">
                Venue
              </p>
              <p className="mt-1 text-[10px] text-ink-faint/60">Photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-stone">
        <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-stone sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="px-6 py-14 text-center sm:px-8">
            <p className="font-display text-5xl font-semibold text-gold">200</p>
            <p className="mt-2 text-xs tracking-[0.15em] text-ink-faint uppercase">
              Guest Capacity
            </p>
          </div>
          <div className="px-6 py-14 text-center sm:px-8">
            <p className="font-display text-3xl font-semibold text-gold sm:text-4xl">
              Near Campus
            </p>
            <p className="mt-2 text-xs tracking-[0.15em] text-ink-faint uppercase">
              Berkeley Location
            </p>
          </div>
          <div className="px-6 py-14 text-center sm:px-8">
            <p className="font-display text-3xl font-semibold text-gold sm:text-4xl">
              Flexible
            </p>
            <p className="mt-2 text-xs tracking-[0.15em] text-ink-faint uppercase">
              Event Setup
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="mb-6 h-px w-12 bg-gold" />
            <h2 className="font-display text-3xl font-semibold text-navy">
              What We Offer
            </h2>
          </div>
          <div className="grid gap-px bg-stone sm:grid-cols-2">
            {[
              "Large open event space",
              "Sound system available",
              "Flexible layout and setup",
              "Coordination with our event team",
              "Convenient Berkeley location",
              "Competitive pricing",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 bg-white p-6 text-ink-light"
              >
                <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy px-6 py-24 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_rgba(196,154,60,0.08)_0%,_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-gold uppercase">
            Get Started
          </p>
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            Ready to Book?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-white/50 leading-relaxed">
            Reach out to discuss availability, pricing, and event details.
            We&apos;ll work with you to make your event happen.
          </p>
          <a
            href="mailto:contact@calthetaxi.org"
            className="mt-10 inline-block bg-gold px-8 py-3 text-xs font-semibold tracking-[0.1em] text-white uppercase transition-colors hover:bg-gold-dark"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
