"use client";

import { motion, type Variants } from "framer-motion";
import {
  BookOpenCheck,
  Building2,
  HeartHandshake,
  Lightbulb,
  Stethoscope,
} from "lucide-react";

const journeyItems = [
  {
    title: "Early Life & Medical Career",
    eyebrow: "Foundation",
    icon: Stethoscope,
    text:
      "Born in Angaluru village in Krishna District, Andhra Pradesh, Dr. Rao pursued his medical education at Guntur Medical College. After completing his studies, he practiced medicine in the United Kingdom and Iran for more than 15 years before returning to India with a larger mission to revolutionize the Indian education system.",
  },
  {
    title: "Establishing Sri Chaitanya",
    eyebrow: "1986",
    icon: BookOpenCheck,
    text:
      "In 1986, Dr. Rao and his wife Dr. Jhansi Lakshmi Bai Boppana founded the first Sri Chaitanya Girls Junior College in Vijayawada. Their goal was to integrate school education with structured preparation for competitive exams such as IIT-JEE, NEET, and EAMCET.",
  },
  {
    title: "Growth of the Institution",
    eyebrow: "Expansion",
    icon: Building2,
    text:
      "Under Dr. Rao's leadership, Sri Chaitanya expanded from a single junior college into one of India's largest educational ecosystems.",
  },
  {
    title: "Vision & Educational Philosophy",
    eyebrow: "Belief",
    icon: Lightbulb,
    text:
      "Dr. Rao believed that every child has the potential to succeed when provided with the right guidance and opportunities.",
  },
];

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 96,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const FounderJourney = () => {
  return (
    <section className="bg-[#f7f9fc] py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <FounderStoryIntro />

          <div className="relative">
            <div className="absolute bottom-0 left-5 top-8 hidden w-px bg-[linear-gradient(180deg,hsl(var(--accent)/0.12),hsl(var(--accent)/0.62),hsl(var(--primary)/0.12))] md:block" />
            <div className="grid gap-8 md:pl-16">
              {journeyItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="sticky rounded-lg border border-[hsl(var(--primary)/0.1)] bg-white p-6 shadow-[0_22px_52px_rgba(9,35,66,0.12)] md:p-8"
                  style={{
                    top: `${120 + index * 18}px`,
                    zIndex: index + 1,
                  }}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                >
                  <span className="absolute -left-[4.55rem] top-7 hidden h-10 w-10 items-center justify-center rounded-lg border border-[hsl(var(--primary)/0.12)] bg-white text-[hsl(var(--accent))] shadow-[0_12px_28px_rgba(9,35,66,0.12)] md:flex">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[hsl(var(--primary)/0.12)] bg-[hsl(var(--accent)/0.08)] text-[hsl(var(--accent))] md:hidden">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.36em] text-[hsl(var(--accent))] md:mt-0">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[hsl(var(--primary))] md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-[hsl(var(--primary)/0.68)] md:text-base">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FounderStoryIntro = () => (
  <div className="lg:sticky lg:top-32">
    <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-[hsl(var(--accent))]">
      Founder Story
    </p>
    <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-[hsl(var(--primary))] md:text-5xl">
      A journey from medicine to a national education movement.
    </h2>
    <p className="mt-5 max-w-lg text-sm leading-relaxed text-[hsl(var(--primary)/0.68)]">
      He played a pioneering role in transforming the way competitive education
      is delivered in India, combining school learning with structure,
      discipline, testing, and mentorship.
    </p>
    <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[hsl(var(--primary))]">
      <HeartHandshake className="h-5 w-5 text-[hsl(var(--accent))]" />
      Sri Chaitanya Educational Institutions
    </div>
  </div>
);

export default FounderJourney;
