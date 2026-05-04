"use client";

import { useEffect, useMemo, useState } from "react";
import facilitiesBanner from "@/assets/facilites-banner.jpg";
import facilityTransportation from "@/assets/facility-transportation.jpg";
import facilityLibrary from "@/assets/facility-library.jpg";
import facilitySports from "@/assets/facility-sports.jpg";
import facilityLabs from "@/assets/facility-labs.jpg";
import facilityHostel from "@/assets/facility-hostel.jpg";
import facilityDigitalLabs from "@/assets/facility-digital-labs.jpg";
import facilityFunClub from "@/assets/facility-fun-club-1.jpg";
export default function FacilitiesPage() {
  const facilities = useMemo(
    () => [
      {
        id: "transportation",
        label: "Transportation",
        summary:
          "We pay close attention to the travel safety of our students. With a fleet of buses with 40 seats each, we ensure every student gets comfortable seating during their journey. Our buses meet all the required government regulation standards and have well-trained drivers who take care of pick-ups and drops on the assigned routes. We also have bus attendants who look after the students and take care of seating arrangements.",
        image: facilityTransportation.src,
      },
      {
        id: "library",
        label: "Library",
        summary:
          "A calm, well-stocked library encourages reading, research, and independent learning. Age-appropriate collections, reference materials, and reading corners help students build strong comprehension skills.",
        image: facilityLibrary.src,
      },
      {
        id: "sports",
        label: "Sports",
        summary:
          "Outdoor grounds and indoor play zones support physical fitness, teamwork, and discipline. Structured coaching and regular activities help students discover their strengths across multiple sports.",
        image: facilitySports.src,
      },
      {
        id: "labs",
        label: "Labs",
        summary:
          "Dedicated science labs provide safe, hands-on experiments in Physics, Chemistry, and Biology. Practical learning reinforces classroom concepts and builds scientific thinking.",
        image: facilityLabs.src,
      },
      {
        id: "hostel",
        label: "Hostel",
        summary:
          "Safe, supervised, and comfortable boarding facilities create a home-like environment. Nutritious meals, study support, and caring wardens ensure student well-being.",
        image: facilityHostel.src,
      },
      {
        id: "digital-labs",
        label: "Digital Labs",
        summary:
          "Technology-enabled labs empower students with digital literacy, coding basics, and interactive learning tools. This builds confidence with modern tools and systems.",
        image: facilityDigitalLabs.src,
      },
      {
        id: "fun-club",
        label: "Fun Club",
        summary:
          "Clubs for arts, music, drama, and creativity help students explore interests beyond academics. These activities nurture confidence, expression, and collaboration.",
        image: facilityFunClub.src,
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState(facilities[0]?.id ?? "");
  const activeFacility = facilities.find((item) => item.id === activeId);
  const activeIndex = facilities.findIndex((item) => item.id === activeId);

  useEffect(() => {
    if (!facilities.length) return;
    const interval = setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = facilities.findIndex(
          (item) => item.id === currentId
        );
        const nextIndex =
          currentIndex === -1
            ? 0
            : (currentIndex + 1) % facilities.length;
        return facilities[nextIndex].id;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [facilities]);

  const handleStep = (direction: "prev" | "next") => {
    const total = facilities.length;
    if (!total) return;
    const nextIndex =
      direction === "prev"
        ? (activeIndex - 1 + total) % total
        : (activeIndex + 1) % total;
    setActiveId(facilities[nextIndex].id);
  };

  return (
    <main>
      <section className="relative bg-[radial-gradient(circle_at_top,#f7f8ff_0%,#ffffff_45%,#f4f6fb_100%)] pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.14),transparent_70%)] blur-[90px]" />
          <div className="absolute top-40 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.12),transparent_70%)] blur-[110px]" />
        </div>

        <div className="relative w-full">
          <div
            className="relative overflow-hidden bg-cover bg-center pb-28 pt-16 text-white"
            style={{
              backgroundImage: `linear-gradient(120deg, rgba(11,29,53,0.62), rgba(22,58,102,0.56) 55%, rgba(43,84,138,0.48)), url(${facilitiesBanner.src})`,
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
                  Facilities
                </h1>
                <p
                  className="page-enter-text max-w-2xl text-sm text-white/75"
                  style={{ animationDelay: "240ms" }}
                >
              We continually strive to provide the best facilities to our
              students. With our robust offerings, we cover all aspects that can
              help make student&apos;s life comfortable and productive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pt-10 pb-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Smart classrooms & digital labs",
            "Library & research corners",
            "Sports grounds & activity zones",
          ].map((item, index) => (
            <div
              key={item}
              className="page-enter-card rounded-2xl border border-[hsl(var(--primary)/0.12)] bg-white p-6 text-sm text-[hsl(var(--primary)/0.75)] shadow-[0_18px_40px_rgba(9,35,66,0.1)]"
              style={{ animationDelay: `${360 + index * 110}ms` }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_55%,#f3f7ff_100%)] pt-8 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.08),transparent_70%)] blur-[100px]" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.12),transparent_70%)] blur-[120px]" />
        </div>
        <div className="container mx-auto px-6">

          <div
            className="page-enter-card mt-10 flex items-center gap-3"
            style={{ animationDelay: "620ms" }}
          >
            <button
              type="button"
              onClick={() => handleStep("prev")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--primary)/0.15)] bg-white text-[hsl(var(--primary))] shadow-[0_10px_25px_rgba(9,35,66,0.08)] transition hover:-translate-y-0.5 hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]"
              aria-label="Previous facility"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="flex-1 overflow-x-auto">
              <div className="mx-auto flex w-max items-center gap-2 border-b border-[hsl(var(--primary)/0.12)] pb-2">
                {facilities.map((item) => {
                  const isActive = item.id === activeId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      className={`rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                        isActive
                          ? "bg-[hsl(var(--primary))] text-white shadow-[0_12px_30px_rgba(9,35,66,0.18)]"
                          : "text-[hsl(var(--primary)/0.7)] hover:text-[hsl(var(--accent))]"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleStep("next")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--primary)/0.15)] bg-white text-[hsl(var(--primary))] shadow-[0_10px_25px_rgba(9,35,66,0.08)] transition hover:-translate-y-0.5 hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]"
              aria-label="Next facility"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          {activeFacility ? (
            <div
              key={activeFacility.id}
              className="page-enter-card mt-10 rounded-3xl border border-[hsl(var(--primary)/0.12)] bg-white/85 p-6 shadow-[0_24px_50px_rgba(9,35,66,0.1)] backdrop-blur sm:p-8"
              style={{ animationDelay: "720ms" }}
            >
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[hsl(var(--accent))]">
                    {activeFacility.label}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {activeFacility.summary}
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-3xl border border-[hsl(var(--primary)/0.12)] bg-[linear-gradient(135deg,rgba(13,59,102,0.12),rgba(226,61,104,0.12))] shadow-[0_18px_40px_rgba(9,35,66,0.12)]">
                  {activeFacility.image ? (
                    <img
                      src={activeFacility.image}
                      alt={activeFacility.label}
                      className="h-64 w-full object-cover sm:h-72 lg:h-80"
                    />
                  ) : (
                    <div className="flex h-64 items-center justify-center text-sm font-semibold uppercase tracking-[0.3em] text-[hsl(var(--primary)/0.6)] sm:h-72 lg:h-80">
                      {activeFacility.label}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
