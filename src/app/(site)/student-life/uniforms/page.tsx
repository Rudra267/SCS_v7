import uniformsBanner from "@/assets/uniform-banner.jpg";
import Image from "next/image";

const uniformImages = [
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/UniformPage/Corporate/images/popupImage_1718704484.png",
  "https://racewin.s3.ap-south-1.amazonaws.com/PRODUCTION/UniformPage/Corporate/images/popupImage_1718704415.jpg",
];

const technoUniforms = [
  "Boys - Nursery to II: PP Boys KE Shorts - Black Coffee",
  "Boys - III to V: Boys KE Shorts - Black Coffee",
  "Boys - VI to X: Boys IE Trouser - Black Coffee",
  "Boys - Nursery to X: Uni Shirt - Charcoal Check",
  "Boys - Nursery to II: PP Uni CC Tee - Ash",
  "Boys - III to X: CTS Uni CC Tee - Ash",
  "Girls - Nursery to II: PP Girls Wrap Frock - Black Coffee",
  "Girls - III to V: Girls Sailor Dress - Black Coffee",
  "Girls - VI to VII: Girls BOX KE Skirt - Black Coffee",
  "Girls - VI to VII: Uni Shirt - Charcoal Check",
  "Girls - VI to X: Girls Piping Waistcoat - Black Coffee",
  "Girls - VIII to X: Girls CC Kurti - Charcoal Check",
  "Girls - VIII to X: Girls FE DC Trouser - Black Coffee",
  "Girls - Nursery to V: Girls RW Sports Shorts - Coffee",
  "Girls - Nursery to VII: Girls Long Cycling Shorts - Black",
  "Girls - Nursery to II: PP Uni CC Tee - Ash",
  "Girls - III to X: CTS Uni CC Tee - Ash",
];

const cbseUniforms = [
  "Boys - Nursery to III: Red Stripes Shirt, Dark Grey Shorts",
  "Boys - IV to V: White Shirt, Dark Grey Shorts",
  "Boys - VI to X: White Shirt, Dark Grey Trousers",
  "Girls - Nursery to III: White Shirt, Red Stripes Skirt",
  "Girls - IV to V: White Shirt, Dark Grey Skirt",
  "Girls - VI to X: White Shirt, Dark Grey Skirt and Waist Coat",
];

const UniformImage = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-white">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-contain"
      />
    </div>
  );
};

export default function UniformsPage() {
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
              backgroundImage: `linear-gradient(120deg, rgba(11,29,53,0.62), rgba(22,58,102,0.56) 55%, rgba(43,84,138,0.48)), url(${uniformsBanner.src})`,
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
                  Uniforms
                </h1>
                <p
                  className="page-enter-text max-w-2xl text-sm text-white/75"
                  style={{ animationDelay: "240ms" }}
                >
                  A smart and comfortable uniform policy that builds identity and
                  discipline across all grades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div
          className="page-enter-text mb-12 max-w-3xl"
          style={{ animationDelay: "360ms" }}
        >
          <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-accent">
            Uniform Guide
          </span>
          {/* <h2 className="mt-5 text-3xl font-semibold text-[hsl(var(--primary))] md:text-5xl">
            Our School Uniform Varies By Curriculum
          </h2> */}
          <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--primary)/0.65)]">
            Uniform details for Techno and CBSE streams, including grade-wise regular and activity wear.
          </p>
        </div>

        <div className="space-y-10">
          <section
            className="page-enter-card overflow-hidden rounded-3xl border border-[hsl(var(--primary)/0.1)] bg-white shadow-[0_22px_55px_rgba(9,35,66,0.1)]"
            style={{ animationDelay: "500ms" }}
          >
            <div className="p-6 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
                Techno Uniform
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[hsl(var(--primary))]">
                Grade-wise uniform details
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {technoUniforms.map((item, index) => (
                  <div
                    key={item}
                    className="page-enter-card rounded-2xl border border-[hsl(var(--primary)/0.08)] bg-slate-50 px-4 py-3 text-sm leading-relaxed text-[hsl(var(--primary)/0.72)]"
                    style={{ animationDelay: `${620 + index * 35}ms` }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-[hsl(var(--primary)/0.08)] bg-slate-50 p-4 md:p-6">
              <UniformImage src={uniformImages[0]} alt="Techno uniform" />
            </div>
          </section>

          <section
            className="page-enter-card overflow-hidden rounded-3xl border border-[hsl(var(--primary)/0.1)] bg-[linear-gradient(135deg,#0b2f52,#0d3b66)] text-white shadow-[0_22px_55px_rgba(9,35,66,0.18)]"
            style={{ animationDelay: "760ms" }}
          >
            <div className="p-6 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/65">
                CBSE Uniform
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Standard CBSE dress code
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {cbseUniforms.map((item, index) => (
                  <div
                    key={item}
                    className="page-enter-card rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm leading-relaxed text-white/78"
                    style={{ animationDelay: `${880 + index * 45}ms` }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-white/10 bg-white/8 p-4 md:p-6">
              <UniformImage src={uniformImages[1]} alt="CBSE uniform" />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
