import Link from "next/link";

import AboutSection from "@/components/home/AboutSection";

const leadershipLinks = [
  {
    title: "Founder",
    description: "Discover the visionary leadership that shaped Sri Chaitanya.",
    href: "/about-us/founder",
  },
  {
    title: "Chairperson",
    description: "Learn about the Chairperson's mission and community focus.",
    href: "/about-us/chairperson",
  },
  {
    title: "Leadership Team",
    description: "Meet the leaders driving excellence across branches.",
    href: "/about-us/leadership-team",
  },
];

export default function AboutUsPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0">
          <div className="aurora-stars" />
          <div className="aurora-band" />
          <div className="aurora-band aurora-band-two" />
          <div className="aurora-horizon" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),rgba(2,14,30,0.85)_55%,rgba(1,8,18,0.95)_100%)]" />
        </div>
        <div className="container relative mx-auto px-6 pt-36 pb-20">
          <p className="text-[11px] uppercase tracking-[0.5em] text-white/70">
            About Us
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold">
            Sri Chaitanya Schools
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/80">
            Four decades of academic excellence, mentorship, and future-ready
            learning. Explore our story, leadership, and the culture that powers
            every branch.
          </p>
        </div>
      </section>

      <AboutSection />

      <section className="relative bg-background">
        <div className="container mx-auto px-6 pb-20">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-[hsl(var(--accent))]">
                Leadership Spotlight
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-[hsl(var(--primary))]">
                Meet the People Behind the Vision
              </h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {leadershipLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl border border-[hsl(var(--primary)/0.12)] bg-white p-6 shadow-[0_20px_45px_rgba(9,35,66,0.12)] transition hover:-translate-y-1 hover:border-[hsl(var(--accent)/0.5)]"
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
        </div>
      </section>
    </main>
  );
}
