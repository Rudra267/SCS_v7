"use client";

import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Award, Medal, Sparkles, Trophy } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Achievement } from "@/lib/achievements";

const categoryIcons: Record<string, typeof Trophy> = {
  Academics: Trophy,
  "Co-Curricular": Award,
  Sports: Medal,
};

const PAGE_SIZE = 12;

const achievementHighlights = [
  {
    label: "Academics",
    title: "Board exam excellence",
    text: "Top scores, merit lists, and academic milestones will be showcased here.",
  },
  {
    label: "Competitions",
    title: "Olympiad and quiz achievements",
    text: "Inter-school, state, and national recognitions will be added as they are published.",
  },
  {
    label: "Sports",
    title: "Sports and co-curricular wins",
    text: "Tournament wins, medals, and student talent highlights will appear in this section.",
  },
];

const extractAchievementStat = (achievement: Achievement) => {
  const combined = `${achievement.title} ${achievement.description}`;
  const statMatch = combined.match(/\b\d{2,3}(?:\s?%|\+)?\b/);
  return statMatch ? statMatch[0].replace(/\s+/g, "") : "Top";
};

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
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const renderHeadingChars = (text: string) =>
  text.split("").map((char, index) => (
    <motion.span key={`${text}-${index}`} variants={headingChar} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));

const achievementsUnderlineDelay =
  0.05 + Math.max("Our Achievements".length - 1, 0) * 0.03 + 0.35;

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

const scrollCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.98,
    filter: "blur(3px)",
  },
  show: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.65,
      delay: Math.min(index % 3, 2) * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const AchievementsSection = ({
  achievements = [],
  variant = "listing",
}: {
  achievements?: Achievement[];
  variant?: "home" | "listing";
}) => {
  const [activeAchievement, setActiveAchievement] = useState<Achievement | null>(null);
  const [page, setPage] = useState(1);

  const scrollToSectionTop = () => {
    document.getElementById("achievements")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const changePage = (nextPage: number) => {
    setPage(nextPage);
    window.requestAnimationFrame(scrollToSectionTop);
  };

  const filteredAchievements = useMemo(
    () =>
      achievements.filter(
        (item) => item.title.trim().toLowerCase() !== "achievements",
      ),
    [achievements],
  );
  const totalPages = Math.max(1, Math.ceil(filteredAchievements.length / PAGE_SIZE));
  const visibleAchievements = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredAchievements.slice(start, start + PAGE_SIZE);
  }, [filteredAchievements, page]);
  const homeAchievements = filteredAchievements.slice(0, 3);

  return (
    <section
      id="achievements"
      className={`relative overflow-hidden py-20 ${
        variant === "home"
          ? "achievements-home bg-background"
          : "bg-[linear-gradient(180deg,#f8f7f3_0%,#ffffff_55%,#f6f7fb_100%)]"
      }`}
    >
      {variant === "home" ? (
        <>
          <div className="achievements-home__backdrop" aria-hidden="true" />
          <div className="achievements-home__grid" aria-hidden="true" />
          <div className="achievements-home__glow achievements-home__glow--left" aria-hidden="true" />
          <div className="achievements-home__glow achievements-home__glow--right" aria-hidden="true" />
          <div className="top-rankers-outline" aria-hidden="true" />
          <div className="top-rankers-outline-bottom" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[50%] bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.75),rgba(255,255,255,0.35),transparent_70%)]" />
          <div className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)]">
            <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.16),transparent_70%)] blur-[90px]" />
            <div className="absolute top-20 left-16 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.2),transparent_65%)] blur-[70px]" />
            <div className="absolute -bottom-28 left-1/4 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.14),transparent_70%)] blur-[100px]" />
          </div>
        </>
      ) : (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.12),transparent_70%)] blur-[90px]" />
          <div className="absolute top-40 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.1),transparent_70%)] blur-[110px]" />
        </div>
      )}

      <div className="container relative z-10 mx-auto px-6">
        {variant === "home" && homeAchievements.length > 0 ? (
          <div className="space-y-14">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="inline-flex rounded-full border border-accent/20 bg-white px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.36em] text-accent shadow-[0_12px_30px_rgba(23,73,144,0.08)]">
                  Proud Moments
                </span>
                <h2 className="mt-6 text-4xl font-sans font-semibold text-foreground md:text-6xl">
                  <span className="sr-only">Our Achievements</span>
                  <motion.span
                    aria-hidden="true"
                    className="inline-flex flex-wrap"
                    variants={headingContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    {renderHeadingChars("Our ")}
                    <span className="relative inline-flex font-tomboy text-[#6A9FD0]">
                      {renderHeadingChars("Achievements")}
                      <motion.span
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: achievementsUnderlineDelay,
                        }}
                        className="absolute -bottom-2 left-0 right-0 h-2 origin-left rounded-full bg-[linear-gradient(90deg,#2B4A64_0%,#6A9FD0_62%,rgba(141,210,195,0)_100%)]"
                      />
                    </span>
                  </motion.span>
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                  Milestones that celebrate academic excellence, standout performances, and proud student outcomes across the school community.
                </p>
              </div>
              <a
                href="/achievements"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent transition-all hover:gap-3"
              >
                View All <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <motion.div
              className="grid gap-5"
              variants={cardsGroupVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {homeAchievements.map((item, index) => {
                return (
                  <motion.article key={item.id} className="group" custom={index} variants={scrollCardVariants}>
                    <button
                      type="button"
                      onClick={() => setActiveAchievement(item)}
                      className="relative w-full overflow-hidden border-t border-black/15 bg-transparent text-left transition duration-300"
                    >
                      <div className="pointer-events-none absolute inset-0 origin-top scale-y-0 bg-[linear-gradient(135deg,#2B4A64_0%,#6A9FD0_48%,#8DD2C3_100%)] opacity-95 transition-transform duration-500 ease-out group-hover:scale-y-100" />
                      <div className="relative z-10 grid gap-4 px-5 py-6 md:grid-cols-[1fr_138px] md:items-center md:px-6">
                        <div>
                          <h3 className="text-[1.2rem] font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-white [font-family:Georgia,serif]">
                            {item.title}
                          </h3>
                          <p className="mt-2.5 text-[15px] leading-7 text-foreground/68 transition-colors duration-300 group-hover:text-white">
                            {item.description || "A proud student achievement from Sri Chaitanya Schools."}
                          </p>
                        </div>
                        <div className="relative h-24 overflow-hidden rounded-[18px] border border-black/10 bg-transparent transition-colors duration-300 group-hover:border-white/20 md:h-28">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="138px"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#081a2e]/35 to-transparent" />
                        </div>
                      </div>
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        ) : visibleAchievements.length === 0 ? (
          <div
            className="page-enter-card overflow-hidden rounded-3xl border border-[hsl(var(--primary)/0.12)] bg-white shadow-[0_24px_70px_rgba(9,35,66,0.12)]"
            style={{ animationDelay: "360ms" }}
          >
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.4fr]">
              <div className="relative overflow-hidden bg-[linear-gradient(135deg,#0b2f52_0%,#0d3b66_65%,#17496f_100%)] p-8 text-white md:p-10">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/15" />
                <div className="absolute -bottom-20 left-8 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
                <span className="relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80">
                  <Trophy className="h-4 w-4 text-[hsl(var(--accent))]" />
                  Achievements
                </span>
                <h2 className="relative mt-6 text-3xl font-semibold leading-tight md:text-4xl">
                  Student achievements will be showcased here
                </h2>
                <p className="relative mt-4 max-w-md text-sm leading-relaxed text-white/75">
                  Academic ranks, competition awards, sports medals, and school recognitions will appear here once they are added.
                </p>
                <a
                  href="/achievements"
                  className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(var(--primary))] shadow-[0_16px_34px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:text-[hsl(var(--accent))]"
                >
                  View Achievements
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-6 md:p-8">
                <div className="grid gap-4">
                  {achievementHighlights.map((item, index) => (
                    <motion.article
                      key={item.title}
                      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-[hsl(var(--accent)/0.35)] hover:shadow-[0_18px_42px_rgba(15,23,42,0.1)]"
                      custom={index}
                      variants={scrollCardVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                    >
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[hsl(var(--primary)/0.06)] text-[hsl(var(--primary))] transition group-hover:bg-[hsl(var(--accent)/0.12)] group-hover:text-[hsl(var(--accent))]">
                          {index === 0 ? (
                            <Trophy className="h-5 w-5" />
                          ) : index === 1 ? (
                            <Sparkles className="h-5 w-5" />
                          ) : (
                            <Medal className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[hsl(var(--accent))]">
                            {item.label}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-[hsl(var(--primary))]">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--primary)/0.65)]">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleAchievements.map((item, index) => {
                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveAchievement(item)}
                    className="group overflow-hidden rounded-3xl border border-[hsl(var(--primary)/0.12)] bg-white text-left shadow-[0_20px_45px_rgba(9,35,66,0.12)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(9,35,66,0.16)]"
                    custom={index}
                    variants={scrollCardVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    aria-label={`View details for ${item.title}`}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[hsl(var(--primary))]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-[hsl(var(--primary)/0.65)]">
                        {item.description || "Click to see the full highlight."}
                      </p>
                      <span className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(var(--accent))]">
                        View details
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {totalPages > 1 ? (
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.35em] text-[hsl(var(--primary)/0.6)]">
                  Page {page} of {totalPages}
                </p>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => changePage(Math.max(1, page - 1))}
                    disabled={page === 1}
                    className="rounded-full border border-[hsl(var(--primary)/0.2)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(var(--primary))] transition disabled:cursor-not-allowed disabled:opacity-50 hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => changePage(Math.min(totalPages, page + 1))}
                    disabled={page === totalPages}
                    className="rounded-full border border-[hsl(var(--primary)/0.2)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(var(--primary))] transition disabled:cursor-not-allowed disabled:opacity-50 hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]"
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : null}
          </>
        )}
      </div>

      <Dialog
        open={Boolean(activeAchievement)}
        onOpenChange={(open) => {
          if (!open) {
            setActiveAchievement(null);
          }
        }}
      >
        <DialogContent className="w-[min(92vw,980px)] max-w-4xl overflow-hidden border border-white/10 bg-white p-0 shadow-[0_30px_70px_rgba(8,23,46,0.35)] sm:rounded-2xl">
          {activeAchievement ? (
            <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative h-64 md:h-full">
                {(() => {
                  const ActiveIcon = categoryIcons[activeAchievement.category] ?? Trophy;
                  return (
                    <>
                      <Image
                        src={activeAchievement.image}
                        alt={activeAchievement.title}
                        fill
                        sizes="(min-width: 768px) 55vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                      <div className="absolute left-6 bottom-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-[hsl(var(--primary))] shadow-[0_10px_26px_rgba(0,0,0,0.2)]">
                        <ActiveIcon className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
                        {activeAchievement.category}
                      </div>
                    </>
                  );
                })()}
              </div>
              <div className="p-6 sm:p-8">
                <DialogHeader className="text-left">
                  <DialogTitle className="text-2xl sm:text-3xl text-[hsl(var(--primary))]">
                    {activeAchievement.title}
                  </DialogTitle>
                  <DialogDescription className="mt-3 text-sm sm:text-base text-[hsl(var(--primary)/0.7)]">
                    {activeAchievement.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-6 rounded-2xl border border-[hsl(var(--primary)/0.12)] bg-[hsl(var(--primary)/0.03)] p-5 text-sm text-[hsl(var(--primary)/0.7)]">
                  This achievement highlights Sri Chaitanya Schools' continued focus on student
                  excellence and outcome-driven learning.
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AchievementsSection;
