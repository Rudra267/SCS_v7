"use client";

import { motion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
    scale: 0.98,
    filter: "blur(3px)",
  },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Reveal = ({
  as = "div",
  children,
  className,
  delay = 0,
  amount = 0.25,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) => {
  const MotionTag = motion.create(as);

  return (
    <MotionTag
      className={className}
      variants={revealVariants}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
