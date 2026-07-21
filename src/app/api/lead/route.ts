import { NextRequest, NextResponse } from "next/server";
import { computeEstimate, formatCurrency } from "@/lib/estimate";
import { createContactNote, getGhlConfig, upsertContact } from "@/lib/ghlClient";
import { buildGhlPayload } from "@/lib/ghlPayload";
import { getSurvey } from "@/lib/surveys";
import type { Answers, EstimateResult, ProjectType } from "@/lib/types";

export const runtime = "edge";

interface LeadBody {
  projectType?: ProjectType;
  answers?: Answers;
  attribution?: Record<string, string | undefined>;
}

/** Build the timeline note logging the submission + traffic source. */
function buildNote(
  surveyLabel: string,
  result: EstimateResult,
  attribution: Record<string, string | undefined>
): string {
  const estimate =
    result.basis === "unavailable"
      ? "Pending consult"
      : `${formatCurrency(result.low)} - ${formatCurrency(result.high)}`;

  const lines = [
    `📋 Estimate Survey Submitted — ${surveyLabel}`,
    `Estimate: ${estimate}`,
  ];
  if (attribution.surveyPage)    lines.push(`Survey page: ${attribution.surveyPage}`);
  if (attribution.sessionSource) lines.push(`Traffic source: ${attribution.sessionSource}`);
  if (attribution.utmSource)     lines.push(`UTM source: ${attribution.utmSource}`);
  if (attribution.utmCampaign)   lines.push(`UTM campaign: ${attribution.utmCampaign}`);
  if (attribution.utmKeyword)    lines.push(`UTM keyword: ${attribution.utmKeyword}`);
  if (attribution.sourceUrl)     lines.push(`Landing page: ${attribution.sourceUrl}`);
  if (attribution.referrer)      lines.push(`Referrer: ${attribution.referrer}`);
  return lines.join("\n");
}

export async function POST(req: NextRequest) {
  let body: LeadBody;
  try {
    body = (await req.json()) as LeadBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { projectType, answers, attribution = {} } = body;
  if (!projectType || !answers) {
    return NextResponse.json(
      { ok: false, error: "Missing projectType or answers" },
      { status: 400 }
    );
  }

  const survey = getSurvey(projectType);
  if (!survey) {
    return NextResponse.json(
      { ok: false, error: "Unknown projectType" },
      { status: 400 }
    );
  }

  // Always recompute server-side so the stored estimate can't be tampered with.
  const result = computeEstimate(survey, answers);
  const payload = buildGhlPayload(survey, answers, result, attribution);

  const cfg = getGhlConfig();
  if (!cfg) {
    // Allows local development before GHL credentials are configured.
    return NextResponse.json({
      ok: true,
      skipped: true,
      reason: "GHL credentials not configured",
      result,
    });
  }

  try {
    const ghl = await upsertContact(cfg, payload);
    if (!ghl.ok) {
      console.error("[/api/lead] GHL rejected the request:", JSON.stringify(ghl.data));
    }

    // Log a timeline note on the contact — custom-coded surveys don't appear
    // in GHL's native Activity feed, so this records what was submitted and
    // where the lead came from. Best-effort: a note failure never blocks the lead.
    if (ghl.ok) {
      const contactId = (ghl.data as { contact?: { id?: string } })?.contact?.id;
      if (contactId) {
        try {
          const note = await createContactNote(
            cfg,
            contactId,
            buildNote(survey.label, result, attribution)
          );
          if (!note.ok) {
            console.error("[/api/lead] note creation failed with status", note.status);
          }
        } catch (err) {
          console.error("[/api/lead] note creation threw:", err);
        }
      }
    }

    return NextResponse.json(
      { ok: ghl.ok, result, ghl: ghl.data },
      { status: ghl.ok ? 200 : 502 }
    );
  } catch (err) {
    console.error("[/api/lead] fetch to GHL threw:", err);
    return NextResponse.json(
      { ok: false, error: "GHL request failed", detail: String(err), result },
      { status: 502 }
    );
  }
}
