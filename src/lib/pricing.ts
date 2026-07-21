import type { ProjectType } from "./types";

export interface ProjectPricing {
  /** Base build cost per square metre (placeholder - edit with real rates). */
  basePerSqm: number;
  /** Multipliers applied to the base rate by chosen finish level. */
  finish: Record<string, number>;
}

export interface PricingConfig {
  rangeSpread: number;
  roundTo: number;
  projects: Record<ProjectType, ProjectPricing>;
}

/**
 * JRA Construction pricing — base rates grounded in JRA's own published
 * Auckland cost guides (see report-audit/06-blog.md):
 *  - New builds: $4,800–$6,200/m² (cost-to-build-new-house-auckland)
 *  - Additions/extensions: $3,500–$6,500/m² (how-much-does-a-home-addition-cost-in-auckland)
 *  - Full renovations: $2,000–$5,000/m² (home-renovations-a-complete-guide)
 * Kitchen/bathroom rates are template defaults — confirm with JRA before launch.
 */
export const pricing: PricingConfig = {
  rangeSpread: 0.12, // +/- spread used for the low-high band
  roundTo: 1000, // round low/high to the nearest amount
  projects: {
    customHome: {
      basePerSqm: 5500,
      finish: { Economy: 0.87, Standard: 1, Premium: 1.25 },
    },
    homeExtension: {
      basePerSqm: 4500,
      finish: { Economy: 0.85, Standard: 1, Premium: 1.3 },
    },
    homeRenovation: {
      basePerSqm: 2800,
      finish: { Economy: 0.8, Standard: 1, Premium: 1.4 },
    },
    kitchenRenovation: {
      basePerSqm: 3500,
      finish: { Economy: 0.85, Standard: 1, Premium: 1.3 },
    },
    bathroomRenovation: {
      basePerSqm: 3000,
      finish: { Economy: 0.85, Standard: 1, Premium: 1.3 },
    },
  },
};
