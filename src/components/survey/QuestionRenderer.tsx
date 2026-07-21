"use client";

import type { AnswerValue, Question } from "@/lib/types";
import { FieldGroup } from "./steps/FieldGroup";
import { MultiChoice } from "./steps/MultiChoice";
import { SingleChoice } from "./steps/SingleChoice";
import { SizeInput } from "./steps/SizeInput";

interface Props {
  question: Question;
  value: AnswerValue | undefined;
  onChange: (value: AnswerValue) => void;
  onSingleSelect: (value: string) => void;
}

export function QuestionRenderer({
  question,
  value,
  onChange,
  onSingleSelect,
}: Props) {
  switch (question.type) {
    case "single":
      return (
        <SingleChoice
          question={question}
          value={value as string | undefined}
          onSelect={onSingleSelect}
        />
      );
    case "multi":
      return (
        <MultiChoice
          question={question}
          value={(value as string[]) || []}
          onChange={onChange}
        />
      );
    case "size":
      return (
        <SizeInput
          question={question}
          value={value as string | undefined}
          onChange={onChange}
        />
      );
    case "fieldGroup":
      return (
        <FieldGroup
          question={question}
          value={(value as Record<string, string>) || {}}
          onChange={onChange}
        />
      );
    default:
      return null;
  }
}
