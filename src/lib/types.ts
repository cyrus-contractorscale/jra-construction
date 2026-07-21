export type ProjectType =
  | "customHome"
  | "homeExtension"
  | "homeRenovation"
  | "kitchenRenovation"
  | "bathroomRenovation";

export type QuestionType = "single" | "multi" | "size" | "fieldGroup";

/**
 * Role lets the estimate engine and GHL mapper find the important questions
 * generically, regardless of their position in a given survey.
 */
export type QuestionRole = "finishLevel" | "size" | "budget";

export interface Option {
  label: string;
  value: string;
}

export interface GuideItem {
  label: string;
  value: string;
}

export interface FieldDef {
  /** sub-field key within a fieldGroup answer object */
  id: string;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "number";
  required?: boolean;
  /** Maps this sub-field to a GHL standard or custom field key. */
  ghlFieldKey?: string;
  /** layout width hint for the field grid */
  half?: boolean;
  /** Pre-populated value shown when the field is first rendered */
  defaultValue?: string;
}

export interface Question {
  /** answer key within Answers */
  id: string;
  type: QuestionType;
  title: string;
  subText?: string;
  required?: boolean;
  role?: QuestionRole;
  /** Maps a single/multi/size answer to a GHL field key. */
  ghlFieldKey?: string;
  options?: Option[];
  guide?: GuideItem[];
  unit?: string;
  fields?: FieldDef[];
}

export interface Survey {
  id: ProjectType;
  label: string;
  description: string;
  questions: Question[];
}

export type AnswerValue = string | string[] | Record<string, string>;
export type Answers = Record<string, AnswerValue>;

export type EstimateBasis = "calculated" | "budget" | "unavailable";

export interface EstimateResult {
  projectType: ProjectType;
  projectLabel: string;
  low: number;
  high: number;
  currency: string;
  basis: EstimateBasis;
}
