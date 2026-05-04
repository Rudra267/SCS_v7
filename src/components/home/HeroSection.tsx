"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Search } from "lucide-react";
import heroSlide1 from "@/assets/hero-slider/1.jpeg";
import heroSlide2 from "@/assets/hero-slider/2.jpeg";
import heroSlide3 from "@/assets/hero-slider/3.jpeg";
import heroSlide4 from "@/assets/hero-slider/4.jpeg";
import heroSlide5 from "@/assets/hero-slider/5.jpeg";

const heroVideoSlide = "/assets/hero-slider/hero.mp4";

type Slide = {
  image: string | StaticImageData;
  tag: string;
  title: string;
  highlight: string;
  text: string;
  cta: string;
  href: string;
  poster?: string;
  mediaPosition?: string;
  mobileMediaPosition?: string;
  mediaFit?: "cover" | "contain";
  mobileMediaFit?: "cover" | "contain";
};

const isVideoSlide = (media: Slide["image"]) => typeof media === "string" && media.endsWith(".mp4");
const getSlideAspectRatio = (slide: Slide) =>
  typeof slide.image === "string" ? "1920 / 500" : `${slide.image.width} / ${slide.image.height}`;

const slides: Slide[] = [
  {
    image: heroVideoSlide,
    poster: heroSlide3.src,
    tag: "Community First",
    title: "A school",
    highlight: "that feels like home",
    text: "Wellbeing, safety, and a vibrant community make every day a confident step forward.",
    cta: "Talk to Admissions",
    href: "/contact",
    mediaPosition: "center center",
    mobileMediaPosition: "center center",
    mediaFit: "cover",
    mobileMediaFit: "cover",
  },
  {
    image: heroSlide1,
    tag: "Personalized Learning Pathways",
    title: "Unlocking",
    highlight: "Student Potential",
    text: "Expert faculty, modern infrastructure, and a supportive culture help every learner thrive.",
    cta: "Apply for Admission",
    href: "/admissions",
    mediaPosition: "center center",
    mobileMediaPosition: "center center",
    mediaFit: "contain",
    mobileMediaFit: "contain",
  },
  {
    image: heroSlide2,
    tag: "Future-Ready Curriculum",
    title: "Building",
    highlight: "Bright Futures",
    text: "Hands-on learning, digital skills, and strong mentorship empower students to excel.",
    cta: "Explore Programs",
    href: "/academics/pre-primary",
    mediaPosition: "center center",
    mobileMediaPosition: "center center",
    mediaFit: "contain",
    mobileMediaFit: "contain",
  },
  {
    image: heroSlide3,
    tag: "Achievement Highlights",
    title: "Celebrating",
    highlight: "Top Performers",
    text: "Student success stories and outstanding academic milestones stay front and center.",
    cta: "Explore Programs",
    href: "/academics/pre-primary",
    mediaPosition: "center center",
    mobileMediaPosition: "center center",
    mediaFit: "contain",
    mobileMediaFit: "contain",
  },
  {
    image: heroSlide4,
    tag: "Results That Inspire",
    title: "Excellence",
    highlight: "In Every Step",
    text: "A focused learning environment helps students achieve strong and consistent results.",
    cta: "Talk to Admissions",
    href: "/contact",
    mediaPosition: "center center",
    mobileMediaPosition: "center center",
    mediaFit: "contain",
    mobileMediaFit: "contain",
  },
  {
    image: heroSlide5,
    tag: "Future-Ready Learning",
    title: "Growing",
    highlight: "Confident Learners",
    text: "From strong academics to modern learning support, every child gets room to shine.",
    cta: "Apply for Admission",
    href: "/admissions",
    mediaPosition: "center center",
    mobileMediaPosition: "center center",
    mediaFit: "contain",
    mobileMediaFit: "contain",
  },
];

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.05,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const slideMotion: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 70 : -70,
    rotate: direction > 0 ? 1.2 : -1.2,
    scale: 1.035,
    filter: "blur(10px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -48 : 48,
    rotate: direction > 0 ? -0.8 : 0.8,
    scale: 0.985,
    filter: "blur(8px)",
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

const mediaFrameClass = "absolute inset-0 h-full w-full";
const navButtonClass =
  "flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/12 text-white shadow-[0_12px_28px_rgba(10,24,40,0.18)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/24";

const getMediaClass = (fit: Slide["mediaFit"] = "cover", extraClassName = "") =>
  `${mediaFrameClass} ${fit === "contain" ? "object-contain" : "object-cover"} ${extraClassName}`.trim();

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
 const [selectedState, setSelectedState] = useState("");
