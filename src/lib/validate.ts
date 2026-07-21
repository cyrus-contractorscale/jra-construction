import type { AnswerValue, Question } from "./types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns null if valid, otherwise an error message. */
export function validateQuestion(
  question: Question,
  value: AnswerValue | undefined
): string | null {
  const required = question.required ?? false;

  switch (question.type) {
    case "single": {
      const v = (value as string) || "";
      if (required && !v) return "Please select an option to continue.";
      return null;
    }
    case "multi": {
      const v = (value as string[]) || [];
      if (required && v.length === 0)
        return "Please select at least one option.";
      return null;
    }
    case "size": {
      const v = (value as string) || "";
      const n = parseFloat(v.replace(/[^\d.]/g, ""));
      if (required && (!v || Number.isNaN(n) || n <= 0))
        return "Please enter a valid size.";
      return null;
    }
    case "fieldGroup": {
      const group = (value as Record<string, string>) || {};
      for (const f of question.fields ?? []) {
        const fv = (group[f.id] ?? "").trim();
        if (f.required && !fv) return `Please enter your ${f.label.toLowerCase()}.`;
        if (f.type === "email" && fv && !EMAIL_RE.test(fv))
          return "Please enter a valid email address.";
      }
      return null;
    }
    default:
      return null;
  }
}
