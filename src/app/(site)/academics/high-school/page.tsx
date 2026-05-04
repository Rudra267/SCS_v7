import highSchoolBanner from "@/assets/high-school-banner.jpg";
export default function HighSchoolPage() {
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
        "Every child has innate capabilities that help him/her shine. Our expert faculty provides the right guidance to bring out these latent qualities, transforming the student into a successful individual. Sri Chaitanya Syllabus is a unique one with an orientation of enabling the students to take up the task of getting selected for the prestigious IITs, NITs, AIIMS, JIPMER, AIPMT, deemed universities and other medical and engineering institutes and other streams with ease and comfort.",
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
      content: [
        "Sri Chaitanya devised a strong curriculum, integrating the components of Maths, Physics, Chemistry and Biology which are needed for the various entrance exams under the name of TECHNO CURRICULUM.",
        "The content matter is divided into optimum doses so that the students do not feel overburdened with the syllabus. At the same time care is taken to see that the components of the Techno Curriculum are strictly according to their normal course of study related to the class in which they are studying at present.",
        "This makes them study their present syllabus in depth with the help of the Micro Level Teaching, providing them the chance of improving their performance in the current class in which they are studying.",
      ],
      bullets: [
        "Techno Programme: Techno Curriculum is an integration of State, CBSE & ICSE boards.",
        "The main objective is to give the students a good foundation for entering the prestigious IITs, NITs, AIIMS, JIPMER, AIPMT, deemed universities and other medical and engineering institutes.",
        "In Techno, around 40% of IIT and NEET foundation syllabus will be covered.",
        "C-Batch Programme: The main objective of C Batch programme is to ensure that these students are competent enough to secure below 500/1000 ranks in IIT level entrance tests.",
        "In C Batch, 50-60% of IIT-JEE Entrance Exam syllabus will be covered.",
        "ICON Programme: The main objective of ICON programme is to ensure that these students are competent enough to secure below 200 to 500 ranks in IIT-JEE.",
        "In ICON, 60-70% of IIT-JEE Entrance Exam syllabus will be covered.",
        "IPL Programme: The main objective of IPL programme is to ensure that these students are competent enough to secure below 100 ranks in IIT-JEE Entrance Exam.",
        "In IPL, 70-80% of IIT-JEE Entrance Exam syllabus will be covered.",
        "CO IPL Programme targeted for those students who want to be in Top 10 & Top 20 in the IIT-JEE Entrance Test & other competitive examinations.",
        "In CO IPL, 90-95% of IIT-JEE Entrance Exam syllabus will be covered.",
        "Medicon Programme: The objective of MEDICON is to prepare our students to secure below 500 to below 1000 ranks in the NEET exam.",
        "In Medicon, 50-60% of NEET Entrance Exam syllabus will be covered.",
        "MPL Programme: The objective of MPL Programme is to prepare our students to secure below 100 and below 10 ranks in the NEET exam.",
        "In MPL Programme, 80-90% of NEET Entrance Exam syllabus will be covered.",
        "S-Batch is the programme which trains the students in the direction of a number of higher-grade career choices in the Government sector jobs like Civil Services (IAS, IPS, IFS, IRS), Group Services (Group I, Group II), Banking Services, Railways etc.",
      ],
      footer:
        "This programme aims at the all-round development of the child and improving leadership qualities.",
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
      bullets: [
        "To focus on an interactive learning process",
        "Bring forth the child's inner capabilities",
        "To prepare a result-oriented programme for success in competitive exams",
        "Groom the child to communicate effectively",
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
              backgroundImage: `linear-gradient(120deg, rgba(11,29,53,0.62), rgba(22,58,102,0.56) 55%, rgba(43,84,138,0.48)), url(${highSchoolBanner.src})`,
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
                  High School
                </h1>
                <p
                  className="page-enter-text max-w-2xl text-sm text-white/75"
                  style={{ animationDelay: "240ms" }}
                >
              Our high school education curriculum stresses on developing
              professionals out of students by instilling in them a
              career-oriented approach to academics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pt-10 pb-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Board-aligned curriculum",
            "Olympiad & exam prep",
            "Career counseling",
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

          <div className="mt-6 grid gap-10 md:gap-12">
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
                  {item.content
                    ? Array.isArray(item.content)
                      ? item.content.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-sm leading-relaxed text-slate-600"
                          >
                            {paragraph}
                          </p>
                        ))
                      : (
                          <p className="text-sm leading-relaxed text-slate-600">
                            {item.content}
                          </p>
                        )
                    : null}
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
                  {item.footer ? (
                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.footer}
                    </p>
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
