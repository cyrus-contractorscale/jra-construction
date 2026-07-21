import type { ProjectType, Survey } from "../types";
import { customHome } from "./customHome";
import { homeExtension } from "./homeExtension";
import { homeRenovation } from "./homeRenovation";
import { kitchenRenovation } from "./kitchenRenovation";
import { bathroomRenovation } from "./bathroomRenovation";

export const surveys: Record<ProjectType, Survey> = {
  customHome,
  homeExtension,
  homeRenovation,
  kitchenRenovation,
  bathroomRenovation,
};

/** Display order on the project type selection screen. */
export const surveyOrder: ProjectType[] = [
  "customHome",
  "homeExtension",
  "homeRenovation",
  "kitchenRenovation",
  "bathroomRenovation",
];

export function getSurvey(type: ProjectType): Survey {
  return surveys[type];
}

export const surveyList: Survey[] = surveyOrder.map((id) => surveys[id]);
