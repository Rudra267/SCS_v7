"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { BookOpen, Briefcase, Target, Users } from "lucide-react";

const schoolInfo = [
  {
    icon: BookOpen,
    title: "Who We Are",
    text: "At Sri Chaitanya, we have created a unique blend of world-class curricula, contemporary teaching methodologies, and equal focus on intellectual, physical and personality development, resulting future leaders who are ready to take on the world.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558672053-13377.jpg",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "Our goal is to focus on the holistic development of each child, and to give them a competitive edge with the help of an extensive curriculum and dynamic teaching methodologies.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671948-13374.jpg",
  },
  {
    icon: Users,
    title: "Management",
    text: "Our management's futuristic vision, determination and leadership has enabled them to set new benchmarks, ultimately resulting in a world-class education system with a community of global learners.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671948-13375.jpg",
  },
];

const highlights = [
  {
    icon: Users,
    title: "Who We Are",
    text: "Sri Chaitanya blends strong academics, modern teaching, and all-round development to shape confident future leaders.",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "Our mission is to support every child with holistic growth, strong curriculum, and dynamic learning.",
  },
  {
    icon: Briefcase,
    title: "Management",
    text: "Our leadership drives high standards, innovation, and a world-class learning environment for students.",
  },
];

const AboutSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const headingContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.04,
      },
    },
  };
  const headingChar: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.42, ease: [0, 0, 0.2, 1] },
    },
  };

  const renderHeadingChars = (text: string) =>
    text.split("").map((char, index) => (
      <motion.span key={`${text}-${index}`} variants={headingChar} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % schoolInfo.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#FCFFFE_0%,#F6FCF9_42%,#D9F3E7_100%)] pb-24 pt-16"
    >
      <div className="top-rankers-outline" aria-hidden="true" />
      <div className="top-rankers-outline-bottom" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[50%] bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.75),rgba(255,255,255,0.35),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-90px] top-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(106,159,208,0.14),transparent_72%)] blur-3xl" />
        <div className="absolute right-[-80px] bottom-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(141,210,195,0.18),transparent_72%)] blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
        >
          <div className="max-w-xl">
            <span className="inline-flex rounded-full border border-accent/20 bg-white px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.36em] text-accent shadow-[0_12px_30px_rgba(23,73,144,0.08)]">
              About The School
            </span>
            <h2 className="mt-10 font-sans text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              <span className="sr-only">Building Confident Learners</span>
              <motion.span
                aria-hidden="true"
                className="inline-flex flex-wrap"
                variants={headingContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                {renderHeadingChars("Building")}
              </motion.span>
              <motion.span
                aria-hidden="true"
                className="relative block w-fit font-tomboy text-[#6A9FD0]"
                variants={headingContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                {renderHeadingChars("Confident Learners")}
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
                  className="absolute -bottom-1 left-0 right-0 h-2 origin-left rounded-full bg-[linear-gradient(90deg,#2B4A64_0%,#6A9FD0_48%,rgba(141,210,195,0)_100%)] shadow-[0_0_18px_rgba(106,159,208,0.18)]"
                />
              </motion.span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
              Sri Chaitanya Schools creates a learning environment where academic discipline,
              student care, and long-term development come together to shape capable and confident learners.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-border/80 bg-white p-5 shadow-[0_18px_40px_rgba(13,59,102,0.08)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-accent">
                  School Approach
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Strong academics supported by structure, guidance, and a student-first culture.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-[rgba(106,159,208,0.26)] bg-[linear-gradient(135deg,#2B4A64_0%,#6A9FD0_52%,#8DD2C3_100%)] p-5 text-white shadow-[0_22px_50px_rgba(43,74,100,0.18),0_0_28px_rgba(141,210,195,0.12)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/70">
                  Core Promise
                </p>
                <p className="mt-3 text-sm leading-7 text-white/82">
                  To help every student grow with clarity, character, and confidence.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 72 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-white p-4 shadow-[0_20px_45px_rgba(9,35,66,0.12)]">
              <div className="relative min-h-[420px] overflow-hidden rounded-[28px]">
                {schoolInfo.map((item, index) => (
                  <Image
                    key={item.title}
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className={`object-cover transition-opacity duration-700 ${
                      index === activeSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,46,0.08),rgba(8,24,46,0.26))]" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid gap-4 md:grid-cols-3"
        >
          {highlights.map((item) => (
            <div key={item.title} className="group">
              <div className="flip-card relative h-[250px] transition-transform duration-500 group-hover:-translate-y-1">
                <div className="flip-card__inner">
                  <div className="flip-card__face flip-card__face--front w-full overflow-hidden rounded-2xl border border-border/80 bg-white text-left shadow-[0_18px_40px_rgba(13,59,102,0.08)]">
                    <div className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#2B4A64_0%,#6A9FD0_55%,#8DD2C3_100%)] text-white shadow-[0_12px_28px_rgba(43,74,100,0.18),0_0_22px_rgba(141,210,195,0.12)]">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h4 className="mt-5 text-xl font-serif font-bold text-foreground">{item.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                  <div className="flip-card__face flip-card__face--back w-full overflow-hidden rounded-2xl border border-[rgba(106,159,208,0.28)] bg-[linear-gradient(135deg,#2B4A64_0%,#4F7BA2_52%,#8DD2C3_100%)] text-left text-white shadow-[0_22px_50px_rgba(43,74,100,0.22),0_0_26px_rgba(141,210,195,0.12)]">
                    <div className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h4 className="mt-5 text-xl font-serif font-bold text-white">{item.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-white/78">{item.text}</p>
                      <div className="mt-5 h-px w-full bg-gradient-to-r from-white/30 via-white/10 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
