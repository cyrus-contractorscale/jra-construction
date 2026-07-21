/**
 * Static sidebar — uses site.ts defaults (no KV / no edge runtime).
 * Safe to import from statically-rendered survey landing pages.
 */
import Image from "next/image";
import { site } from "@/lib/site";

export function EstimateSidebarStatic() {
  return (
    <aside className="w-full lg:w-[360px] xl:w-[400px] shrink-0">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl glass-strong">

        {/* Logo */}
        <div className="flex items-center justify-center px-8 py-8">
          <Image
            src={`/${site.logoFile}`}
            alt="Company logo"
            width={180}
            height={80}
            className="h-auto w-auto max-h-[180px] max-w-[180px] object-contain"
            priority
          />
        </div>

        {/* Contact info */}
        <div className="flex-1 divide-y divide-white/60 border-t border-white/60 px-7">
          <div className="flex items-start gap-4 py-5">
            <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink-100/80 text-ink-500">
              <PhoneIcon />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink-400">Contact number:</p>
              <a href={site.phoneHref} className="mt-1 block text-base font-semibold text-ink-900 hover:underline">
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 py-5">
            <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink-100/80 text-ink-500">
              <MailIcon />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink-400">Email address:</p>
              <a href={`mailto:${site.email}`} className="mt-1 block text-base font-semibold text-ink-900 hover:underline break-all">
                {site.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 py-5">
            <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink-100/80 text-ink-500">
              <LocationIcon />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink-400">Client location:</p>
              <p className="mt-1 text-base font-semibold text-ink-900">Auckland Region, NZ</p>
            </div>
          </div>
        </div>

        {/* Google rating */}
        <div className="flex flex-col items-center border-t border-white/60 px-8 py-7 mt-auto">
          <span className="flex text-[28px] font-bold leading-none tracking-tight" aria-label="Google">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
          <div className="mt-3 flex gap-1">
            {[1, 2, 3, 4].map((i) => <StarFull key={i} />)}
            <StarHalf />
          </div>
          <p className="mt-2.5 font-heading text-base font-extrabold uppercase tracking-widest text-ink-900">4.9 Star</p>
          <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-400">Customer Rating</p>
        </div>
      </div>
    </aside>
  );
}

function StarFull() {
  return (
    <svg viewBox="0 0 20 20" className="h-6 w-6" fill="#FBBC05">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function StarHalf() {
  return (
    <svg viewBox="0 0 20 20" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="halfGrad">
          <stop offset="50%" stopColor="#FBBC05" />
          <stop offset="50%" stopColor="#d1d5db" />
        </linearGradient>
      </defs>
      <path fill="url(#halfGrad)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.44 2 2 0 0 1 3.59 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l1.17-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
