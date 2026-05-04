import prePrimaryBanner from "@/assets/pre-primary-banner.jpg";
export default function PrePrimaryPage() {
  const focusAreas = [
    {
      title: "Philosophy",
      color: "bg-sky-500",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0-3 11.2V17h6v-2.8A6 6 0 0 0 12 3Z" />
          <path d="M9 18h6" />
          <path d="M10 21h4" />
        </svg>
      ),
      content:
        "Every child is a gift of God. As such, it's the responsibility of everyone to treat them with love and care. Sri Chaitanya believes in the same and follows the Star Kids ideology for its pre-primary wing.",
    },
    {
      title: "The Right Outlook",
      color: "bg-amber-500",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      content:
        "Studies have shown that maximum brain development of a child happens in its formative years. The Star Kids approach ensures all aspects of your child's growth is taken care of with warmth and affection. In an increasingly competitive world, it pays to have even a slight advantage. To cater to this need, we've adopted an approach that stimulates the power of thinking and assimilation. The students in response feel enthusiastic about learning and as a consequence move ahead towards success.",
    },
    {
      title: "Curriculum",
      color: "bg-emerald-500",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h7a3 3 0 0 1 3 3v9a3 3 0 0 0-3-3H4Z" />
          <path d="M20 6h-7a3 3 0 0 0-3 3v9a3 3 0 0 1 3-3h7Z" />
        </svg>
      ),
      content:
        "Our curriculum is designed to focus on language development, math skills, knowledge and humanities, general awareness, creative arts and crafts, and music helping each child develop a polished personality at a tender age.",
    },
    {
      title: "Objectives",
      color: "bg-fuchsia-500",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 5v2M12 17v2M5 12h2M17 12h2" />
        </svg>
      ),
      content: "",
      bullets: [
        "Providing the right start for emotional and educational growth",
        "Developing interpersonal skills",
        "Generating and keeping alive curiosity, an essential ingredient for learning",
        "Developing a healthy attitude, social awareness, and etiquette",
        "Initiation of globally accepted learning methodologies",
      ],
    },
  ];

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
              backgroundImage: `linear-gradient(120deg, rgba(11,29,53,0.62), rgba(22,58,102,0.56) 55%, rgba(43,84,138,0.48)), url(${prePrimaryBanner.src})`,
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
                  Academics
                </p>
                <h1
                  className="page-enter-text text-4xl font-semibold md:text-6xl"
                  style={{ animationDelay: "120ms" }}
                >
                  Pre-Primary
                </h1>
                <p
                  className="page-enter-text max-w-2xl text-sm text-white/75"
                  style={{ animationDelay: "240ms" }}
                >
              Our pre-primary education curriculum focuses on the basic
              foundational concepts of education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pt-10 pb-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Play-based curriculum",
            "Early literacy & numeracy",
            "Social-emotional growth",
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

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_55%,#f3f7ff_100%)] pt-10 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.08),transparent_70%)] blur-[100px]" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.12),transparent_70%)] blur-[120px]" />
        </div>
        <div className="container mx-auto px-6">
          <div className="grid gap-10 md:gap-12">
            {focusAreas.map((item, index) => (
              <div
                key={item.title}
                className="page-enter-card flex flex-col gap-4 rounded-3xl border border-[hsl(var(--primary)/0.1)] bg-white/80 p-6 shadow-[0_22px_45px_rgba(15,39,69,0.08)] backdrop-blur md:flex-row md:items-start md:gap-6 md:p-8"
                style={{ animationDelay: `${620 + index * 120}ms` }}
              >
                <div
                  className={`flex h-16 w-16 flex-none items-center justify-center rounded-full ${item.color} text-white shadow-[0_16px_30px_rgba(0,0,0,0.15)]`}
                >
                  {item.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[hsl(var(--primary)/0.9)]">
                    {item.title}
                  </h3>
                  {item.content ? (
                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.content}
                    </p>
                  ) : null}
                  {item.bullets ? (
                    <ul className="space-y-2 text-sm text-slate-600">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
