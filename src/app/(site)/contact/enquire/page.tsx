"use client";

import { useRef, useState, type FormEvent } from "react";
import RecaptchaField from "@/components/forms/RecaptchaField";

const FORM_OPTIONS = {
  boards: ["CBSE", "ICSE", "State Board", "IGCSE"],
  states: ["Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu", "Maharashtra"],
  cities: ["Hyderabad", "Vijayawada", "Bengaluru", "Chennai", "Mumbai"],
  schools: ["Sri Chaitanya Techno", "Sri Chaitanya IIT", "Sri Chaitanya Junior"],
  grades: ["Pre-Primary", "Primary", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"],
};

export default function EnquirePage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      setSubmitMessage("");
      return;
    }

    setSubmitMessage("Thanks! We’ll contact you soon.");
  };

  return (
    <section className="relative bg-[radial-gradient(circle_at_top,#f7f8ff_0%,#ffffff_45%,#f4f6fb_100%)] pt-40 pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.14),transparent_70%)] blur-[90px]" />
        <div className="absolute top-40 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.12),transparent_70%)] blur-[110px]" />
      </div>

      <div className="relative w-full">
        <div
          className="relative overflow-hidden bg-cover bg-center pb-28 pt-16 text-white"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(11,29,53,0.66), rgba(22,58,102,0.58) 55%, rgba(43,84,138,0.46)), url('/assets/hero-slider/2.jpeg')",
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
                Admission Enquiry
              </p>
              <h1
                className="page-enter-text text-4xl font-semibold md:text-6xl"
                style={{ animationDelay: "120ms" }}
              >
                Admission Enquiry Form
              </h1>
              <p
                className="page-enter-text max-w-2xl text-sm text-white/75"
                style={{ animationDelay: "240ms" }}
              >
                Please fill in all the required fields marked with *. Our admissions
                team will reach out shortly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div
          className="page-enter-card mt-6 flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-xs text-slate-600 shadow-[0_16px_30px_rgba(15,23,42,0.08)]"
          style={{ animationDelay: "360ms" }}
        >
          <span>Need help? Call our admission desk at</span>
          <span className="font-semibold text-slate-900">1800-123-4567</span>
        </div>

        <div className="mt-12">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="page-enter-card rounded-3xl border border-border/70 bg-white p-8 shadow-[0_28px_70px_rgba(15,23,42,0.1)]"
            style={{ animationDelay: "500ms" }}
          >
            <div
              className="page-enter-card rounded-2xl border border-border/60 bg-slate-50/70 p-6 shadow-sm"
              style={{ animationDelay: "620ms" }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground/70">
                  Enquiry Details
                </h2>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[hsl(var(--accent))]">
                  Step 1
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Student preferences, parent contact information, and enquiry details.
              </p>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground" htmlFor="academicYear">
                  Academic Year*
                </label>
                <input
                  id="academicYear"
                  name="academicYear"
                  defaultValue="2026-2027"
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground" htmlFor="board">
                  Please Select Board*
                </label>
                <select
                  id="board"
                  name="board"
                  required
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Please Select Board
                  </option>
                  {FORM_OPTIONS.boards.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground" htmlFor="state">
                  Select State*
                </label>
                <select
                  id="state"
                  name="state"
                  required
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select State
                  </option>
                  {FORM_OPTIONS.states.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground" htmlFor="city">
                  Select City*
                </label>
                <select
                  id="city"
                  name="city"
                  required
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select City
                  </option>
                  {FORM_OPTIONS.cities.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground" htmlFor="school">
                  Select School*
                </label>
                <select
                  id="school"
                  name="school"
                  required
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select School
                  </option>
                  {FORM_OPTIONS.schools.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground" htmlFor="grade">
                  Select Grade*
                </label>
                <select
                  id="grade"
                  name="grade"
                  required
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Grade
                  </option>
                  {FORM_OPTIONS.grades.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground" htmlFor="childName">
                  Name of Child*
                </label>
                <input
                  id="childName"
                  name="childName"
                  required
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  placeholder="Name of Child"
                />
              </div>

              <fieldset className="space-y-2">
                <legend className="text-sm font-semibold text-foreground">Gender*</legend>
                <div className="flex h-11 items-center gap-6 rounded-lg border border-input bg-background px-3 text-sm">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="gender" value="female" required className="h-4 w-4" />
                    Female
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="gender" value="male" required className="h-4 w-4" />
                    Male
                  </label>
                </div>
              </fieldset>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground" htmlFor="parentName">
                  Parent Name*
                </label>
                <input
                  id="parentName"
                  name="parentName"
                  required
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  placeholder="Parent Name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground" htmlFor="mobile">
                  Mobile No.*
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  inputMode="numeric"
                  required
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  placeholder="Mobile No."
                />
              </div>

              <div className="space-y-2 md:col-span-2 md:px-12">
                <label className="text-sm font-semibold text-foreground" htmlFor="email">
                  Email ID*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  placeholder="Email ID"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-foreground" htmlFor="query">
                  Post your Query
                </label>
                <textarea
                  id="query"
                  name="query"
                  rows={3}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Post your Query"
                />
              </div>

              </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4">
              <RecaptchaField />
              <button
                type="submit"
                className="rounded-none border-2 border-black bg-white px-9 py-2 text-[12px] font-semibold uppercase tracking-[0.28em] text-black shadow-[4px_4px_0_#000] transition hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                Submit
              </button>
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              By submitting, you agree to our recruitment terms and privacy policy.
            </p>
            {submitMessage ? (
              <p className="mt-4 text-center text-xs font-medium text-emerald-600">
                {submitMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

