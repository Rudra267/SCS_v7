import {
  Award,
  CheckCircle2,
  Lightbulb,
  Quote,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import Reveal from "../founder/Reveal";

type Leader = {
  name: string;
  role: string;
  description: string[];
  achievements?: string[];
  focus?: string;
};

const leaders: Leader[] = [
  {
    name: "Mrs. Sushma Boppana",
    role: "Director - Sri Chaitanya",
    description: [
      "Mrs. Sushma Boppana graduated from the Birla Institute of Technology and Science (BITS), Pilani, with a degree in Computer Science and later earned a master's degree in Information Technology in the United States.",
      "She leads several academic and strategic initiatives within the institution and has expanded Sri Chaitanya's curriculum from Kindergarten to Grade 12, providing students with a standardized academic foundation and reducing exam stress.",
    ],
    achievements: [
      "Times Exemplary Leader (2023)",
      "Featured in Forbes India Magazine",
      "Best Educational Brand - ET Now (2024)",
    ],
    focus:
      "Her work focuses on preparing students for Olympiads, JEE, NEET, and global academic challenges.",
  },
  {
    name: "Mrs. Seema Boppana",
    role: "Administrative Director - Sri Chaitanya",
    description: [
      "Mrs. Seema Boppana holds a Bachelor's degree in Science with specialization in Management and Marketing.",
      "Since 2008, she has played a crucial role in building the Sri Chaitanya Techno Schools network, expanding it from 5 schools to hundreds of branches across India.",
    ],
    achievements: [
      "Best Academic Director in India (2022-2023) - North Delhi Cultural Academy",
      "Features in CEO Insights Magazine and Outlook India",
    ],
    focus:
      "Her leadership focuses on curriculum innovation, academic excellence, and holistic student development.",
  },
  {
    name: "Mr. Nagendra",
    role: "Director - Marketing & Strategic Outreach",
    description: [
      "Mr. Nagendra serves as a Director at Sri Chaitanya Educational Institutions, playing a key role in marketing strategy, institutional communication, and brand outreach.",
      "He works closely with leadership teams to ensure that Sri Chaitanya's academic programs and services reach students across India while maintaining the institution's reputation for excellence.",
    ],
  },
  {
    name: "Mr. Y. L. V. Sridhar",
    role: "Director - Finance & IT",
    description: [
      "Mr. Sridhar holds a Bachelor's degree in Engineering from Wayne State University and a Master's degree from Northern State University (USA).",
      "He oversees Finance, IT, and Administration and leads technology adoption across the institution's branches.",
    ],
    achievements: [
      "Implementing digital learning platforms",
      "Strengthening financial governance",
      "Driving technology integration across the organization",
    ],
  },
];

const leadershipPillars = [
  {
    title: "Academic Vision",
    text: "Building consistent learning systems from early years through competitive preparation.",
    icon: Lightbulb,
  },
  {
    title: "Operational Excellence",
    text: "Strengthening branch networks, administration, finance, technology, and communication.",
    icon: Target,
  },
  {
    title: "Student Outcomes",
    text: "Keeping student progress, confidence, and future readiness at the center of leadership.",
    icon: Users,
  },
];

export default function LeadershipTeamPage() {
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
            <Reveal
              as="p"
              className="text-[11px] font-semibold uppercase tracking-[0.52em] text-white/70"
              amount={0.6}
            >
              Leadership & Strategy
            </Reveal>
            <Reveal
              as="h1"
              className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl"
              delay={0.08}
              amount={0.6}
            >
              Leadership Team
            </Reveal>
            <Reveal
              as="p"
              className="mt-7 max-w-2xl text-base leading-relaxed text-white/84"
              delay={0.18}
              amount={0.6}
            >
              The leadership team guides Sri Chaitanya's academic vision,
              operational excellence, and nationwide growth ensuring students
              receive world-class support across every branch.
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
          <div className="grid gap-4 md:grid-cols-3">
            {leadershipPillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                className="rounded-lg border border-[hsl(var(--primary)/0.1)] bg-white p-5 shadow-[0_18px_42px_rgba(9,35,66,0.1)]"
                delay={index * 0.08}
              >
                <pillar.icon className="h-5 w-5 text-[hsl(var(--accent))]" />
                <h2 className="mt-4 text-lg font-semibold text-[hsl(var(--primary))]">
                  {pillar.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--primary)/0.66)]">
                  {pillar.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-[hsl(var(--accent))]">
              Leadership Profiles
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[hsl(var(--primary))] md:text-5xl">
              The team guiding Sri Chaitanya forward.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[hsl(var(--primary)/0.66)]">
              Academic strategy, administration, marketing, finance, and
              technology come together to support students across every branch.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {leaders.map((leader, index) => (
              <Reveal
                key={leader.name}
                className="rounded-lg border border-[hsl(var(--primary)/0.1)] bg-white p-6 shadow-[0_22px_52px_rgba(9,35,66,0.1)] md:p-8"
                delay={(index % 2) * 0.08}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))]">
                  <Award className="h-6 w-6" />
                </div>
                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.4em] text-[hsl(var(--accent))]">
                  Leadership
                </p>
                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-[hsl(var(--primary))]">
                  {leader.name}
                </h2>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[hsl(var(--primary)/0.55)]">
                  {leader.role}
                </p>
                <div className="mt-4 space-y-3 text-sm sm:text-base text-[hsl(var(--primary)/0.7)]">
                  {leader.description.map((line) => (
                    <p key={line} className="leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>

                {leader.achievements && (
                  <div className="mt-6 rounded-lg border border-[hsl(var(--primary)/0.12)] bg-[hsl(var(--primary)/0.03)] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">
                      Achievements
                    </p>
                    <ul className="mt-3 grid gap-2 text-sm text-[hsl(var(--primary)/0.7)]">
                      {leader.achievements.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[hsl(var(--accent))]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {leader.focus && (
                  <div className="mt-6 rounded-lg border border-[hsl(var(--primary)/0.12)] bg-white p-4 shadow-[0_16px_35px_rgba(9,35,66,0.08)]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">
                      Focus
                    </p>
                    <p className="mt-3 text-sm text-[hsl(var(--primary)/0.7)]">
                      {leader.focus}
                    </p>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <Reveal className="relative overflow-hidden rounded-lg border border-[hsl(var(--primary)/0.1)] bg-white p-8 shadow-[0_24px_60px_rgba(9,35,66,0.1)] md:p-12">
            <div className="absolute right-6 top-6 text-[100px] font-bold leading-none text-[hsl(var(--primary)/0.04)] md:text-[160px]">
              TEAM
            </div>
            <div className="relative max-w-3xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))]">
                <Sparkles className="h-6 w-6" />
              </div>
              <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.42em] text-[hsl(var(--accent))]">
                Shared Direction
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[hsl(var(--primary))] md:text-5xl">
                One leadership vision, many areas of expertise.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-[hsl(var(--primary)/0.7)] md:text-base">
                The leadership team brings together academic planning,
                administration, strategic outreach, finance, and technology to
                strengthen Sri Chaitanya&apos;s learning ecosystem.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