const [selectedCity, setSelectedCity] = useState("");
const [selectedBranch, setSelectedBranch] = useState("");

const cities = {
  Telangana: ["Hyderabad", "Warangal"],
  "Andhra Pradesh": ["Vijayawada", "Visakhapatnam"],
  Karnataka: ["Bengaluru"],
  "Tamil Nadu": ["Chennai"]
};

const branches = {
  Hyderabad: ["Jubilee Hills", "Madhapur", "Hitech City"],
  Warangal: ["Hanamkonda", "Kazipet"],
  Vijayawada: ["Benz Circle", "Patamata"],
  Visakhapatnam: ["MVP Colony", "Gajuwaka"],
  Bengaluru: ["Whitefield", "Yelahanka"],
  Chennai: ["Anna Nagar", "Velachery"]
};

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);
  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];
  const isBannerSlide = true;
  const slideAspectRatio = getSlideAspectRatio(slide);
  const bannerWrapperStyle = { aspectRatio: slideAspectRatio };
  const mobileMediaWrapperClass = isBannerSlide ? "" : "aspect-[16/9]";
  const tabletMediaWrapperClass = isBannerSlide ? "" : "h-[420px] min-[1200px]:h-[500px]";
  const desktopMediaWrapperClass = isBannerSlide
    ? "relative hidden w-full overflow-hidden bg-[#233E54] min-[1540px]:block"
    : "absolute inset-0 hidden overflow-hidden min-[1540px]:block";
  const sectionClassName = isBannerSlide
    ? "relative z-20 isolate mt-[124px] w-full bg-transparent sm:mt-[138px] min-[900px]:mt-[132px] min-[1540px]:mt-[138px] min-[1540px]:bg-[linear-gradient(180deg,#fbfefe_0%,#f2fbf8_42%,#eef8f5_100%)] min-[1540px]:pb-0"
    : "relative isolate mt-[96px] w-full bg-transparent sm:mt-[112px] min-[900px]:mt-[80px] min-[900px]:bg-transparent min-[1540px]:mt-0 min-[1540px]:min-h-screen min-[1540px]:bg-[#233E54] min-[1540px]:pb-20";
  const locationSelectorWrapperClass = isBannerSlide
    ? "relative z-50 bg-transparent px-0 pb-0 pt-4 min-[900px]:-mb-16 min-[900px]:mt-0 min-[900px]:px-0 min-[1200px]:-mb-20 min-[1200px]:mt-0 min-[1540px]:-mb-24 min-[1540px]:mt-0 min-[1540px]:bg-transparent min-[1540px]:pb-0"
    : "relative z-50 bg-transparent px-0 pb-0 pt-0 min-[900px]:-mt-16 min-[900px]:px-0 min-[1200px]:-mt-20 min-[1540px]:-mt-28 min-[1540px]:bg-transparent min-[1540px]:pb-6";

  return (
    <section id="home" className={sectionClassName}>
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[240px] min-[1540px]:block">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.86)_0%,rgba(255,255,255,0.68)_44%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute right-[-90px] top-[-60px] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(141,210,195,0.42),rgba(141,210,195,0.12)_58%,transparent_70%)]" />
        <div className="absolute right-[160px] top-[8px] h-[92px] w-[92px] rounded-full bg-[radial-gradient(circle,rgba(106,159,208,0.22),rgba(106,159,208,0)_72%)]" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(79,123,162,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,123,162,0.06) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,0))",
            WebkitMaskImage:
              "linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[250px] min-[1540px]:block">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(237,247,244,0)_0%,rgba(223,239,235,0.7)_28%,rgba(143,178,206,0.38)_62%,rgba(64,104,134,0.72)_100%)]" />
        <div className="absolute left-1/2 top-[52px] h-[180px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(106,159,208,0.3),rgba(106,159,208,0.12)_46%,transparent_74%)] blur-3xl" />
      </div>
      <div className="h-5 w-full bg-transparent min-[900px]:hidden" />
      <div className="hidden h-8 w-full bg-transparent min-[900px]:block" />
      <div
        className={`relative ${mobileMediaWrapperClass} w-full overflow-hidden bg-[#233E54] min-[900px]:hidden`}
        style={isBannerSlide ? bannerWrapperStyle : undefined}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`mobile-${current}`}
            className="absolute inset-0"
            custom={direction}
            variants={slideMotion}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {isVideoSlide(slide.image) ? (
              <>
                <video
                  key={`mobile-video-${current}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={slide.poster}
                  className={getMediaClass(slide.mobileMediaFit ?? slide.mediaFit, "z-[1]")}
                  style={{ objectPosition: slide.mobileMediaPosition ?? slide.mediaPosition ?? "center center" }}
                >
                  <source src={slide.image} type="video/mp4" />
                </video>
              </>
            ) : (
              <Image
                src={slide.image}
                alt="Sri Chaitanya School"
                fill
                priority={current === 0}
                sizes="100vw"
                quality={100}
                className={getMediaClass(slide.mobileMediaFit ?? slide.mediaFit)}
                style={{ objectPosition: slide.mobileMediaPosition ?? slide.mediaPosition ?? "center center" }}
              />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,14,28,0.1)_0%,rgba(6,14,28,0.03)_22%,rgba(6,14,28,0)_46%)]" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-y-0 left-3 z-20 flex items-center">
          <button
            onClick={prev}
            className={navButtonClass}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-3 z-20 flex items-center">
          <button
            onClick={next}
            className={navButtonClass}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className={`relative hidden w-full overflow-hidden bg-[#233E54] min-[900px]:block min-[1540px]:hidden ${tabletMediaWrapperClass}`}
        style={isBannerSlide ? bannerWrapperStyle : undefined}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`tablet-${current}`}
            className="absolute inset-0"
            custom={direction}
            variants={slideMotion}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {isVideoSlide(slide.image) ? (
              <>
                <video
                  key={`tablet-video-${current}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={slide.poster}
                  className={getMediaClass(slide.mediaFit, "z-[1]")}
                  style={{ objectPosition: slide.mediaPosition ?? "center center" }}
                >
                  <source src={slide.image} type="video/mp4" />
                </video>
              </>
            ) : (
              <Image
                src={slide.image}
                alt="Sri Chaitanya School"
                fill
                priority={current === 0}
                sizes="100vw"
                quality={100}
                className={getMediaClass(slide.mediaFit)}
                style={{ objectPosition: slide.mediaPosition ?? "center center" }}
              />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,14,28,0.08)_0%,rgba(6,14,28,0.02)_20%,rgba(6,14,28,0)_42%)]" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-y-0 left-4 z-20 flex items-center">
          <button
            onClick={prev}
            className={navButtonClass}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 z-20 flex items-center">
          <button
            onClick={next}
            className={navButtonClass}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className={desktopMediaWrapperClass} style={isBannerSlide ? bannerWrapperStyle : undefined}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0"
            custom={direction}
            variants={slideMotion}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {isVideoSlide(slide.image) ? (
              <>
                <video
                  key={`video-${current}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={slide.poster}
                  className={getMediaClass(slide.mediaFit, "z-[1]")}
                  style={{ objectPosition: slide.mediaPosition ?? "center center" }}
                >
                  <source src={slide.image} type="video/mp4" />
                </video>
              </>
            ) : (
              <motion.div
                key={`image-${current}`}
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0 }}
              >
                <Image
                  src={slide.image}
                  alt="Sri Chaitanya School"
                  fill
                  priority={current === 0}
                  sizes="100vw"
                  quality={100}
                  className={getMediaClass(slide.mediaFit, "brightness-105")}
                  style={{ objectPosition: slide.mediaPosition ?? "center center" }}
                />
              </motion.div>
            )}
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,14,28,0.14)_0%,rgba(6,14,28,0.07)_18%,rgba(6,14,28,0.03)_32%,rgba(6,14,28,0)_52%)] min-[1540px]:bg-[linear-gradient(0deg,rgba(6,14,28,0.08)_0%,rgba(6,14,28,0.04)_16%,rgba(6,14,28,0.02)_30%,rgba(6,14,28,0)_48%)]" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-y-0 left-6 z-20 flex items-center">
          <button
            onClick={prev}
            className={navButtonClass}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-6 z-20 flex items-center">
          <button
            onClick={next}
            className={navButtonClass}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className={`absolute inset-x-0 top-0 z-10 ${isBannerSlide ? "hidden" : "hidden min-[900px]:block min-[1540px]:hidden"}`}>
        <div className="px-4 pt-44 min-[1200px]:px-8 min-[1200px]:pt-48">
          <div className="mx-0 w-full max-w-3xl text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl pt-8 min-[1200px]:pt-10"
              >
                <div className="flex flex-wrap items-center justify-start gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/90">
                  <span className="h-px w-12 bg-[hsl(var(--accent))]" />
                  <span>Future-ready learning</span>
                </div>
                <h1 className="mt-4 text-[3rem] font-semibold leading-[0.96] text-white min-[1200px]:text-[3.6rem]">
                  <motion.span
                    className="block font-sans"
                    variants={textContainer}
                    initial="hidden"
                    animate="show"
                    aria-label={slide.title}
                  >
                    {slide.title.split("").map((char, index) => (
                      <motion.span
                        key={`title-${char}-${index}`}
                        variants={textItem}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                  <motion.span
                    className="block bg-[linear-gradient(90deg,#D9F3E7_0%,#8DD2C3_45%,#6A9FD0_100%)] bg-clip-text font-tomboy font-bold text-transparent drop-shadow-[0_6px_18px_rgba(0,0,0,0.28)]"
                    variants={textContainer}
                    initial="hidden"
                    animate="show"
                    aria-label={slide.highlight}
                  >
                    {slide.highlight.split("").map((char, index) => (
                      <motion.span
                        key={`highlight-${char}-${index}`}
                        variants={textItem}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                </h1>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className={`relative z-10 ${isBannerSlide ? "hidden" : "hidden min-[1540px]:flex min-[1540px]:min-h-[calc(100vh-12rem)] min-[1540px]:items-end min-[1540px]:pb-44 min-[1540px]:pt-32 min-[1540px]:lg:pt-36 min-[1540px]:xl:items-end min-[1540px]:xl:pb-48 min-[1540px]:xl:pt-36"}`}>
        <div className="grid items-end gap-8 px-0 min-[1540px]:container min-[1540px]:mx-auto min-[1540px]:px-6 min-[1540px]:lg:gap-10 min-[1540px]:xl:grid-cols-[1.08fr_0.92fr]">
          <div className="mx-auto hidden w-full max-w-[38rem] text-center min-[1540px]:mx-0 min-[1540px]:block min-[1540px]:pl-1 min-[1540px]:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.6 }}
                className="max-w-[34rem] pt-6 sm:pt-8 xl:pt-0"
              >
                <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/90 md:justify-start">
                  <span className="h-px w-12 bg-[hsl(var(--accent))]" />
                  <span>Future-ready learning</span>
                </div>
                <h1 className="mt-4 text-[2.2rem] font-semibold leading-tight text-white sm:text-[2.7rem] lg:text-[3.8rem] xl:text-6xl">
                  <motion.span
                    className="block font-sans"
                    variants={textContainer}
                    initial="hidden"
                    animate="show"
                    aria-label={slide.title}
                  >
                    {slide.title.split("").map((char, index) => (
                      <motion.span
                        key={`title-desktop-${char}-${index}`}
                        variants={textItem}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                  <motion.span
                    className="block bg-[linear-gradient(90deg,#D9F3E7_0%,#8DD2C3_45%,#6A9FD0_100%)] bg-clip-text font-tomboy font-bold text-transparent drop-shadow-[0_6px_18px_rgba(0,0,0,0.28)]"
                    variants={textContainer}
                    initial="hidden"
                    animate="show"
                    aria-label={slide.highlight}
                  >
                    {slide.highlight.split("").map((char, index) => (
                      <motion.span
                        key={`highlight-desktop-${char}-${index}`}
                        variants={textItem}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                </h1>

              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden min-[1540px]:xl:block" />
        </div>
      </div>

      <div className={locationSelectorWrapperClass}>
        <div className="px-3 min-[900px]:px-6 min-[1540px]:container min-[1540px]:mx-auto min-[1540px]:px-6">
          <div
            id="location-selector"
            className="rounded-[28px] border border-[#d5ece5] bg-[linear-gradient(135deg,rgba(248,255,252,0.96),rgba(230,245,239,0.92))] p-5 shadow-[0_18px_36px_rgba(18,45,76,0.12)] backdrop-blur-xl sm:p-6 min-[900px]:mx-auto min-[900px]:max-w-[1280px] min-[900px]:rounded-[28px] min-[900px]:border-[#D9F3E7] min-[900px]:shadow-[0_18px_40px_rgba(106,159,208,0.12)] min-[900px]:p-7 min-[1540px]:rounded-[32px] min-[1540px]:max-w-[1240px] min-[1540px]:shadow-[0_20px_46px_rgba(106,159,208,0.14)] min-[1540px]:p-6"
          >
            <div className="mb-4 flex flex-wrap items-center justify-center gap-3 min-[900px]:justify-between">
              <div className="hidden min-[900px]:block" />
              <div className="flex items-center gap-2 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--primary)/0.6)]">
                <MapPin className="h-4 w-4 text-[hsl(var(--ring))]" />
                Start with your city
              </div>
            </div>
            <div className="grid items-end gap-3 min-[900px]:grid-cols-2 min-[900px]:gap-4 min-[1540px]:xl:grid-cols-[1fr_1fr_1fr_1fr_auto]">

{/* Board */}
<label className="text-sm font-semibold text-[hsl(var(--primary))]">
Select Board
<select className="mt-2 h-12 w-full rounded-xl border border-[#cfd8e3] bg-white px-4 text-sm text-[hsl(var(--primary))] shadow-sm min-[900px]:rounded-lg min-[900px]:border-[hsl(var(--primary)/0.18)] min-[900px]:py-2.5">
<option>Select Board</option>
<option>CBSE</option>
<option>ICSE</option>
<option>State Board</option>
</select>
</label>

{/* State */}
<label className="text-sm font-semibold text-[hsl(var(--primary))]">
Select State
<select
value={selectedState}
onChange={(e)=>{
setSelectedState(e.target.value);
setSelectedCity("");
setSelectedBranch("");
}}
className="mt-2 h-12 w-full rounded-xl border border-[#cfd8e3] bg-white px-4 text-sm text-[hsl(var(--primary))] min-[900px]:rounded-lg min-[900px]:border-[hsl(var(--primary)/0.18)] min-[900px]:py-2.5"
>
<option value="">Select State</option>
<option>Telangana</option>
<option>Andhra Pradesh</option>
<option>Karnataka</option>
<option>Tamil Nadu</option>
</select>
</label>

{/* City */}
<label className="text-sm font-semibold text-[hsl(var(--primary))]">
Select City
<select
value={selectedCity}
onChange={(e)=>{
setSelectedCity(e.target.value);
setSelectedBranch("");
}}
className="mt-2 h-12 w-full rounded-xl border border-[#cfd8e3] bg-white px-4 text-sm text-[hsl(var(--primary))] min-[900px]:rounded-lg min-[900px]:border-[hsl(var(--primary)/0.18)] min-[900px]:py-2.5"
>
<option value="">Select City</option>

{selectedState &&
cities[selectedState]?.map((city)=>(
<option key={city} value={city}>{city}</option>
))}

</select>
</label>

{/* Branch */}
<label className="text-sm font-semibold text-[hsl(var(--primary))]">
Select Branch
<select
value={selectedBranch}
onChange={(e)=>setSelectedBranch(e.target.value)}
className="mt-2 h-12 w-full rounded-xl border border-[#cfd8e3] bg-white px-4 text-sm text-[hsl(var(--primary))] min-[900px]:rounded-lg min-[900px]:border-[hsl(var(--primary)/0.18)] min-[900px]:py-2.5"
>
<option value="">Select Branch</option>

{selectedCity &&
branches[selectedCity]?.map((branch)=>(
<option key={branch} value={branch}>{branch}</option>
))}

</select>
</label>

{/* Button */}
<div className="flex items-end pt-1 min-[900px]:col-span-2 min-[900px]:justify-start min-[1540px]:xl:col-span-1">
<button
onClick={()=>{
if(selectedBranch){
localStorage.setItem("scs-location", selectedBranch);
window.dispatchEvent(new Event("locationChange"));
}
}}
className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#ef4b78_0%,#e63946_100%)] px-6 font-semibold uppercase tracking-[0.08em] text-white shadow-[0_16px_35px_rgba(230,57,70,0.24)] transition hover:-translate-y-0.5 hover:brightness-105 min-[900px]:w-auto min-[900px]:min-w-[160px] min-[900px]:rounded-lg min-[900px]:bg-[hsl(var(--primary))] min-[900px]:py-3 min-[900px]:normal-case min-[900px]:tracking-normal min-[900px]:shadow-[0_16px_35px_rgba(43,74,100,0.25)] min-[900px]:hover:bg-[#6A9FD0]"
>
<Search className="h-4 w-4"/>
Find School
</button>
</div>

</div>

            {/* Popular Locations */}
            <div className="mt-3 hidden flex-wrap items-center gap-3 text-sm min-[900px]:flex">
              <span className="text-[hsl(var(--primary))] font-semibold">
                Popular Locations:
              </span>

              {["Hyderabad", "Bengaluru", "Chennai", "Mumbai", "Delhi"].map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--primary)/0.14)] bg-[hsl(var(--primary)/0.05)] px-3 py-1.5 text-[hsl(var(--primary))]"
                >
                  <MapPin className="h-4 w-4 text-[hsl(var(--accent))]" />
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[120px] min-[900px]:hidden min-[1540px]:hidden"
        style={{
          background:
            "radial-gradient(720px 220px at 50% 0%, rgba(141,210,195,0.18), transparent 68%), linear-gradient(180deg, rgba(106,159,208,0.22) 0%, rgba(64,104,134,0.5) 55%, rgba(43,74,100,0.88) 100%)",
        }}
      />
    </section>
  );
};

export default HeroSection;
