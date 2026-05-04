import Link from "next/link";

const studentLifeLinks = [
  {
    title: "Facilities",
    description: "Modern learning spaces, labs, and sports infrastructure.",
    href: "/student-life/facilities",
  },
  {
    title: "Uniforms",
    description: "Guidelines that build identity, comfort, and discipline.",
    href: "/student-life/uniforms",
  },
  {
    title: "Gallery",
    description: "Highlights from events, celebrations, and school life.",
    href: "/student-life/gallery",
  },
];

export default function StudentLifePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0">
          <div className="aurora-stars" />
          <div className="aurora-band" />
          <div className="aurora-band aurora-band-two" />
          <div className="aurora-horizon" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),rgba(2,14,30,0.85)_55%,rgba(1,8,18,0.95)_100%)]" />
        </div>
        <div className="container relative mx-auto px-6 pt-36 pb-20">
          <p className="page-enter-text text-[11px] uppercase tracking-[0.5em] text-white/70">
            Student Life
          </p>
          <h1
            className="page-enter-text mt-4 text-4xl md:text-5xl font-semibold"
            style={{ animationDelay: "120ms" }}
          >
            Student Life & Culture
          </h1>
          <p
            className="page-enter-text mt-4 max-w-2xl text-sm text-white/80"
            style={{ animationDelay: "240ms" }}
          >
            Experiences that shape confidence, curiosity, and community through
            academics, co-curriculars, and school traditions.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {studentLifeLinks.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="page-enter-card group rounded-3xl border border-[hsl(var(--primary)/0.12)] bg-white p-6 shadow-[0_20px_45px_rgba(9,35,66,0.12)] transition hover:-translate-y-1 hover:border-[hsl(var(--accent)/0.5)]"
              style={{ animationDelay: `${360 + index * 110}ms` }}
            >
              <h3 className="text-lg font-semibold text-[hsl(var(--primary))]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[hsl(var(--primary)/0.65)]">
                {item.description}
              </p>
              <span className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(var(--accent))]">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
