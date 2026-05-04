import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Daily mentoring and structured study plans helped me stay calm, consistent, and ready for exams.",
    name: "Aarav Sharma",
    role: "Class 10 student",
    tag: "Student Voice",
    rating: 4.8,
    avatar:
      "https://images.pexels.com/photos/11793802/pexels-photo-11793802.jpeg?cs=srgb&dl=pexels-mehmet-turgut-kirkgoz-11793802.jpg&fm=jpg",
  },
  {
    quote:
      "Focused feedback after every test helped me fix gaps quickly and feel confident heading into exams.",
    name: "Ananya Iyer",
    role: "Class 9 student",
    tag: "Student Voice",
    rating: 4.6,
    avatar:
      "https://images.pexels.com/photos/30768834/pexels-photo-30768834.jpeg?cs=srgb&dl=pexels-artosuraj-30768834.jpg&fm=jpg",
  },
  {
    quote:
      "Teachers here notice the small wins. That steady encouragement made me fall in love with learning again.",
    name: "Rohan Mehta",
    role: "Class 8 student",
    tag: "Student Voice",
    rating: 4.4,
    avatar:
      "https://images.pexels.com/photos/18198859/pexels-photo-18198859.jpeg?cs=srgb&dl=pexels-iqbal-farooz-10787244-18198859.jpg&fm=jpg",
  },
];

const TestimonialsSection = () => {
  const rows = [testimonials];
  const headingText = "What Our Learners Say";
  const headingContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0.05,
      },
    },
  };
  const headingChar: Variants = {
    hidden: { opacity: 0, y: -18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };
  const underlineDelay = 0.05 + Math.max(headingText.length - 1, 0) * 0.025 + 0.35;
  const renderHeadingChars = (text: string): JSX.Element[] =>
    text.split("").map((char, index) => (
      <motion.span key={`${text}-${index}`} variants={headingChar} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  return (
    <section
      id="testimonials"
      className="testimonial-section py-16 md:py-20"
    >
      <div className="testimonial-parallax" aria-hidden="true" />
      <div className="testimonial-overlay" aria-hidden="true" />
      <div className="testimonial-dots" aria-hidden="true" />
      <div className="testimonial-glow" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent shadow-[0_10px_30px_rgba(13,59,102,0.2)]">
            Testimonials
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-sans font-semibold text-primary-foreground">
            <span className="sr-only">{headingText}</span>
            <motion.span
              aria-hidden="true"
              className="inline-flex flex-wrap justify-center"
              variants={headingContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              {renderHeadingChars("What Our ")}
              <span className="relative inline-flex">
                <span className="font-tomboy">{renderHeadingChars("Learners")}</span>
                {renderHeadingChars(" Say")}
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: underlineDelay }}
                  className="absolute -bottom-2 left-0 right-0 h-2 origin-left rounded-full bg-gradient-to-r from-accent/80 via-accent/40 to-transparent"
                />
              </span>
            </motion.span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-primary-foreground/70 max-w-2xl mx-auto">
            Real feedback from students and parents who experienced our programs and support.
          </p>
        </motion.div>

        <div className="mt-8 md:mt-10 space-y-6">
          {rows.map((row, rowIndex) => {
            const looped = [...row, ...row];
            return (
              <div key={`row-${rowIndex}`} className="testimonial-marquee">
                <div
                  className={`testimonial-track ${rowIndex % 2 === 1 ? "testimonial-track--reverse" : ""}`}
                >
                  {looped.map((testimonial, index) => {
                    const isDuplicate = index >= row.length;
                    const initials = testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2);

                    return (
                      <article
                        key={`${rowIndex}-${index}-${testimonial.name}`}
                        aria-hidden={isDuplicate}
                        className="min-w-[300px] sm:min-w-[380px] lg:min-w-[440px] max-w-[480px] rounded-[34px] bg-white/16 p-7 sm:p-8 shadow-[0_28px_70px_rgba(5,12,25,0.45)] backdrop-blur-[50px] ring-1 ring-white/20"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative h-14 w-14 rounded-full bg-white/20 flex items-center justify-center overflow-hidden ring-1 ring-white/25">
                            <span className="absolute inset-0 flex items-center justify-center text-[14px] font-semibold text-white">
                              {initials}
                            </span>
                            {testimonial.avatar ? (
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="relative z-10 h-full w-full object-cover"
                                onError={(event) => {
                                  event.currentTarget.style.display = "none";
                                }}
                              />
                            ) : null}
                          </div>
                          <div>
                            <p className="text-[17px] font-semibold text-white">{testimonial.name}</p>
                            <p className="text-[13px] text-white/70">{testimonial.role}</p>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2 text-[13px] text-white/70">
                          <span className="font-semibold text-white/80">
                            {testimonial.rating.toFixed(1)}
                          </span>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, starIndex) => {
                              const filledStars = Math.round(testimonial.rating);
                              const isFilled = starIndex < filledStars;
                              return (
                                <Star
                                  key={`${testimonial.name}-star-${rowIndex}-${starIndex}`}
                                  className={`h-5 w-5 ${isFilled ? "text-amber-300" : "text-white/25"}`}
                                  fill={isFilled ? "currentColor" : "none"}
                                />
                              );
                            })}
                          </div>
                        </div>

                        <p className="mt-4 text-[15px] leading-relaxed text-white/80">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
