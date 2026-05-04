"use client";

import RecaptchaField from "@/components/forms/RecaptchaField";

const FORM_OPTIONS = {
  boards: ["CBSE", "ICSE", "State Board", "IGCSE"],
  states: ["Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu", "Maharashtra"],
  cities: ["Hyderabad", "Vijayawada", "Bengaluru", "Chennai", "Mumbai"],
  schools: ["Sri Chaitanya Techno", "Sri Chaitanya IIT", "Sri Chaitanya Junior"],
  classes: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
  orientations: ["Academics", "Sports", "Arts", "STEM Focus"],
  sections: ["A", "B", "C", "D"],
  studentTypes: ["New Admission", "Transfer", "Scholarship"],
  quotas: ["General", "Management", "Sports", "EWS"],
  admissionTypes: ["Day Scholar", "Hostel", "Integrated"],
  occupations: ["Private Employee", "Government", "Business", "Self Employed", "Other"],
};

export default function AdmissionPage() {
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
                Online Admission Form
              </p>
              <h1
                className="page-enter-text text-4xl font-semibold md:text-6xl"
                style={{ animationDelay: "120ms" }}
              >
                Admission Application
              </h1>
              <p
                className="page-enter-text max-w-2xl text-sm text-white/75"
                style={{ animationDelay: "240ms" }}
              >
                Please fill in all required fields marked with *. Our team reviews
                applications within 24 hours.
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
            className="page-enter-card rounded-3xl border border-border/70 bg-white p-8 shadow-[0_28px_70px_rgba(15,23,42,0.1)]"
            style={{ animationDelay: "500ms" }}
          >
            <div
              className="page-enter-card rounded-2xl border border-border/60 bg-slate-50/70 p-6 shadow-sm"
              style={{ animationDelay: "620ms" }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground/70">
                  Student Details
                </h2>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[hsl(var(--accent))]">
                  Step 1
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Academic year, program, and student profile information.
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
                    Select Board*
                  </label>
                  <select
                    id="board"
                    name="board"
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
                  <label className="text-sm font-semibold text-foreground" htmlFor="className">
                    Select Class*
                  </label>
                  <select
                    id="className"
                    name="className"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Class
                    </option>
                    {FORM_OPTIONS.classes.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="orientation">
                    Select Orientation*
                  </label>
                  <select
                    id="orientation"
                    name="orientation"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Orientation
                    </option>
                    {FORM_OPTIONS.orientations.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="section">
                    Select Section*
                  </label>
                  <select
                    id="section"
                    name="section"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Section
                    </option>
                    {FORM_OPTIONS.sections.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="studentType">
                    Select Student Type*
                  </label>
                  <select
                    id="studentType"
                    name="studentType"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Student Type
                    </option>
                    {FORM_OPTIONS.studentTypes.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="firstName">
                    First Name*
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="dob">
                    Date Of Birth*
                  </label>
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-sm font-semibold text-foreground">Gender*</span>
                  <div className="flex items-center gap-6 rounded-lg border border-input bg-background px-3 py-3 text-sm">
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="gender" value="female" className="h-4 w-4" />
                      Female
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="gender" value="male" className="h-4 w-4" />
                      Male
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="page-enter-card mt-8 rounded-2xl border border-border/60 bg-slate-50/70 p-6 shadow-sm"
              style={{ animationDelay: "760ms" }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground/70">
                  Fee Details
                </h2>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[hsl(var(--accent))]">
                  Step 2
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Application and confirmation fee details.
              </p>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="applicationAmount">
                    Application Amount*
                  </label>
                  <input
                    id="applicationAmount"
                    name="applicationAmount"
                    placeholder="Application Amount"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="confirmationAmount">
                    Admission Confirmation Amount*
                  </label>
                  <input
                    id="confirmationAmount"
                    name="confirmationAmount"
                    placeholder="Admission Confirmation Amount"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  />
                </div>
              </div>
            </div>

            <div
              className="page-enter-card mt-8 rounded-2xl border border-border/60 bg-slate-50/70 p-6 shadow-sm"
              style={{ animationDelay: "900ms" }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground/70">
                  Personal Details
                </h2>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[hsl(var(--accent))]">
                  Step 3
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Parent or guardian contact and address details.
              </p>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="fatherName">
                    Father Name*
                  </label>
                  <input
                    id="fatherName"
                    name="fatherName"
                    placeholder="Father Name"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="motherName">
                    Mother Name*
                  </label>
                  <input
                    id="motherName"
                    name="motherName"
                    placeholder="Mother Name"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="parentMobile">
                    Parent Mobile No.*
                  </label>
                  <input
                    id="parentMobile"
                    name="parentMobile"
                    placeholder="Parent Mobile Number"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="parentEmail">
                    Parent Email*
                  </label>
                  <input
                    id="parentEmail"
                    name="parentEmail"
                    type="email"
                    placeholder="Parent Email"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="aadhaar">
                    Aadhaar No.*
                  </label>
                  <input
                    id="aadhaar"
                    name="aadhaar"
                    placeholder="Aadhaar Number"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="address">
                    Address*
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    placeholder="Address"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="quota">
                    Select Quota*
                  </label>
                  <select
                    id="quota"
                    name="quota"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Quota
                    </option>
                    {FORM_OPTIONS.quotas.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="admissionType">
                    Select Admission Type*
                  </label>
                  <select
                    id="admissionType"
                    name="admissionType"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Admission Type
                    </option>
                    {FORM_OPTIONS.admissionTypes.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="occupation">
                    Select Father/Guardian Occupation*
                  </label>
                  <select
                    id="occupation"
                    name="occupation"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Occupation
                    </option>
                    {FORM_OPTIONS.occupations.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-3">
              <RecaptchaField />
              <button
                type="submit"
                className="rounded-none border-2 border-black bg-white px-9 py-2 text-[12px] font-semibold uppercase tracking-[0.28em] text-black shadow-[4px_4px_0_#000] transition hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                Submit & Pay
              </button>
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to our admission terms and privacy policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
