"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { captureAttribution, getAttribution } from "@/lib/attribution";
import { computeEstimate } from "@/lib/estimate";
import { saveState } from "@/lib/state";
import { getSurvey } from "@/lib/surveys";
import type { AnswerValue, Answers, ProjectType } from "@/lib/types";
import { validateQuestion } from "@/lib/validate";
import { QuestionRenderer } from "./QuestionRenderer";

interface Props {
  projectType: ProjectType;
  backHref?: string;
}

export function SurveyFlow({ projectType, backHref = "/estimate" }: Props) {
  const router = useRouter();
  const survey = getSurvey(projectType);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>(() => {
    // Pre-seed fieldGroup answers with any defaultValues defined on sub-fields
    const seed: Answers = {};
    for (const q of survey.questions) {
      if (q.type === "fieldGroup" && q.fields) {
        const defaults: Record<string, string> = {};
        for (const f of q.fields) {
          if (f.defaultValue) defaults[f.id] = f.defaultValue;
        }
        if (Object.keys(defaults).length > 0) seed[q.id] = defaults;
      }
    }
    return seed;
  });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  // Persist UTM / referrer attribution (first-touch) as soon as the survey loads
  useEffect(() => {
    captureAttribution();
  }, []);

  const questions = survey.questions;
  const current = questions[index];
  const total = questions.length;
  const isLast = index === total - 1;
  const progress = ((index + 1) / total) * 100;

  const setAnswer = (value: AnswerValue) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
    if (error) setError(null);
  };

  const goNext = (mergedAnswers?: Answers) => {
    const data = mergedAnswers ?? answers;
    const err = validateQuestion(current, data[current.id]);
    if (err) { setError(err); return; }
    setError(null);
    if (isLast) { void submit(data); return; }
    setDirection("forward");
    setIndex((i) => i + 1);
  };

  const goBack = () => {
    setError(null);
    if (index > 0) {
      setDirection("back");
      setIndex((i) => i - 1);
    } else {
      router.push(backHref);
    }
  };

  const handleSingleSelect = (value: string) => {
    const merged = { ...answers, [current.id]: value };
    setAnswers(merged);
    setError(null);
    window.setTimeout(() => {
      if (isLast) { void submit(merged); return; }
      setDirection("forward");
      setIndex((i) => i + 1);
    }, 220);
  };

  const submit = async (finalAnswers: Answers) => {
    setSubmitting(true);
    setError(null);
    const result = computeEstimate(survey, finalAnswers);
    saveState({ projectType: survey.id, answers: finalAnswers, result });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectType: survey.id,
          answers: finalAnswers,
          attribution: getAttribution(),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({})) as { error?: string; ghl?: unknown };
        console.error("[SurveyFlow] lead API error:", data);
        // Still navigate — estimate is saved locally; don't block the user
      }
    } catch (err) {
      console.error("[SurveyFlow] network error submitting lead:", err);
    }
    router.push("/consult");
  };

  /* Dot markers — show max 10 evenly sampled */
  const dotCount = Math.min(total, 12);
  const dotStep = total / dotCount;

  return (
    <div className="animate-fadeIn glass rounded-2xl px-4 pb-10 pt-[35px] sm:px-8 sm:pb-14 lg:px-12">

      {/* ── Header row ── */}
      <div className="flex items-center justify-between gap-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-400">
          {survey.label}
        </p>
        <p className="text-[11px] font-bold tabular-nums text-ink-400">
          {index + 1} / {total}
        </p>
      </div>

      {/* ── Progress bar ── */}
      <ProgressBar value={progress} className="mt-3 mb-5" />

      {/* ── Step dots ── */}
      <div className="mb-8 flex items-center gap-1.5">
        {Array.from({ length: dotCount }, (_, i) => {
          const mappedIndex = Math.round(i * dotStep);
          const isPast = mappedIndex < index;
          const isCurrent = mappedIndex === index;
          return (
            <span
              key={i}
              className={[
                "rounded-full transition-all duration-300",
                isCurrent
                  ? "h-2 w-6 bg-[#293a57]"
                  : isPast
                  ? "h-2 w-2 bg-ink-400"
                  : "h-2 w-2 bg-ink-200",
              ].join(" ")}
            />
          );
        })}
      </div>

      {/* ── Question ── */}
      <div key={`${index}-${direction}`} className="animate-fadeIn">

        {/* Question number tag */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white/60 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink-500">
          <span className="h-1.5 w-1.5 rounded-full bg-[#293a57] inline-block" />
          Question {index + 1}
        </span>

        <h2 className="mt-3 font-heading text-2xl font-extrabold leading-snug text-ink-900 sm:text-[28px]">
          {current.title}
        </h2>

        {current.subText && (
          <p className="mt-1.5 text-sm text-ink-500">{current.subText}</p>
        )}

        <div className="mt-5">
          <QuestionRenderer
            question={current}
            value={answers[current.id]}
            onChange={setAnswer}
            onSingleSelect={handleSingleSelect}
          />
        </div>

        {error && (
          <p className="mt-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" strokeLinecap="round" />
            </svg>
            {error}
          </p>
        )}
      </div>

      {/* ── Navigation ── */}
      <div className="mt-10 flex items-center justify-between gap-4 border-t border-ink-100 pt-6">
        <Button variant="ghost" size="md" onClick={goBack} disabled={submitting}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back
        </Button>

        <p className="hidden text-xs text-ink-400 sm:block">
          {current.type === "single"
            ? "Tap an option to continue"
            : "Select all that apply, then continue"}
        </p>

        {current.type !== "single" && (
          <Button size="lg" onClick={() => goNext()} disabled={submitting} className="min-w-[160px]">
            {submitting ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Calculating…
              </span>
            ) : isLast ? "Get My Estimate →" : "Continue →"}
          </Button>
        )}
      </div>
    </div>
  );
}
