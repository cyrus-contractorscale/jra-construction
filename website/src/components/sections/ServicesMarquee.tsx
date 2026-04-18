"use client";

const items = [
  "Custom Homes",
  "Home Renovations",
  "Home Extensions",
  "Quantity Surveying",
];

export function ServicesMarquee() {
  const loop = [...items, ...items];

  return (
    <section className="overflow-hidden bg-[#0f2744] py-[40px]">
      <div className="services-marquee-track">
        {loop.map((item, index) => (
          <div key={`${item}-${index}`} className="services-marquee-item">
            <span className="services-marquee-text">{item}</span>
            <span className="services-marquee-separator" aria-hidden="true">
              ⌂
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
