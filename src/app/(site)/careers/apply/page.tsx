import RecaptchaField from "@/components/forms/RecaptchaField";

const FORM_OPTIONS = {
  boards: ["CBSE", "ICSE", "State Board", "IGCSE"],
  states: ["Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu", "Maharashtra"],
  locations: ["Hyderabad", "Vijayawada", "Bengaluru", "Chennai", "Mumbai"],
  branches: ["Madhapur", "Hitech City", "Jubilee Hills", "Banjara Hills"],
  postTypes: ["Teaching", "Non-Teaching", "Administration", "Support Staff"],
  subjects: [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "Social Studies",
    "Computer Science",
  ],
  experiences: ["Fresher", "1-3 Years", "3-5 Years", "5-8 Years", "8+ Years"],
};

export default function ApplyJobPage() {
  return (
    <section className="relative bg-[radial-gradient(circle_at_top,#f7f8ff_0%,#ffffff_45%,#f4f6fb_100%)] pt-40 pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 right-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.12),transparent_70%)] blur-[90px]" />
        <div className="absolute top-40 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.12),transparent_70%)] blur-[110px]" />
      </div>

      <div className="relative w-full">
        <div
          className="relative overflow-hidden bg-cover bg-center pb-28 pt-16 text-white"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(11,29,53,0.66), rgba(22,58,102,0.58) 55%, rgba(43,84,138,0.46)), url('/assets/hero-school.jpg')",
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
                Careers Application
              </p>
              <h1
                className="page-enter-text text-4xl font-semibold md:text-6xl"
                style={{ animationDelay: "120ms" }}
              >
                Job Apply Form
              </h1>
              <p
                className="page-enter-text max-w-2xl text-sm text-white/75"
                style={{ animationDelay: "240ms" }}
              >
                Please fill in all the required fields marked with *. Our HR team
                will contact shortlisted candidates.
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
          <span>Need help? Reach our HR desk at</span>
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
                  Applicant Details
                </h2>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[hsl(var(--accent))]">
                  Step 1
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Share your preferred location, subject expertise, and contact
                details.
              </p>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
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
                  <label className="text-sm font-semibold text-foreground" htmlFor="preferredLocation">
                    Select Preferred Location*
                  </label>
                  <select
                    id="preferredLocation"
                    name="preferredLocation"
                    required
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Preferred Location
                    </option>
                    {FORM_OPTIONS.locations.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="branch">
                    Select Branch*
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    required
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Branch
                    </option>
                    {FORM_OPTIONS.branches.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="name">
                    Name*
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    placeholder="Name"
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
                  <label className="text-sm font-semibold text-foreground" htmlFor="postType">
                    Select Post Type*
                  </label>
                  <select
                    id="postType"
                    name="postType"
                    required
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Post Type
                    </option>
                    {FORM_OPTIONS.postTypes.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="subject">
                    Select Subject*
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Subject
                    </option>
                    {FORM_OPTIONS.subjects.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="dob">
                    Date of Birth*
                  </label>
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    required
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="qualification">
                    Qualification*
                  </label>
                  <input
                    id="qualification"
                    name="qualification"
                    required
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    placeholder="Qualification"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="experience">
                    Select Work Experience*
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Work Experience
                    </option>
                    {FORM_OPTIONS.experiences.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="mobile">
                    Mobile*
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    inputMode="numeric"
                    required
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    placeholder="Mobile"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="email">
                    Email*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    placeholder="Email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="address">
                    Full Address*
                  </label>
                  <input
                    id="address"
                    name="address"
                    required
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
                    placeholder="Full Address"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="aboutSelf">
                    About Self*
                  </label>
                  <textarea
                    id="aboutSelf"
                    name="aboutSelf"
                    required
                    rows={3}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Tell us about yourself"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="resume">
                    Resume*
                  </label>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-[hsl(var(--primary))] file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-[0.2em] file:text-white"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-3">
              <RecaptchaField />
              <button
                type="submit"
                className="rounded-none border-2 border-black bg-white px-9 py-2 text-[12px] font-semibold uppercase tracking-[0.28em] text-black shadow-[4px_4px_0_#000] transition hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0_#000]"
              >
                Submit
              </button>
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to our recruitment terms and privacy policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
