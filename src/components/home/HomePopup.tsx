"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const popupImage = "/assets/pop-up/popup-image-1.jpg";

export default function HomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openTimer = window.setTimeout(() => setIsOpen(true), 350);
    return () => window.clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const closeTimer = window.setTimeout(() => setIsOpen(false), 3000);
    return () => window.clearTimeout(closeTimer);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden bg-[#020b18]/72 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Admission popup banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.span
            className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.24),transparent_68%)] blur-2xl"
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />
          <motion.div
            className="relative w-full max-w-5xl"
            initial={{ opacity: 0, y: 34, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 22, scale: 0.96 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <motion.button
              type="button"
              aria-label="Close popup"
              onClick={() => setIsOpen(false)}
              className="absolute -right-3 -top-3 z-20 flex h-11 w-11 items-center justify-center rounded-lg border border-white/25 bg-white text-[hsl(var(--primary))] shadow-[0_18px_40px_rgba(2,12,28,0.35)] transition hover:bg-[hsl(var(--accent))] hover:text-white sm:-right-5 sm:-top-5"
              whileHover={{ rotate: 90, scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
            >
              <X className="h-5 w-5" />
            </motion.button>

            <div className="relative overflow-hidden rounded-lg border border-white/25 bg-white p-2 shadow-[0_34px_90px_rgba(2,12,28,0.5)]">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-lg ring-1 ring-inset ring-white/45" />
              <div className="relative overflow-hidden rounded-md bg-[#071a31]">
                <motion.img
                  src={popupImage}
                  alt="Sri Chaitanya admission program banner"
                  className="block h-auto max-h-[78vh] w-full object-contain"
                  initial={{ scale: 1.04 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
