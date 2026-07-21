import type { ProjectType } from "./types";

export const projectOrder: ProjectType[] = [
  "customHome",
  "homeExtension",
  "homeRenovation",
  "kitchenRenovation",
  "bathroomRenovation",
];

export const projectLabels: Record<ProjectType, string> = {
  customHome: "Custom Home",
  homeExtension: "Home Extension",
  homeRenovation: "Home Renovation",
  kitchenRenovation: "Kitchen Renovation",
  bathroomRenovation: "Bathroom Renovation",
};
