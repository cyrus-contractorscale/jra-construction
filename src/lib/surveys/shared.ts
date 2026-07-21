import type { Option, Question } from "../types";

export const opt = (values: string[]): Option[] =>
  values.map((v) => ({ label: v, value: v }));

export const yesNo: Option[] = opt(["Yes", "No"]);

export const finishQuestion: Question = {
  id: "finishLevel",
  type: "single",
  role: "finishLevel",
  title: "What level of finish would you like?",
  subText: "Select the quality of finishes and materials you prefer.",
  ghlFieldKey: "finishLevel",
  required: true,
  options: opt(["Economy", "Standard", "Premium"]),
};

export const timelineQuestion: Question = {
  id: "timeline",
  type: "single",
  title: "When would you like to get started?",
  subText: "Select your preferred project timeline.",
  ghlFieldKey: "timeline",
  required: true,
  options: opt([
    "As Soon As Possible",
    "Within 3-6 Months",
    "Within 6-12 Months",
    "Just Gathering Information",
  ]),
};

export const ownerQuestion: Question = {
  id: "ownerAuthorized",
  type: "single",
  title: "Are you the property owner or authorized to make changes?",
  subText: "We require authorization before discussing project details.",
  ghlFieldKey: "ownerAuthorized",
  required: true,
  options: yesNo,
};

export const designerQuestion: Question = {
  id: "designerSelected",
  type: "single",
  title: "Have you selected a designer or architect?",
  subText: "Let us know if your design process has already started.",
  ghlFieldKey: "designerSelected",
  required: true,
  options: yesNo,
};

export const plansQuestion: Question = {
  id: "completedPlans",
  type: "single",
  title: "Do you already have completed plans?",
  subText: "Existing plans help us provide a more accurate estimate.",
  ghlFieldKey: "completedPlans",
  required: true,
  options: yesNo,
};

export const financingQuestion: Question = {
  id: "financing",
  type: "single",
  title: "Do you have financing in place?",
  subText: "Understanding your readiness helps us guide the next steps.",
  ghlFieldKey: "financing",
  required: true,
  options: opt(["Yes", "Not Yet"]),
};

export const livingDuringWorksQuestion: Question = {
  id: "livingDuringWorks",
  type: "single",
  title: "Will you be living in the home during the works?",
  subText: "This helps us plan staging, access, and timelines.",
  ghlFieldKey: "livingDuringWorks",
  required: true,
  options: yesNo,
};

export const budgetQuestion = (values: string[]): Question => ({
  id: "budget",
  type: "single",
  role: "budget",
  title: "What is your estimated budget?",
  subText: "Choose the budget range closest to your planned investment.",
  ghlFieldKey: "budget",
  required: true,
  options: opt(values),
});

export const contactQuestion: Question = {
  id: "contact",
  type: "fieldGroup",
  title: "Please share your contact details.",
  subText: "We'll send your estimate and project information.",
  required: true,
  fields: [
    { id: "firstName", label: "First Name", ghlFieldKey: "firstName", required: true, half: true },
    { id: "lastName", label: "Last Name", ghlFieldKey: "lastName", required: true, half: true },
    { id: "email", label: "Email Address", type: "email", ghlFieldKey: "email", required: true },
    { id: "phone", label: "Phone Number", type: "tel", ghlFieldKey: "phone", required: true },
  ],
};

export const addressQuestion = (
  title = "Where is your property located?",
  subText = "Provide the address of the property."
): Question => ({
  id: "propertyAddress",
  type: "fieldGroup",
  title,
  subText,
  required: true,
  fields: [
    { id: "address1", label: "Address", ghlFieldKey: "address1", required: true },
    { id: "city", label: "City", ghlFieldKey: "city", required: true, half: true },
    { id: "state", label: "State / Region", ghlFieldKey: "state", half: true },
    { id: "country", label: "Country", ghlFieldKey: "country", half: true, defaultValue: "New Zealand" },
    { id: "postalCode", label: "Postal Code", ghlFieldKey: "postalCode", half: true },
  ],
});

export const sizeQuestion = (
  config: Pick<Question, "title" | "subText" | "guide"> & { unit?: string }
): Question => ({
  id: "size",
  type: "size",
  role: "size",
  ghlFieldKey: "size",
  required: true,
  unit: config.unit ?? "sqm",
  title: config.title,
  subText: config.subText,
  guide: config.guide,
});
