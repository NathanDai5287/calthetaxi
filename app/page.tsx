import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-blue-primary px-6 py-24 text-center text-white"
        style={{ backgroundColor: "#1e3a5f", color: "#ffffff" }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-sm font-medium tracking-widest text-gold-light uppercase">
            Theta Xi Fraternity
          </p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight">
            Nu Chapter
          </h1>
          <p className="mb-8 text-lg text-white/80">
            Brotherhood at UC Berkeley since 1910
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#rush"
              className="rounded bg-gold px-8 py-3 font-semibold text-white transition-colors hover:bg-gold-dark"
            >
              Rush Theta Xi
            </a>
            <Link
              href="/host"
              className="rounded border border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Host With Us
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-blue-primary">
            Who We Are
          </h2>
          <p className="mx-auto max-w-2xl text-center text-gray-mid leading-relaxed">
            Theta Xi is one of the oldest fraternities in the country, and our
            Nu Chapter has been a home for brothers at UC Berkeley for over a
            century. We&apos;re a group of guys who push each other to be
            better&mdash;in academics, leadership, and life. Our mascot is the
            unicorn, because why blend in?
          </p>
        </div>
      </section>

      {/* Why Rush */}
      <section id="rush" className="bg-gray-light px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-blue-primary">
            Why Rush Theta Xi?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-blue-primary">
            Our Community
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <PhotoPlaceholder label="Brotherhood" />
            <PhotoPlaceholder label="Events" />
            <PhotoPlaceholder label="Campus Life" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-primary px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold">Interested in Rushing?</h2>
          <p className="mb-8 text-white/80">
            Come meet the brothers and see what Theta Xi is all about. Rush
            events are open to all UC Berkeley students.
          </p>
          <a
            href="mailto:contact@calthetaxi.org"
            className="inline-block rounded bg-gold px-8 py-3 font-semibold text-white transition-colors hover:bg-gold-dark"
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
    <div className="rounded border border-blue-primary/10 bg-white p-6">
      <h3 className="mb-2 text-lg font-semibold text-blue-primary">{title}</h3>
      <p className="text-sm text-gray-mid leading-relaxed">{description}</p>
    </div>
  );
}

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded bg-gray-light text-gray-mid">
      <span className="text-sm">[Photo: {label}]</span>
    </div>
  );
}
