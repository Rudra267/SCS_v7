import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Corporate Office",
    text: "Plot No. 80, Ayyappa Society, Madhapur, Hyderabad, Telangana.",
  },
  {
    icon: Phone,
    title: "Admissions Desk",
    text: "+91 1800-123-4567",
  },
  {
    icon: Mail,
    title: "Email",
    text: "admissions@srichaitanya.edu",
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0">
          <div className="aurora-stars" />
          <div className="aurora-band" />
          <div className="aurora-band aurora-band-two" />
          <div className="aurora-horizon" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),rgba(2,14,30,0.85)_55%,rgba(1,8,18,0.95)_100%)]" />
        </div>
        <div className="container relative mx-auto px-6 pt-36 pb-20">
          <p className="page-enter-text text-[11px] uppercase tracking-[0.5em] text-white/70">
            Contact
          </p>
          <h1
            className="page-enter-text mt-4 text-4xl md:text-5xl font-semibold"
            style={{ animationDelay: "120ms" }}
          >
            Let’s Talk
          </h1>
          <p
            className="page-enter-text mt-4 max-w-2xl text-sm text-white/80"
            style={{ animationDelay: "240ms" }}
          >
            Reach out for admissions, school visits, or general enquiries. We’re
            here to help.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {contactCards.map((card, index) => (
            <div
              key={card.title}
              className="page-enter-card rounded-3xl border border-[hsl(var(--primary)/0.12)] bg-white p-6 shadow-[0_20px_45px_rgba(9,35,66,0.12)]"
              style={{ animationDelay: `${360 + index * 110}ms` }}
            >
              <card.icon className="h-6 w-6 text-[hsl(var(--accent))]" />
              <h3 className="mt-4 text-lg font-semibold text-[hsl(var(--primary))]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-[hsl(var(--primary)/0.65)]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/contact/enquire"
            className="page-enter-card inline-flex rounded-full bg-[hsl(var(--primary))] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_18px_35px_rgba(13,59,102,0.25)] transition hover:bg-[hsl(var(--accent))]"
            style={{ animationDelay: "700ms" }}
          >
            Admission Enquiry Form
          </Link>
        </div>
      </section>
    </main>
  );
}
