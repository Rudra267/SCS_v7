import AchievementsSection from "@/components/home/AchievementsSection";
import { getAchievements } from "@/lib/achievements";

export const revalidate = 3600;

export default async function AchievementsPage() {
  const achievements = await getAchievements();
  return (
    <main>
      <section className="relative bg-[radial-gradient(circle_at_top,#f7f8ff_0%,#ffffff_45%,#f4f6fb_100%)] pt-40 pb-0">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.14),transparent_70%)] blur-[90px]" />
          <div className="absolute top-40 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.12),transparent_70%)] blur-[110px]" />
        </div>

        <div className="relative w-full">
          <div
            className="relative overflow-hidden bg-cover bg-center pb-28 pt-16 text-white"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(11,29,53,0.66), rgba(22,58,102,0.58) 55%, rgba(43,84,138,0.46)), url('/assets/banner-our-achievements-corporate.jpg')",
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
                  Proud Moments
                </p>
                <h1
                  className="page-enter-text text-4xl font-semibold md:text-6xl"
                  style={{ animationDelay: "120ms" }}
                >
                  Our Achievements
                </h1>
                <p
                  className="page-enter-text max-w-2xl text-sm text-white/75"
                  style={{ animationDelay: "240ms" }}
                >
                  Celebrating student success across academics, leadership, and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AchievementsSection achievements={achievements} />
    </main>
  );
}
