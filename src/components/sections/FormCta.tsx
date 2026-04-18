import { Container } from "@/components/ui/Container";
import { ContactForm } from "./ContactForm";

export function FormCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#0f2744] bg-cover bg-center bg-no-repeat py-14 sm:py-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,39,68,0.86), rgba(15,39,68,0.86)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=80')",
      }}
    >
      <Container className="grid gap-8 lg:grid-cols-[1fr_520px] lg:items-start">
        <div className="pt-2 text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
            Let&apos;s get your dream started
          </p>
          <h2 className="mt-2 max-w-xl font-[ui-sans-serif,system-ui,sans-serif] text-[54px] font-extrabold leading-[1.02] tracking-tight text-white">
            Claim Your Free Design & Build Consultation
          </h2>
          <p className="mt-5 text-[17px] text-zinc-200">This Design & Build Consult covers...</p>

          <ul className="mt-5 space-y-3 text-[16px] text-zinc-100">
            {[
              "Design Consultation",
              "Site Walk-Thru and Inspection",
              "Director's Consultation",
              "Selections Checklist & Comparison",
              "Rough Estimate and Budget Scope",
              "Timeline Estimate and Move-In Date Expectations",
              "Connection to our Preferred Partner Network",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400 text-[12px] text-emerald-400">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-center">
          <div className="w-full max-w-[520px] rounded-xl bg-white p-5 shadow-2xl shadow-black/35 sm:p-6">
            <ContactForm />
            <div className="mt-3 text-center text-[11px] text-zinc-400">
              We respect your privacy. No spam, ever.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
