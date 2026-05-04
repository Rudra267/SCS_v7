import {
  Award,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";

import Reveal from "../founder/Reveal";

const quickFacts = [
  { label: "Role", value: "Chairperson", icon: Award },
  { label: "Institution", value: "Sri Chaitanya Educational Institutions", icon: Building2 },
  { label: "Founded", value: "Co-founded in 1986", icon: BookOpenCheck },
  { label: "Focus", value: "Student empowerment", icon: GraduationCap },
];

const leadershipFocus = [
  "Quality education for students from rural and small towns",
  "Strong mentorship and holistic development",
  "Student-centric learning systems",
  "Community service initiatives",
];

const impactCards = [
  {
    title: "Academic Excellence",
    text: "Guiding the institution's culture of disciplined learning, strong outcomes, and student success.",
  },
  {
    title: "Nationwide Access",
    text: "Supporting access to quality education across branches, cities, and student communities.",
  },
  {
    title: "Mentorship Culture",
    text: "Strengthening a school environment built around guidance, care, and opportunity.",
  },
];

export default function ChairpersonPage() {
  return (
    <main className="overflow-hidden bg-[#f7f9fc]">
      <section className="relative mt-40 min-h-[560px] overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(6,20,38,0.86) 0%, rgba(12,45,79,0.72) 46%, rgba(12,45,79,0.24) 100%), url('/assets/hero-school.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.18),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0)_62%,rgba(247,249,252,1)_100%)]" />
        <div className="container relative mx-auto px-6 py-20 lg:py-24">
          <div className="max-w-4xl">
            <Reveal as="p" className="text-[11px] font-semibold uppercase tracking-[0.52em] text-white/70" amount={0.6}>
              Chairperson & Founding Pillar
            </Reveal>
            <Reveal as="h1" className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl" delay={0.08} amount={0.6}>
              Dr. Jhansi Lakshmi Bai Boppana
            </Reveal>
            <Reveal as="p" className="mt-3 text-sm font-semibold uppercase tracking-[0.32em] text-[hsl(var(--accent))]" delay={0.14} amount={0.6}>
              Dr. J. L. Boppana
            </Reveal>
            <Reveal as="p" className="mt-7 max-w-2xl text-base leading-relaxed text-white/84" delay={0.2} amount={0.6}>
              Dr. Jhansi Lakshmi Bai Boppana is the Chairperson and one of the
              founding pillars of Sri Chaitanya Educational Institutions. With
              a strong commitment to student empowerment and academic
              excellence, she has played a central role in shaping the
              institution&apos;s vision and values.
            </Reveal>
            <Reveal className="mt-9 flex max-w-2xl gap-4 border-l-2 border-[hsl(var(--accent))] bg-white/8 px-5 py-5 backdrop-blur-sm" delay={0.28} amount={0.6}>
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
              <Reveal key={fact.label} className="rounded-lg border border-[hsl(var(--primary)/0.1)] bg-white p-5 shadow-[0_18px_42px_rgba(9,35,66,0.1)]" delay={index * 0.08}>
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

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal className="lg:sticky lg:top-32">
              <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-[hsl(var(--accent))]">
                Leadership Story
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-[hsl(var(--primary))] md:text-5xl">
                Empowering students through access, care, and academic ambition.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-[hsl(var(--primary)/0.68)]">
                She co-founded Sri Chaitanya in 1986 along with her husband,
                Dr. B. S. Rao. Under her leadership, the institution has grown
                into a nationwide network of schools, junior colleges, and
                coaching centers.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[hsl(var(--primary))]">
                <HeartHandshake className="h-5 w-5 text-[hsl(var(--accent))]" />
                Sri Chaitanya Educational Institutions
              </div>
            </Reveal>

            <div className="grid gap-5">
              {leadershipFocus.map((point, index) => (
                <Reveal key={point} className="rounded-lg border border-[hsl(var(--primary)/0.1)] bg-white p-6 shadow-[0_18px_42px_rgba(9,35,66,0.08)]" delay={index * 0.08}>
                  <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent))]" />
                  <p className="mt-4 text-sm font-medium leading-relaxed text-[hsl(var(--primary)/0.76)]">
                    {point}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#153a5c_0%,#0d3b66_46%,#f1f6fb_46%,#ffffff_100%)] py-16 text-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-white/70">
                Vision & Legacy
              </p>
              <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight md:text-4xl">
                A leadership culture built around mentorship and opportunity.
              </h2>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {impactCards.map((card, index) => (
                <Reveal key={card.title} className="rounded-lg border border-white/18 bg-white p-5 text-[hsl(var(--primary))] shadow-[0_18px_45px_rgba(9,35,66,0.12)]" delay={index * 0.08}>
                  <Users className="h-6 w-6 text-[hsl(var(--accent))]" />
                  <h3 className="mt-4 text-xl font-semibold text-[hsl(var(--primary))]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--primary)/0.68)]">
                    {card.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <Reveal className="relative overflow-hidden rounded-lg border border-[hsl(var(--primary)/0.1)] bg-white p-8 shadow-[0_24px_60px_rgba(9,35,66,0.1)] md:p-12">
            <div className="absolute right-6 top-6 text-[110px] font-bold leading-none text-[hsl(var(--primary)/0.04)] md:text-[170px]">
              JLB
            </div>
            <div className="relative max-w-3xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))]">
                <Sparkles className="h-6 w-6" />
              </div>
              <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.42em] text-[hsl(var(--accent))]">
                Continuing Vision
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[hsl(var(--primary))] md:text-5xl">
                Guiding a culture of student success nationwide.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-[hsl(var(--primary)/0.7)] md:text-base">
                Through her dedication and vision, Sri Chaitanya has become
                synonymous with academic excellence and student success. Her
                leadership continues to guide the institution&apos;s culture of
                mentorship, opportunity, and community service.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
