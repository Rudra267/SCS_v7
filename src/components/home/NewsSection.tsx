"use client";

import { motion, type Variants } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    date: "Aug 31, 2026",
    title: "CBSE Class X State-wise Top Results",
    category: "Academics",
    summary:
      "State toppers, merit lists, and standout performances across the region.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1753419158-23689.jpeg",
  },
  {
    date: "Aug 31, 2026",
    title: "NEET 2025 All India Top 100 Ranks",
    category: "Academics",
    summary:
      "Celebrating our toppers and the focused mentorship that made it possible.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1753419158-23688.jpg",
  },
  {
    date: "Jul 15, 2026",
    title: "Annual Sports Day 2026 Highlights",
    category: "Events",
    summary:
      "A day of energy, teamwork, and record-breaking performances on the field.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1753419158-23690.jpeg",
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

const newsCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.985,
    filter: "blur(4px)",
  },
  show: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const NewsSection = () => {
  const headingText = "News & Announcements";
  const loopingNews = [...news, ...news];
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
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const underlineDelay =
    0.05 + Math.max(headingText.length - 1, 0) * 0.03 + 0.35;
  const renderHeadingChars = (text: string) =>
    text.split("").map((char, index) => (
      <motion.span key={`${text}-${index}`} variants={headingChar} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  return (
    <section
      id="news"
      className="news-home relative overflow-hidden py-24 bg-background"
    >
      <div className="news-home__backdrop" aria-hidden="true" />
      <div className="news-home__mesh" aria-hidden="true" />
      <div className="news-home__glow news-home__glow--left" aria-hidden="true" />
      <div className="news-home__glow news-home__glow--center" aria-hidden="true" />
      <div className="news-home__glow news-home__glow--right" aria-hidden="true" />
      <div className="top-rankers-outline" aria-hidden="true" />
      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <svg
          aria-hidden="true"
          className="absolute right-16 top-20 h-12 w-12 text-[hsl(var(--accent)/0.12)] blur-[1px] float-fast hidden sm:block rotate-[-24deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 56l40-18v36L20 56z" />
          <path d="M60 38l30-8v52l-30-8" />
          <path d="M34 72l6 18" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute left-1/3 top-44 h-14 w-14 text-[hsl(var(--primary)/0.1)] blur-sm float-slow hidden sm:block rotate-[32deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="22" y="28" width="76" height="70" rx="10" />
          <path d="M22 44h76" />
          <path d="M38 22v12M82 22v12" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute right-1/3 top-52 h-14 w-14 text-[hsl(var(--accent)/0.12)] blur-[1px] float-medium hidden md:block rotate-[-18deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="24" y="36" width="72" height="48" rx="10" />
          <path d="M38 36l6-10h32l6 10" />
          <circle cx="60" cy="60" r="12" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute right-24 bottom-20 h-16 w-16 text-[hsl(var(--accent)/0.1)] blur-sm float-slow hidden md:block rotate-[58deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M36 20h48a6 6 0 0 1 6 6v78l-30-14-30 14V26a6 6 0 0 1 6-6z" />
        </svg>
      </motion.div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[50%] bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.75),rgba(255,255,255,0.35),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)]">
        <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.18),transparent_70%)] blur-[90px]" />
        <div className="absolute top-20 left-16 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.28),transparent_65%)] blur-[70px]" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.16),transparent_70%)] blur-[100px]" />
        <div className="absolute -bottom-28 left-1/4 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.18),transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-8 right-16 h-16 w-40 rotate-12 rounded-full bg-[linear-gradient(120deg,rgba(13,59,102,0.2),rgba(226,61,104,0.16),transparent)] blur-[70px]" />
      </div>
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-accent/20 bg-white px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.36em] text-accent shadow-[0_12px_30px_rgba(23,73,144,0.08)]">
              Stay Updated
            </span>
            <h2 className="mt-6 text-4xl md:text-6xl font-sans font-semibold text-foreground">
              <span className="sr-only">{headingText}</span>
              <motion.span
                aria-hidden="true"
                className="inline-flex flex-wrap"
                variants={headingContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                {renderHeadingChars("News & ")}
                <span className="relative inline-flex font-tomboy text-[#6A9FD0]">
                  {renderHeadingChars("Announcements")}
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: underlineDelay }}
                    className="absolute -bottom-2 left-0 right-0 h-2 origin-left rounded-full bg-[linear-gradient(90deg,#2B4A64_0%,#6A9FD0_62%,rgba(141,210,195,0)_100%)]"
                  />
                </span>
              </motion.span>
            </h2>
          </div>
          <a
            href="#"
            className="text-accent font-semibold uppercase tracking-[0.25em] text-xs flex items-center gap-2 hover:gap-3 transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          className="relative"
          variants={cardsGroupVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="overflow-hidden">
            <div className="news-loop-track flex gap-6">
              {loopingNews.map((item, index) => (
                <motion.article
                  key={`${item.title}-${index}`}
                  custom={index % news.length}
                  variants={newsCardVariants}
                  aria-hidden={index >= news.length}
                  className="group min-h-[250px] w-[calc(100vw-3rem)] shrink-0 overflow-hidden rounded-2xl border border-[hsl(var(--primary)/0.1)] bg-white p-7 text-left shadow-[0_16px_38px_rgba(8,23,46,0.08)] md:w-[calc((100%-1.5rem)/2)] xl:w-[calc((100%-3rem)/3)]"
                >
                <div>
                    <span className="inline-flex text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                      {item.category}
                    </span>
                  <div className="mt-3 flex items-center gap-2 text-[13px] uppercase tracking-[0.22em] text-foreground/50">
                    <Calendar className="h-4 w-4 text-accent" />
                      <span>{item.date}</span>
                  </div>
                  <h3 className="mt-4 line-clamp-2 text-[1rem] font-semibold leading-tight text-[hsl(var(--primary))] [font-family:Georgia,serif] md:text-[1.1rem]">
                      {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-8 text-[hsl(var(--primary)/0.62)]">
                      {item.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.28em] text-accent">
                    Read more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
