"use client";

import galleryBanner from "@/assets/gallary-banner.jpg";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const telanganaImages = [
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1725872168.jpg",
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1718879523.jpg",
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1718708710.jpg",
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1718708692.jpg",
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1718708665.jpg",
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1718708647.jpg",
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1718708625.jpg",
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1718708604.jpg",
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1718708556.jpg",
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1718708539.jpg",
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1718708907.jpg",
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1718708884.jpg",
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1718708867.jpg",
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1718708851.jpg",
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1718708833.jpg",
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1718708819.jpg",
];

const schoolImages = [
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1615006588-21041.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558672053-13377.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671948-13374.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671948-13375.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671948-13376.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671947-13373.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671708-13371.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671708-13372.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671707-13370.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671450-13369.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671449-13367.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671449-13368.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558432255-13366.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1510897384-71.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1510897347-68.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1510897333-67.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1510897320-66.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1510897267-62.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1510897249-61.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1510897141-56.png",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1510834437-50.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1510834400-49.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1510834341-45.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1510834325-44.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-all-1494496106-17.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-all-1494496106-16.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-all-1494496102-13.jpg",
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-all-1494496082-9.jpg",
];

const galleryItems = [
  ...telanganaImages.map((image, index) => ({
    image,
    title: `Telangana Gallery ${index + 1}`,
    source: "Sri Chaitanya Telangana",
  })),
  ...schoolImages.map((image, index) => ({
    image,
    title: `Inter School Gallery ${index + 1}`,
    source: "Sri Chaitanya Schools",
  })),
];

const featuredGalleryImage =
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/gallery/Corporate/images/bannerImage_0_1725872168.jpg";

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

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[number] | null>(null);

  return (
    <main>
      <section className="relative bg-[radial-gradient(circle_at_top,#f7f8ff_0%,#ffffff_45%,#f4f6fb_100%)] pt-40 pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.14),transparent_70%)] blur-[90px]" />
          <div className="absolute top-40 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.12),transparent_70%)] blur-[110px]" />
        </div>

        <div className="relative w-full">
          <div
            className="relative overflow-hidden bg-cover bg-center pb-28 pt-16 text-white"
            style={{
              backgroundImage: `linear-gradient(120deg, rgba(11,29,53,0.62), rgba(22,58,102,0.56) 55%, rgba(43,84,138,0.48)), url(${galleryBanner.src})`,
            }}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)] blur-[80px]" />
              <div className="absolute right-16 top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.35),transparent_70%)] blur-[90px]" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(11,29,53,0),rgba(11,29,53,0.45))]" />
            </div>
            <div className="container mx-auto px-6">
              <div className="max-w-3xl space-y-5">
                <p className="page-enter-text text-[11px] uppercase tracking-[0.6em] text-white/70">
                  Student Life
                </p>
                <h1
                  className="page-enter-text text-4xl font-semibold md:text-6xl"
                  style={{ animationDelay: "120ms" }}
                >
                  Gallery
                </h1>
                <p
                  className="page-enter-text max-w-2xl text-sm text-white/75"
                  style={{ animationDelay: "240ms" }}
                >
                  Moments from school events, celebrations, and everyday learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div
          className="page-enter-text mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          style={{ animationDelay: "360ms" }}
        >
          <div>
            <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-accent">
              School Moments
            </span>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[hsl(var(--primary)/0.65)]">
              A collection of gallery moments from Sri Chaitanya Telangana and Sri Chaitanya Schools.
            </p>
          </div>
          <div className="rounded-2xl border border-[hsl(var(--primary)/0.12)] bg-white px-5 py-4 text-sm text-[hsl(var(--primary)/0.68)] shadow-[0_16px_34px_rgba(9,35,66,0.08)]">
            <span className="text-2xl font-semibold text-[hsl(var(--primary))]">
              {galleryItems.length}
            </span>{" "}
            photos
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.image}
              type="button"
              onClick={() => setSelectedImage(item)}
              className={`group overflow-hidden rounded-3xl border border-[hsl(var(--primary)/0.1)] bg-white shadow-[0_18px_45px_rgba(9,35,66,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(9,35,66,0.16)] ${
                item.image === featuredGalleryImage ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
              custom={item.image === featuredGalleryImage ? 0 : Math.max(index - 1, 0)}
              variants={scrollCardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              aria-label={`Open ${item.title}`}
            >
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes={item.image === featuredGalleryImage ? "(min-width: 1024px) 100vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#081a2e]/0 opacity-0 transition duration-300 group-hover:bg-[#081a2e]/35 group-hover:opacity-100">
                  <span className="rounded-full border border-white/40 bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur">
                    View Image
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl leading-none text-white transition hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            x
          </button>
          <div
            className="relative h-[82vh] w-[min(94vw,1200px)] overflow-hidden rounded-3xl bg-black shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              fill
              sizes="94vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}
