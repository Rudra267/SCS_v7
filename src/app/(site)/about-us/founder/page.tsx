import {
  Award,
  Building2,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Quote,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import FounderJourney from "./FounderJourney";
import Reveal from "./Reveal";

const quickFacts = [
  { label: "Born", value: "Angaluru, Krishna District", icon: MapPin },
  { label: "Medical Education", value: "Guntur Medical College", icon: GraduationCap },
  { label: "Global Practice", value: "United Kingdom and Iran", icon: Stethoscope },
  { label: "First Institution", value: "Vijayawada, 1986", icon: Building2 },
];

const growthStats = [
  { value: "950+", label: "Schools and colleges" },
  { value: "10 lakh+", label: "Students" },
  { value: "62,000+", label: "Staff" },
  { value: "22+ states", label: "Nationwide reach" },
  { value: "248+ cities", label: "Learning communities" },
];

const philosophyPoints = [
  "Integrated academics with competitive exam preparation",
  "Expanding education to tier-2 and tier-3 cities",
  "Recruiting experienced faculty",
  "Structured testing and mentorship systems",
];

export default function FounderPage() {
  return (
    <main className="overflow-hidden bg-[#f7f9fc]">
      <section className="relative mt-40 min-h-[560px] overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(6,20,38,0.86) 0%, rgba(12,45,79,0.72) 46%, rgba(12,45,79,0.2) 100%), url('/assets/hero-school.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.18),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0)_62%,rgba(247,249,252,1)_100%)]" />
        <div className="container relative mx-auto px-6 py-20 lg:py-24">
          <div className="max-w-4xl">
            <Reveal
              as="p"
              className="text-[11px] font-semibold uppercase tracking-[0.52em] text-white/70"
              amount={0.6}
            >
              Founder & Visionary Leader
            </Reveal>
            <Reveal
              as="h1"
              className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl"
              delay={0.08}
              amount={0.6}
            >
              Dr. Boppana Satyanarayana Rao
            </Reveal>
            <Reveal
              as="p"
              className="mt-3 text-sm font-semibold uppercase tracking-[0.32em] text-[hsl(var(--accent))]"
              delay={0.14}
              amount={0.6}
            >
              Dr. B. S. Rao
            </Reveal>
            <Reveal
              as="p"
              className="mt-7 max-w-2xl text-base leading-relaxed text-white/84"
              delay={0.2}
              amount={0.6}
            >
              Dr. Boppana Satyanarayana Rao, widely known as Dr. B. S.
              Rao, was the Founder and Visionary Leader of Sri Chaitanya
              Educational Institutions, one of India&apos;s most influential
              educational organizations.
            </Reveal>
            <Reveal
              className="mt-9 flex max-w-2xl gap-4 border-l-2 border-[hsl(var(--accent))] bg-white/8 px-5 py-5 backdrop-blur-sm"
              delay={0.28}
              amount={0.6}
            >
              <Quote className="mt-1 h-6 w-6 flex-none text-[hsl(var(--accent))]" />
              <p className="text-sm leading-relaxed text-white/86 md:text-base">
                Every child can achieve excellence with the right guidance,
                structure, and opportunity.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative -mt-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-4 md:grid-cols-4">
            {quickFacts.map((fact, index) => (
              <Reveal
                key={fact.label}
                className="rounded-lg border border-[hsl(var(--primary)/0.1)] bg-white p-5 shadow-[0_18px_42px_rgba(9,35,66,0.1)]"
                delay={index * 0.08}
              >
                <fact.icon className="h-5 w-5 text-[hsl(var(--accent))]" />
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[hsl(var(--primary)/0.55)]">
                  {fact.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-[hsl(var(--primary))]">
                  {fact.value}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FounderJourney />

      <section className="bg-[linear-gradient(135deg,#153a5c_0%,#0d3b66_46%,#f1f6fb_46%,#ffffff_100%)] py-16 text-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-white/70">
                Institutional Impact
              </p>
              <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight md:text-4xl">
                From one college to a nationwide ecosystem.
              </h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {growthStats.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  className="rounded-lg border border-white/18 bg-white p-5 text-[hsl(var(--primary))] shadow-[0_18px_45px_rgba(9,35,66,0.12)]"
                  delay={index * 0.07}
                >
                  <p className="text-2xl font-semibold leading-tight text-[hsl(var(--accent))]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary)/0.6)]">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-[hsl(var(--accent))]">
              Educational Philosophy
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[hsl(var(--primary))] md:text-5xl">
              Excellence built with guidance and opportunity.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[hsl(var(--primary)/0.66)]">
              Dr. Rao believed that every child has the potential to succeed
              when provided with the right systems, mentors, and academic
              environment.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {philosophyPoints.map((point, index) => (
              <Reveal
                key={point}
                className="rounded-lg border border-[hsl(var(--primary)/0.1)] bg-white p-6 shadow-[0_18px_42px_rgba(9,35,66,0.08)]"
                delay={index * 0.08}
              >
                <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent))]" />
                <p className="mt-5 text-sm font-medium leading-relaxed text-[hsl(var(--primary)/0.76)]">
                  {point}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <Reveal className="relative overflow-hidden rounded-lg border border-[hsl(var(--primary)/0.1)] bg-white p-8 shadow-[0_24px_60px_rgba(9,35,66,0.1)] md:p-12">
            <div className="absolute right-6 top-6 text-[120px] font-bold leading-none text-[hsl(var(--primary)/0.04)] md:text-[180px]">
              BSR
            </div>
            <div className="relative max-w-3xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))]">
                <Award className="h-6 w-6" />
              </div>
              <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.42em] text-[hsl(var(--accent))]">
                Legacy
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[hsl(var(--primary))] md:text-5xl">
                A legacy that continues through generations of students.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-[hsl(var(--primary)/0.7)] md:text-base">
                Dr. B. S. Rao passed away on 13 July 2023, leaving behind a
                powerful legacy in Indian education. Today, his vision continues
                through the leadership of the institution and the millions of
                students whose lives have been transformed by Sri Chaitanya.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[hsl(var(--primary))]">
                <Sparkles className="h-5 w-5 text-[hsl(var(--accent))]" />
                The vision continues.
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
