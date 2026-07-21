import { formatCurrency } from "./estimate";
import { ghlFieldMap, isStandardFieldKey } from "./ghlFieldMap";
import type { GhlContactPayload, GhlCustomField } from "./ghlClient";
import type { Answers, EstimateResult, Survey } from "./types";

function toStringValue(value: unknown): string {
  if (value == null) return "";
  if (Array.isArray(value)) return value.join(", ");
  return String(value);
}

/** Map common country names → ISO 3166-1 alpha-2 codes accepted by GHL. */
const COUNTRY_ISO: Record<string, string> = {
  "new zealand": "NZ",
  "nz":          "NZ",
  "australia":   "AU",
  "au":          "AU",
  "united states": "US",
  "usa":         "US",
  "us":          "US",
  "united kingdom": "GB",
  "uk":          "GB",
  "gb":          "GB",
  "canada":      "CA",
  "ca":          "CA",
};

function normalizeCountry(raw: string): string {
  return COUNTRY_ISO[raw.trim().toLowerCase()] ?? raw;
}

/**
 * Normalize a phone number to E.164 for GHL.
 * GHL rejects contacts whose phone is not in international format.
 *
 * Rules:
 *   1. Strip spaces, dashes, parentheses.
 *   2. Already starts with + → trust it.
 *   3. Starts with 64 (NZ without +) → prefix with +.
 *   4. Starts with 61 (AU without +) → prefix with +.
 *   5. Starts with 0 AND 9–10 digits → NZ/AU local.
 *      Replace leading 0 with country code 64 (NZ default for this business).
 *   6. Anything else → return as-is and let ghlClient's retry logic handle it.
 */
function normalizePhone(raw: string): string {
  const stripped = raw.replace(/[\s\-().]/g, "");
  if (!stripped) return raw;
  if (stripped.startsWith("+")) return stripped;
  if (/^64\d{8,10}$/.test(stripped)) return `+${stripped}`;   // NZ without +
  if (/^61\d{9}$/.test(stripped)) return `+${stripped}`;      // AU without +
  // Local NZ mobile: 021/022/027/028 + 7-8 digits (total 9-10 after 0)
  if (/^0[2-9]\d{7,9}$/.test(stripped)) {
    return `+64${stripped.slice(1)}`;
  }
  return stripped; // fallback — ghlClient will retry without phone if rejected
}

/**
 * Flatten survey answers into a { ghlFieldKey: stringValue } map, using each
 * question's (and fieldGroup sub-field's) ghlFieldKey.
 */
export function flattenAnswers(survey: Survey, answers: Answers): Record<string, string> {
  const out: Record<string, string> = {};

  for (const q of survey.questions) {
    const answer = answers[q.id];
    if (q.type === "fieldGroup" && q.fields) {
      const group = (answer as Record<string, string>) || {};
      for (const f of q.fields) {
        if (!f.ghlFieldKey) continue;
        const v = toStringValue(group[f.id]);
        if (v) out[f.ghlFieldKey] = v;
      }
    } else if (q.ghlFieldKey) {
      const v = toStringValue(answer);
      if (v) out[q.ghlFieldKey] = v;
    }
  }

  return out;
}

/** Build the GHL contact payload from a completed survey. */
export function buildGhlPayload(
  survey: Survey,
  answers: Answers,
  result: EstimateResult,
  attribution?: Record<string, string | undefined>
): GhlContactPayload {
  const flat = flattenAnswers(survey, answers);

  // Merge attribution values (utmSource, gclid, sessionSource, …). Only keys
  // present in ghlFieldMap are forwarded; survey answers take precedence.
  if (attribution) {
    for (const [key, value] of Object.entries(attribution)) {
      if (value && ghlFieldMap[key] && !flat[key]) flat[key] = value;
    }
  }

  // Inject computed estimate values so they can map to custom fields too.
  flat.projectType = survey.label;
  flat.estimateLow =
    result.basis === "unavailable" ? "Pending consult" : String(Math.round(result.low));
  flat.estimateHigh =
    result.basis === "unavailable" ? "Pending consult" : String(Math.round(result.high));
  flat.estimateRange =
    result.basis === "unavailable"
      ? "Pending consult"
      : `${formatCurrency(result.low)} - ${formatCurrency(result.high)}`;

  const payload: GhlContactPayload = {
    source: "Estimate Funnel",
    tags: ["estimate", survey.label],
    customFields: [],
  };
  const customFields: GhlCustomField[] = [];

  for (const [key, value] of Object.entries(flat)) {
    if (!value) continue;
    if (isStandardFieldKey(key)) {
      // Normalize phone to E.164 and country to ISO code — GHL rejects plain names
      let normalized = value;
      if (key === "phone") normalized = normalizePhone(value);
      if (key === "country") normalized = normalizeCountry(value);
      (payload as Record<string, unknown>)[key] = normalized;
      continue;
    }
    const fieldId = ghlFieldMap[key];
    if (fieldId) {
      customFields.push({ id: fieldId, value });
    }
  }

  payload.customFields = customFields;
  return payload;
}
