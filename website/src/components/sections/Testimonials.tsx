import { Container } from "@/components/ui/Container";

const testimonials = [
  {
    quote:
      "From the initial consultation to the final walkthrough, the team at JRA was professional and transparent. They made our renovation stress-free.",
    name: "Sarah Jenkins",
    handle: "@sarah_jk",
    initials: "SJ",
    tint: "bg-blue-100 text-blue-700",
  },
  {
    quote:
      "We hired JRA for a major home extension. They stayed on budget, finished on time, and the quality of workmanship is absolutely top-notch. Couldn't be happier.",
    name: "Marcus Thorne",
    handle: "@marcus_t",
    initials: "MT",
    tint: "bg-emerald-100 text-emerald-700",
  },
  {
    quote:
      "The quantity surveying service was a lifesaver. It gave us a realistic budget upfront and prevented any nasty surprises down the line. Great team to work with.",
    name: "David Chen",
    handle: "@dchen_nz",
    initials: "DC",
    tint: "bg-orange-100 text-orange-700",
  },
  {
    quote:
      "Our new custom home is everything we dreamed of. JRA listened to our needs and delivered a beautiful, functional space for our family.",
    name: "Sophie Clark",
    handle: "@sophie_c",
    initials: "SC",
    tint: "bg-pink-100 text-pink-700",
  },
  {
    quote:
      "Reliable, skilled, and honest. It's hard to find good builders, but JRA Construction ticks all the boxes. Their bathroom renovation is flawless.",
    name: "Liam O'Connor",
    handle: "@liam_o",
    initials: "LO",
    tint: "bg-cyan-100 text-cyan-700",
  },
  {
    quote:
      "From the initial consultation to the final walkthrough, the team at JRA was professional and transparent. They made our renovation stress-free.",
    name: "Elena Rodriguez",
    handle: "@elena_rod",
    initials: "ER",
    tint: "bg-violet-100 text-violet-700",
  },
];

/** Must match `--marquee-segments` in globals.css (`.testimonials-track`). */
const MARQUEE_SEGMENTS = 6;

export function Testimonials() {
  const topRow = testimonials.slice(0, 3);
  const bottomRow = testimonials.slice(3, 6);
  const topLoop = Array.from({ length: MARQUEE_SEGMENTS }, () => topRow).flat();
  const bottomLoop = Array.from({ length: MARQUEE_SEGMENTS }, () => bottomRow).flat();

  return (
    <section id="testimonials" className="scroll-mt-24 overflow-hidden bg-[#f9fafb] py-16 sm:py-20">
      <Container>
        <div className="space-y-4 text-center">
          <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[56px] font-extrabold leading-[1.04] tracking-tight text-[#0f2744]">
            Trusted by Homeowners Across Auckland
          </h2>
          <p className="mx-auto max-w-2xl text-[18px] text-[#5f7286]">
            See what our clients have to say about their experience building their dream homes and
            investments with our expert team.
          </p>
        </div>
      </Container>

      <div className="mt-10 space-y-4">
        <div className="testimonials-marquee-row">
          <div className="testimonials-track testimonials-track-right">
            {topLoop.map((item, idx) => (
              <article key={`${item.name}-top-${idx}`} className="testimonial-card">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-bold ${item.tint}`}>
                      {item.initials}
                    </span>
                    <div>
                      <p className="text-[14px] font-bold text-[#1a2f48]">{item.name}</p>
                      <p className="text-[12px] text-[#8a9aab]">{item.handle}</p>
                    </div>
                  </div>
                  <span className="text-[20px] leading-none text-[#c8d2dd]">×</span>
                </div>
                <p className="mt-4 text-[15px] leading-[1.52] text-[#4d6277]">{item.quote}</p>
                <div className="mt-3 text-right text-[22px] leading-none text-[#d7dfe7]">”</div>
              </article>
            ))}
          </div>
          <div className="testimonials-edge-left" aria-hidden="true" />
          <div className="testimonials-edge-right" aria-hidden="true" />
        </div>

        <div className="testimonials-marquee-row">
          <div className="testimonials-track testimonials-track-left">
            {bottomLoop.map((item, idx) => (
              <article key={`${item.name}-bottom-${idx}`} className="testimonial-card">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-bold ${item.tint}`}>
                      {item.initials}
                    </span>
                    <div>
                      <p className="text-[14px] font-bold text-[#1a2f48]">{item.name}</p>
                      <p className="text-[12px] text-[#8a9aab]">{item.handle}</p>
                    </div>
                  </div>
                  <span className="text-[20px] leading-none text-[#c8d2dd]">×</span>
                </div>
                <p className="mt-4 text-[15px] leading-[1.52] text-[#4d6277]">{item.quote}</p>
                <div className="mt-3 text-right text-[22px] leading-none text-[#d7dfe7]">”</div>
              </article>
            ))}
          </div>
          <div className="testimonials-edge-left" aria-hidden="true" />
          <div className="testimonials-edge-right" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
