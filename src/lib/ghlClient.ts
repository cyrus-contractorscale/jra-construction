const BASE_URL = "https://services.leadconnectorhq.com";

export interface GhlCustomField {
  id: string;
  value: string;
}

export interface GhlContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address1?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  tags?: string[];
  source?: string;
  customFields?: GhlCustomField[];
}

export interface GhlConfig {
  token: string;
  locationId: string;
  version: string;
}

export function getGhlConfig(): GhlConfig | null {
  const token = process.env.GHL_PIT_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) return null;
  return {
    token,
    locationId,
    version: process.env.GHL_API_VERSION || "2021-07-28",
  };
}

function headers(cfg: GhlConfig): HeadersInit {
  return {
    Authorization: `Bearer ${cfg.token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
    Version: cfg.version,
  };
}

/** Upsert a contact (create if new, update if existing) with custom fields. */
export async function upsertContact(
  cfg: GhlConfig,
  payload: GhlContactPayload
): Promise<{ ok: boolean; status: number; data: unknown }> {
  async function attempt(body: GhlContactPayload) {
    const res = await fetch(`${BASE_URL}/contacts/upsert`, {
      method: "POST",
      headers: headers(cfg),
      body: JSON.stringify({ ...body, locationId: cfg.locationId }),
    });
    let data: unknown = null;
    try { data = await res.json(); } catch { data = null; }
    return { ok: res.ok, status: res.status, data };
  }

  const first = await attempt(payload);

  // GHL rejects local-format phone numbers with "Invalid country calling code".
  // Retry once without the phone field so the contact is still created.
  if (
    !first.ok &&
    first.status === 400 &&
    typeof (first.data as Record<string, unknown>)?.message === "string" &&
    ((first.data as Record<string, unknown>).message as string)
      .toLowerCase()
      .includes("country calling code")
  ) {
    console.warn(
      "[ghlClient] Phone rejected by GHL — retrying without phone field.",
      "Original phone:", payload.phone
    );
    const { phone: _dropped, ...withoutPhone } = payload;
    return attempt(withoutPhone);
  }

  return first;
}

/**
 * Create a note on a contact's timeline. Used to log estimate submissions
 * (survey page, estimate range, traffic source) since custom-coded surveys
 * don't appear in GHL's native Activity feed.
 */
export async function createContactNote(
  cfg: GhlConfig,
  contactId: string,
  body: string
): Promise<{ ok: boolean; status: number }> {
  const res = await fetch(`${BASE_URL}/contacts/${contactId}/notes`, {
    method: "POST",
    headers: headers(cfg),
    body: JSON.stringify({ body }),
  });
  return { ok: res.ok, status: res.status };
}

/** Fetch the location's custom fields (used by the dev helper route). */
export async function getCustomFields(
  cfg: GhlConfig
): Promise<{ ok: boolean; status: number; data: unknown }> {
  const res = await fetch(
    `${BASE_URL}/locations/${cfg.locationId}/customFields`,
    { method: "GET", headers: headers(cfg) }
  );
  let data: unknown = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }
  return { ok: res.ok, status: res.status, data };
}
