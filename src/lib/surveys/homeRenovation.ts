import type { Survey } from "../types";
import {
  addressQuestion,
  budgetQuestion,
  contactQuestion,
  designerQuestion,
  finishQuestion,
  financingQuestion,
  livingDuringWorksQuestion,
  opt,
  ownerQuestion,
  plansQuestion,
  sizeQuestion,
  timelineQuestion,
  yesNo,
} from "./shared";

export const homeRenovation: Survey = {
  id: "homeRenovation",
  label: "Home Renovation",
  description: "Update and modernize parts of your existing home.",
  questions: [
    {
      id: "renovationFocus",
      type: "single",
      title: "What is the primary focus of your renovation?",
      subText: "Tell us which areas of your home you are planning to renovate.",
      ghlFieldKey: "renovationFocus",
      required: true,
      options: opt([
        "Kitchen or Bathroom",
        "Addition or Extension",
        "Open Plan / Living Areas",
        "Bedroom / Private Spaces",
        "Whole House Renovation",
      ]),
    },
    {
      id: "wallsChange",
      type: "single",
      title: "Will your renovation involve adding or removing walls?",
      subText: "This helps us understand if structural work may be required.",
      ghlFieldKey: "wallsChange",
      required: true,
      options: yesNo,
    },
    {
      id: "windowsDoors",
      type: "single",
      title: "Will you be adding or replacing windows or exterior doors?",
      subText:
        "This helps us identify external building modifications and approval requirements.",
      ghlFieldKey: "windowsDoors",
      required: true,
      options: yesNo,
    },
    sizeQuestion({
      title: "What is the approximate size of the area being renovated?",
      subText: "Provide a rough estimate of the renovation area in square metres.",
      guide: [
        { label: "Kitchen or Bathroom", value: "15 sqm" },
        { label: "Kitchen & Living Area", value: "35 sqm" },
        { label: "Open Concept Renovation", value: "40 sqm" },
        { label: "Multiple Rooms", value: "50 sqm" },
        { label: "Full Floor Renovation", value: "100 sqm" },
      ],
    }),
    finishQuestion,
    livingDuringWorksQuestion,
    ownerQuestion,
    timelineQuestion,
    {
      ...designerQuestion,
      subText: "Let us know if your design and planning process has already begun.",
    },
    {
      ...plansQuestion,
      title: "Do you already have completed renovation plans?",
    },
    financingQuestion,
    budgetQuestion([
      "Under $50,000",
      "$50,000 - $100,000",
      "$100,000 - $200,000",
      "$200,000 - $400,000",
      "$400,000+",
    ]),
    contactQuestion,
    addressQuestion(
      "Where is your property located?",
      "Provide the address of the property being renovated."
    ),
  ],
};
