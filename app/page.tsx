import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-navy">
        {/* Watermark Greek letters */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
          <span className="font-display text-[28vw] font-bold leading-none text-white/[0.03] sm:text-[22vw]">
            &Theta;&Xi;
          </span>
        </div>

        {/* Diagonal gold accent lines */}
        <div className="pointer-events-none absolute left-1/3 top-0 h-full w-px -rotate-12 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="pointer-events-none absolute right-1/4 top-0 h-full w-px rotate-6 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />

        {/* Radial depth */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(30,58,95,0.5)_0%,_transparent_70%)]" />

        {/* Content */}
        <div className="relative z-10 px-6 text-center">
          <p
            className="animate-fade-in mb-6 text-[10px] font-medium tracking-[0.35em] text-gold-light uppercase sm:text-xs"
            style={{ animationDelay: "0.1s" }}
          >
            Theta Xi Fraternity &mdash; University of California, Berkeley
          </p>
          <h1
            className="animate-fade-up font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-8xl lg:text-9xl"
            style={{ animationDelay: "0.3s" }}
          >
            Nu Chapter
          </h1>
          <p
            className="animate-fade-in mt-2 text-xs tracking-[0.25em] text-white/30 uppercase sm:text-sm"
            style={{ animationDelay: "0.5s" }}
          >
            Est. 1910
          </p>
          <div
            className="animate-reveal mx-auto mt-10 h-px w-16 origin-left bg-gold/50"
            style={{ animationDelay: "0.7s" }}
          />
          <div
            className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="#rush"
              className="bg-gold px-8 py-3 text-xs font-semibold tracking-[0.1em] text-white uppercase transition-colors hover:bg-gold-dark"
            >
              Rush Theta Xi
            </a>
            <Link
              href="/host"
              className="border border-white/20 px-8 py-3 text-xs font-semibold tracking-[0.1em] text-white uppercase transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Host an Event
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <div className="mb-6 h-px w-12 bg-gold" />
            <h2 className="font-display text-4xl font-semibold text-navy lg:text-5xl">
              Who We Are
            </h2>
          </div>
          <div className="space-y-5 text-ink-light leading-relaxed">
            <p>
              Theta Xi is one of the oldest fraternities in the country, and our
              Nu Chapter has been a home for brothers at UC Berkeley for over a
              century.
            </p>
            <p>
              We&apos;re a group of guys who push each other to be
              better&mdash;in academics, leadership, and life. Our mascot is the
              unicorn, because why blend in?
            </p>
          </div>
        </div>
      </section>

      {/* Rush */}
      <section id="rush" className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium tracking-[0.3em] text-gold uppercase">
              Why Go Greek
            </p>
            <h2 className="font-display text-4xl font-semibold text-navy sm:text-5xl">
              Rush Theta Xi
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-stone sm:grid-cols-2">
            {[
              {
                title: "Brotherhood",
                description:
                  "Lifelong friendships built on trust, respect, and shared experiences that go far beyond college.",
              },
              {
                title: "Leadership",
                description:
                  "Run events, manage budgets, lead committees. Real responsibility that prepares you for life after Berkeley.",
              },
              {
                title: "Academics",
                description:
                  "Study groups, test banks, and brothers in every major. We hold each other accountable.",
              },
              {
                title: "Social Life",
                description:
                  "Mixers, formals, tailgates, and more. A social calendar that makes college worth it.",
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className="bg-white p-10 transition-colors hover:bg-cream/50"
              >
                <span className="text-xs tabular-nums tracking-[0.2em] text-gold/50">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-navy">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm text-ink-light leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16">
            <div className="mb-6 h-px w-12 bg-gold" />
            <h2 className="font-display text-4xl font-semibold text-navy">
              Our Community
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <PhotoPlaceholder label="Brotherhood" aspect="aspect-[3/4]" />
            <PhotoPlaceholder
              label="Events"
              aspect="aspect-square"
              className="sm:mt-8"
            />
            <PhotoPlaceholder label="Campus Life" aspect="aspect-[3/4]" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy px-6 py-24 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_rgba(196,154,60,0.08)_0%,_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-gold uppercase">
            Get Involved
          </p>
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            Interested in Rushing?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-white/50 leading-relaxed">
            Come meet the brothers and see what Theta Xi is all about. Rush
            events are open to all UC Berkeley students.
          </p>
          <a
            href="mailto:contact@calthetaxi.org"
            className="mt-10 inline-block bg-gold px-8 py-3 text-xs font-semibold tracking-[0.1em] text-white uppercase transition-colors hover:bg-gold-dark"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}

function PhotoPlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex ${aspect} items-center justify-center overflow-hidden bg-stone ${className}`}
    >
      <div className="absolute inset-0 border border-navy/5" />
      <div className="text-center">
        <p className="text-xs tracking-[0.2em] text-ink-faint uppercase">
          {label}
        </p>
        <p className="mt-1 text-[10px] text-ink-faint/60">Photo</p>
      </div>
    </div>
  );
}
