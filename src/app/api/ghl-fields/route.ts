import { NextResponse } from "next/server";
import { getCustomFields, getGhlConfig } from "@/lib/ghlClient";

/**
 * DEV HELPER: lists the GHL location's custom fields so you can copy the ids
 * into lib/ghlFieldMap.ts. Returns a trimmed { id, name, fieldKey } list.
 */
export async function GET() {
  const cfg = getGhlConfig();
  if (!cfg) {
    return NextResponse.json(
      { ok: false, error: "GHL credentials not configured" },
      { status: 400 }
    );
  }

  const res = await getCustomFields(cfg);
  if (!res.ok) {
    return NextResponse.json(
      { ok: false, status: res.status, data: res.data },
      { status: 502 }
    );
  }

  const raw = res.data as { customFields?: Array<Record<string, unknown>> };
  const fields = (raw.customFields ?? []).map((f) => ({
    id: f.id,
    name: f.name,
    fieldKey: f.fieldKey,
    dataType: f.dataType,
  }));

  return NextResponse.json({ ok: true, count: fields.length, fields });
}
