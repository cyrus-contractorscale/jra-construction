"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

/* Live-site review embed: GHL reputation widget showing JRA's real Google
   reviews (same iframe as jraconstruction.co.nz). The widget posts a
   `lc.setHeight` message when it loads, so we attach the resize listener
   before mounting the iframe to avoid missing it. */
const WIDGET_SRC =
  "https://reputationhub.site/reputation/widgets/review_widget/J3MyzsoPYhafh3FWfabM";

export function Testimonials({ heading = "Don't Take Our Word For It" }: { heading?: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!Array.isArray(e.data)) return;
      const [eventName, data] = e.data;
      if (
        (eventName === "lc.setHeight" || eventName === "lc.setFlashHeight") &&
        data?.id === "lc_reviews_widget" &&
        iframeRef.current &&
        data?.height
      ) {
        iframeRef.current.style.transition = "height 0.5s";
        iframeRef.current.height = String(data.height);
      }
    }
    window.addEventListener("message", onMessage);
    setReady(true);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section id="testimonials" className="scroll-mt-24 overflow-hidden bg-[#f9fafb] py-16 sm:py-20">
      <Container>
        <AnimateOnScroll variant="fade-up" className="space-y-4 text-center">
          <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[42px] font-extrabold leading-[1.04] tracking-tight text-[#293a57] sm:text-[56px]">
            {heading}
          </h2>
        </AnimateOnScroll>

        <div className="mt-10 min-h-[400px]">
          {ready && (
            <iframe
              ref={iframeRef}
              className="lc_reviews_widget"
              src={WIDGET_SRC}
              frameBorder="0"
              scrolling="no"
              style={{ minWidth: "100%", width: "100%" }}
              title="JRA Construction customer reviews"
            />
          )}
        </div>
      </Container>
    </section>
  );
}
