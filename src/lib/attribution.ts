/**
 * Client-side attribution capture.
 *
 * On every survey page load we read UTM / click-ID parameters from the URL
 * and persist them (first-touch wins) in localStorage. When the lead is
 * submitted, the stored attribution is sent to /api/lead and written to the
 * matching GHL custom fields, so the CRM shows where the lead came from.
 */

export interface Attribution {
  utmSource?: string;
  utmCampaign?: string;
  utmKeyword?: string;
  utmContent?: string;
  utmMatchType?: string;
  gclid?: string;
  fbClickId?: string;
  sessionSource?: string;
  sourceUrl?: string;   // landing page URL of the first visit
  referrer?: string;
  surveyPage?: string;  // survey page the lead filled in (set at submit time)
}

const STORAGE_KEY = "jra_attribution_v1";

/** URL param → attribution key. utm_term and utm_keyword both map to keyword. */
const PARAM_MAP: Record<string, keyof Attribution> = {
  utm_source:    "utmSource",
  utm_campaign:  "utmCampaign",
  utm_term:      "utmKeyword",
  utm_keyword:   "utmKeyword",
  utm_content:   "utmContent",
  utm_matchtype: "utmMatchType",
  matchtype:     "utmMatchType",
  gclid:         "gclid",
  fbclid:        "fbClickId",
};

function deriveSessionSource(utmSource: string | undefined, referrer: string): string {
  if (utmSource) return `Campaign: ${utmSource}`;
  if (referrer) {
    try {
      const host = new URL(referrer).hostname;
      if (host && !host.includes(window.location.hostname)) {
        if (/google\./i.test(host)) return "Organic: Google";
        if (/bing\./i.test(host)) return "Organic: Bing";
        if (/facebook\.|fb\.com|instagram\./i.test(host)) return "Social: Meta";
        return `Referral: ${host}`;
      }
    } catch {
      // unparsable referrer — ignore
    }
  }
  return "Direct traffic";
}

/**
 * Capture attribution from the current URL. First-touch: values already
 * stored are never overwritten, so the original source survives navigation.
 * Safe to call on every page mount.
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const stored: Attribution = JSON.parse(
      window.localStorage.getItem(STORAGE_KEY) ?? "{}"
    );

    const params = new URLSearchParams(window.location.search);
    let changed = false;

    for (const [param, key] of Object.entries(PARAM_MAP)) {
      const value = params.get(param);
      if (value && !stored[key]) {
        stored[key] = value;
        changed = true;
      }
    }

    if (!stored.sourceUrl) {
      stored.sourceUrl = window.location.href.split("#")[0];
      changed = true;
    }
    if (!stored.referrer && document.referrer) {
      stored.referrer = document.referrer;
      changed = true;
    }
    if (!stored.sessionSource) {
      stored.sessionSource = deriveSessionSource(stored.utmSource, document.referrer);
      changed = true;
    }

    if (changed) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    }
  } catch {
    // localStorage unavailable (private mode etc.) — attribution is best-effort
  }
}

/** Read the stored attribution, tagging the current page as the survey page. */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const stored: Attribution = JSON.parse(
      window.localStorage.getItem(STORAGE_KEY) ?? "{}"
    );
    stored.surveyPage = window.location.pathname;
    return stored;
  } catch {
    return { surveyPage: window.location.pathname };
  }
}
