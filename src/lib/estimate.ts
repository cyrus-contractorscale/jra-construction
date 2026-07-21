import { pricing } from "./pricing";
import type { Answers, EstimateResult, Survey } from "./types";

function roundTo(value: number, nearest: number): number {
  if (nearest <= 0) return Math.round(value);
  return Math.round(value / nearest) * nearest;
}

/**
 * Parse a budget option label into a numeric [low, high] band.
 * Handles: "Under $50k", "$100k-$250k", "$1M+", "$350k+", "$250,000 - $350,000".
 */
export function parseBudgetRange(label: string): [number, number] | null {
  if (!label) return null;
  const cleaned = label.replace(/,/g, "").toLowerCase();

  const toNumber = (raw: string): number => {
    const m = raw.match(/\$?\s*([\d.]+)\s*([km]?)/i);
    if (!m) return NaN;
    let n = parseFloat(m[1]);
    if (m[2] === "k") n *= 1_000;
    else if (m[2] === "m") n *= 1_000_000;
    return n;
  };

  const numbers = cleaned.match(/\$?\s*[\d.]+\s*[km]?/gi)?.map(toNumber) ?? [];
  if (numbers.length === 0 || numbers.some((n) => Number.isNaN(n))) return null;

  if (/under|below|less than|up to/.test(cleaned)) {
    return [0, numbers[0]];
  }
  if (/\+|over|above|more than/.test(cleaned) && numbers.length === 1) {
    return [numbers[0], Math.round(numbers[0] * 1.4)];
  }
  if (numbers.length >= 2) {
    return [numbers[0], numbers[1]];
  }
  return [numbers[0], numbers[0]];
}

function findByRole(survey: Survey, role: string) {
  return survey.questions.find((q) => q.role === role);
}

export function computeEstimate(
  survey: Survey,
  answers: Answers
): EstimateResult {
  const cfg = pricing.projects[survey.id];
  const base: EstimateResult = {
    projectType: survey.id,
    projectLabel: survey.label,
    low: 0,
    high: 0,
    currency: "$",
    basis: "unavailable",
  };

  const sizeQ = findByRole(survey, "size");
  const finishQ = findByRole(survey, "finishLevel");
  const budgetQ = findByRole(survey, "budget");

  const sizeRaw = sizeQ ? answers[sizeQ.id] : undefined;
  const size =
    typeof sizeRaw === "string" ? parseFloat(sizeRaw.replace(/[^\d.]/g, "")) : NaN;

  const finishVal = finishQ ? (answers[finishQ.id] as string) : "Standard";
  const finishMult = cfg.finish[finishVal] ?? cfg.finish.Standard ?? 1;

  // Preferred path: size x base rate x finish multiplier.
  if (cfg && size && size > 0) {
    const mid = cfg.basePerSqm * size * finishMult;
    return {
      ...base,
      low: roundTo(mid * (1 - pricing.rangeSpread), pricing.roundTo),
      high: roundTo(mid * (1 + pricing.rangeSpread), pricing.roundTo),
      basis: "calculated",
    };
  }

  // Fallback: use the selected budget band.
  if (budgetQ) {
    const parsed = parseBudgetRange((answers[budgetQ.id] as string) || "");
    if (parsed) {
      return {
        ...base,
        low: roundTo(parsed[0], pricing.roundTo),
        high: roundTo(parsed[1], pricing.roundTo),
        basis: "budget",
      };
    }
  }

  return base;
}

export function formatCurrency(value: number, currency = "$"): string {
  return `${currency}${Math.round(value).toLocaleString("en-US")}`;
}
