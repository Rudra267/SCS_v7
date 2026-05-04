"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowDownToLine, ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const AdmissionCTA = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloading(true);
    window.setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);
      window.setTimeout(() => setIsDownloaded(false), 1200);
    }, 1200);
  };

  return (
    <section className="admission-cta relative overflow-hidden bg-[#10202E] py-24">
      <div className="absolute inset-0 overflow-hidden aurora-sky">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,11,0.98)_0%,rgba(8,10,16,0.96)_52%,rgba(3,4,7,1)_100%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(255,255,255,0.08)_0.8px,transparent_0.8px)] [background-size:18px_18px]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,transparent_32%,rgba(255,255,255,0.02)_52%,transparent_70%,rgba(255,255,255,0.03)_100%)] mix-blend-screen" />
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        <div className="aurora-stars" />
        <div className="meteor-shower">
          <span />
          <span />
          <span />
        </div>
        <div className="aurora-band aurora-band-one" />
        <div className="aurora-band aurora-band-two" />
        <div className="aurora-horizon" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
            <span className="sr-only">Admissions Open 2026-2027</span>
            <motion.span
              aria-hidden="true"
              className="inline-flex flex-wrap justify-center"
              variants={headingContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              {renderHeadingChars("Admissions Open")}
            </motion.span>
            <br />
            <motion.span
              aria-hidden="true"
              className="inline-flex flex-wrap justify-center bg-[linear-gradient(90deg,#D9F3E7_0%,#8DD2C3_34%,#6A9FD0_68%,#FCFFFE_100%)] bg-clip-text text-transparent"
              variants={headingContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              {renderHeadingChars("2026-2027")}
            </motion.span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            Join thousands of successful students who have transformed their dreams into reality with Sri Chaitanya's
            proven educational approach
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="group relative w-full max-w-[17.5rem] cursor-pointer justify-center overflow-hidden rounded-full bg-[linear-gradient(290deg,#2B4A64_0%,#4F7BA2_55%,#8DD2C3_100%)] px-8 py-6 text-base font-semibold text-white shadow-[0_14px_34px_rgba(43,74,100,0.3)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_20px_42px_rgba(106,159,208,0.34)] sm:w-auto sm:max-w-none sm:px-10"
            >
              <Link href="/admissions">
                <span className="relative z-10 inline-flex items-center">
                  Apply Admission <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group cursor-pointer border border-white/45 bg-transparent px-10 py-6 text-base font-semibold text-white shadow-[0_0_0_rgba(255,255,255,0)] transition-all duration-300 hover:border-[#8DD2C3]/65 hover:bg-transparent hover:text-white hover:shadow-[0_14px_30px_rgba(43,74,100,0.3),0_0_32px_rgba(106,159,208,0.26),0_0_56px_rgba(141,210,195,0.2)]"
              onClick={handleDownloadClick}
            >
              <span className="inline-flex items-center gap-2">
                Download Brochure
                <span className="relative inline-flex h-5 w-5 items-center justify-center">
                  {isDownloading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : isDownloaded ? (
                    <Check className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <ArrowDownToLine className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  )}
                </span>
              </span>
            </Button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionCTA;
