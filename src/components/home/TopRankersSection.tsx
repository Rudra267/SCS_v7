"use client";

import { motion, type Variants, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Award, Medal, Sparkles, Trophy } from "lucide-react";

const rankers = [
  {
    name: "Aarav Reddy",
    roll: "SC-24-1107",
    score: "98.1%",
    badge: "School Topper",
    stream: "CBSE XII Science",
    credential: "Merit Certificate",
    year: "2023-24",
    image:
      "https://images.pexels.com/photos/12926479/pexels-photo-12926479.jpeg?cs=srgb&dl=pexels-nandhukumar-12926479.jpg&fm=jpg",
  },
  {
    name: "Ananya Sharma",
    roll: "SC-24-2049",
    score: "97.4%",
    badge: "State Rank",
    stream: "CBSE XII Biology",
    credential: "Excellence Award",
    year: "2023-24",
    image:
      "https://images.pexels.com/photos/30768834/pexels-photo-30768834.jpeg?cs=srgb&dl=pexels-artosuraj-30768834.jpg&fm=jpg",
  },
  {
    name: "Vivek Iyer",
    roll: "SC-24-3092",
    score: "96.2%",
    badge: "District Topper",
    stream: "CBSE XII Maths",
    credential: "Merit Certificate",
    year: "2023-24",
    image:
      "https://images.pexels.com/photos/17053878/pexels-photo-17053878.jpeg?cs=srgb&dl=pexels-deepshikha-sinha-580932792-17053878.jpg&fm=jpg",
  },
];

const cardsGroupVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const TopRankersSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });
  const headingText = "Celebrating our highest achievers";
  const accentPalette = [
    "from-[#2B4A64] via-[#4F7BA2] to-[#6A9FD0]",
    "from-[#6A9FD0] via-[#8DD2C3] to-[#D9F3E7]",
    "from-[#365E7D] via-[#6A9FD0] to-[#8DD2C3]",
  ];
  const podium = [
    { ...rankers[1], rank: 2, accent: accentPalette[1], lift: "", icon: Medal },
    { ...rankers[0], rank: 1, accent: accentPalette[0], lift: "", icon: Trophy },
    { ...rankers[2], rank: 3, accent: accentPalette[2], lift: "", icon: Award },
  ];
  const headingContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.05,
      },
    },
  };
  const headingChar: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };
  const underlineDelay =
    0.05 + Math.max(headingText.length - 1, 0) * 0.03 + 0.35;
  const renderHeadingChars = (text: string): JSX.Element[] =>
    text.split("").map((char, index) => (
      <motion.span key={`${text}-${index}`} variants={headingChar} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  return (
    <section
      ref={sectionRef}
      className="top-rankers-home relative overflow-hidden py-24 bg-[radial-gradient(circle_at_top,#F4FBF8_0%,#FCFFFE_55%,#F2FBF7_100%)]"
    >
      <div className="top-rankers-home__backdrop" aria-hidden="true" />
      <div className="top-rankers-home__mesh" aria-hidden="true" />
      <div className="top-rankers-home__glow top-rankers-home__glow--left" aria-hidden="true" />
      <div className="top-rankers-home__glow top-rankers-home__glow--center" aria-hidden="true" />
      <div className="top-rankers-home__glow top-rankers-home__glow--right" aria-hidden="true" />
      <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="top-rankers-outline z-[1]" aria-hidden="true" />
      <div className={`rankers-celebration ${isInView ? "is-active" : ""}`} aria-hidden="true">
        {[
          { x: "22%", y: "12%", d: "0ms", s: "0.9" },
          { x: "32%", y: "6%", d: "120ms", s: "0.7" },
          { x: "44%", y: "10%", d: "220ms", s: "1" },
          { x: "56%", y: "7%", d: "320ms", s: "0.8" },
          { x: "68%", y: "12%", d: "160ms", s: "0.75" },
          { x: "78%", y: "8%", d: "260ms", s: "0.85" },
          { x: "40%", y: "16%", d: "420ms", s: "0.7" },
          { x: "60%", y: "16%", d: "520ms", s: "0.75" },
        ].map((item, index) => (
          <span
            key={`spark-${index}`}
            className="rankers-celebration__spark"
            style={
              {
                "--x": item.x,
                "--y": item.y,
                "--d": item.d,
                "--s": item.s,
              } as React.CSSProperties
            }
          />
        ))}
        {[
          { x: "26%", y: "20%", d: "80ms", s: "1", r: "-12deg", t: "✨" },
          { x: "38%", y: "14%", d: "180ms", s: "1.1", r: "8deg", t: "🎉" },
          { x: "52%", y: "18%", d: "260ms", s: "0.95", r: "-6deg", t: "⭐" },
          { x: "66%", y: "14%", d: "320ms", s: "1.05", r: "10deg", t: "✨" },
          { x: "74%", y: "20%", d: "420ms", s: "0.9", r: "-8deg", t: "🎊" },
        ].map((item, index) => (
          <span
            key={`emoji-${index}`}
            className="rankers-celebration__emoji"
            style={
              {
                "--x": item.x,
                "--y": item.y,
                "--d": item.d,
                "--s": item.s,
                "--r": item.r,
              } as React.CSSProperties
            }
          >
            {item.t}
          </span>
        ))}
      </div>
      <div
        className="absolute inset-0 opacity-40 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15,23,42,0.08) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="top-rankers-outline-bottom z-[1]" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/80 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent shadow-[0_10px_30px_rgba(13,59,102,0.12)]">
            <Sparkles className="h-3.5 w-3.5" />
            Top Rankers
          </span>
          <h2 className="mt-6 text-[2.1rem] font-sans font-semibold leading-tight text-foreground sm:text-[2.5rem] md:text-6xl">
            <span className="sr-only">{headingText}</span>
            <span aria-hidden="true" className="block md:hidden">
              <span className="block">Celebrating our</span>
              <span className="relative mt-1 inline-block font-tomboy text-[#6A9FD0]">
                highest achievers
                <span className="absolute -bottom-2 left-0 right-0 h-2 rounded-full bg-gradient-to-r from-accent/70 via-accent/30 to-transparent" />
              </span>
            </span>
            <motion.span
              aria-hidden="true"
              className="hidden flex-wrap justify-center md:inline-flex"
              variants={headingContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <span className="relative inline-flex">
                {renderHeadingChars("Celebrating our ")}
                <span className="relative inline-flex font-tomboy text-[#6A9FD0]">
                  {renderHeadingChars("highest achievers")}
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: underlineDelay }}
                    className="absolute -bottom-2 left-0 right-0 h-2 origin-left rounded-full bg-gradient-to-r from-accent/70 via-accent/30 to-transparent"
                  />
                </span>
              </span>
            </motion.span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Spotlighting the students who set the benchmark with outstanding scores and dedication.
          </p>
        </motion.div>

        <div className="relative mt-10">
          <div className="pointer-events-none absolute bottom-6 left-0 z-0 h-[360px] w-[220px] rounded-r-[36px] bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_55%,rgba(255,255,255,0)_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-[32px] bg-gradient-to-r from-white via-white to-white shadow-[0_14px_28px_rgba(15,23,42,0.04)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-[32px] bg-[linear-gradient(90deg,rgba(59,130,246,0.02)_0%,rgba(255,255,255,0)_42%,rgba(59,130,246,0.02)_100%)]" />
          <motion.div
            className="relative grid gap-6 md:grid-cols-3 md:items-end"
            variants={cardsGroupVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {podium.map((ranker) => (
              <motion.article
                key={ranker.roll}
                className={`group relative overflow-hidden rounded-2xl border border-white/90 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.05),0_0_0_1px_rgba(255,255,255,0.9)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_16px_34px_rgba(15,23,42,0.08),0_0_0_1px_rgba(255,255,255,0.95)] ${ranker.lift}`}
              >
                <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${ranker.accent}`} />
                <div className="absolute right-4 top-5 z-10">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${ranker.accent} text-white shadow-[0_14px_28px_rgba(15,23,42,0.2)]`}>
                    <ranker.icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${ranker.accent} opacity-[0.08]`} />
                  <div className="relative px-6 pb-5 pt-8 text-center">
                    <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-600 shadow-sm">
                      Rank {ranker.rank}
                    </div>

                    <div className="mt-5 flex justify-center">
                      <div className="relative h-32 w-32 overflow-hidden rounded-2xl bg-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.22)] ring-4 ring-white">
                      <Image
                        src={ranker.image}
                        alt={ranker.name}
                        loading="lazy"
                        fill
                        sizes="128px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-2">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white">
                            {ranker.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-[11px] uppercase tracking-[0.35em] text-slate-500">
                      {ranker.stream}
                    </p>
                    <h3 className="mt-2 text-2xl font-serif font-bold text-slate-950">
                      {ranker.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">Roll No: {ranker.roll}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-5">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <span
                        className={`text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${ranker.accent}`}
                      >
                        {ranker.score}
                      </span>
                      <span className="rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold text-emerald-700">
                        {ranker.badge}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                      <Award className="h-4 w-4 text-slate-400" />
                      <span>{ranker.credential}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TopRankersSection;
