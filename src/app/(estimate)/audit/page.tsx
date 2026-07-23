import type { Metadata } from "next";
import Link from "next/link";
import { AdminNav } from "@/components/ui/AdminNav";

export const metadata: Metadata = {
  title: "Setup & Audit",
  robots: { index: false, follow: false },
};
import { CollapsibleSection } from "@/components/admin/CollapsibleSection";
import { AuditTabs } from "@/components/admin/AuditTabs";
import { ClientInfoEditor } from "@/components/admin/ClientInfoEditor";
import type { AuditTab } from "@/components/admin/AuditTabs";
import { ghlFieldMap, ghlFieldKeys } from "@/lib/ghlFieldMap";
import { getGhlConfig } from "@/lib/ghlClient";

/* ─── Field label map ────────────────────────────────────────────── */
const fieldLabels: Record<string, string> = {
  size:               "Project Size (sqm)",
  finishLevel:        "Finish Level",
  budget:             "Budget Range",
  timeline:           "Timeline / Start Date",
  ownerAuthorized:    "Owner / Decision Maker",
  designerSelected:   "Designer / Architect Selected",
  completedPlans:     "Completed Plans",
  financing:          "Financing in Place",
  livingDuringWorks:  "Living During Works",
  homeType:           "Type of Home",
  landStatus:         "Land Status",
  bedrooms:           "Number of Bedrooms",
  bathrooms:          "Number of Bathrooms",
  livingAreas:        "Living / Dining Areas",
  carSpaces:          "Car Spaces",
  renovationFocus:    "Renovation Focus",
  wallsChange:        "Structural Wall Changes",
  windowsDoors:       "Windows / Exterior Doors",
  extensionType:      "Extension Type",
  spaceUse:           "Extension Space Use",
  bathroomIncluded:   "Bathroom Included in Extension",
  kitchenIncluded:    "Kitchen Included in Extension",
  kitchenScope:       "Kitchen Scope",
  kitchenLayout:      "Kitchen Layout",
  kitchenIsland:      "Kitchen Island",
  areasToUpdate:      "Areas to Update",
  countertopMaterial: "Countertop Material",
  splashbackMaterial: "Splashback Material",
  flooringMaterial:   "Flooring Material",
  servicesRelocate:   "Services to Relocate",
  bathroomType:       "Bathroom Type",
  renovationReason:   "Renovation Reason",
  bathroomCount:      "Bathrooms Being Renovated",
  improvements:       "Bathroom Improvements",
  layoutPreference:   "Layout Preference",
  manageDuringReno:   "Plan During Renovation",
  professionalDesigns:"Has Professional Designs",
  projectType:        "Project Type",
  estimateLow:        "Estimate – Low",
  estimateHigh:       "Estimate – High",
  estimateRange:      "Estimate Range",
  utmSource:          "UTM Source",
  utmCampaign:        "UTM Campaign",
  utmKeyword:         "UTM Keyword / Term",
  utmContent:         "UTM Content",
  utmMatchType:       "UTM Match Type",
  gclid:              "Google Click ID (GCLID)",
  fbClickId:          "FB Click ID",
  sessionSource:      "Session Source",
  sourceUrl:          "Landing Page URL",
};

const standardFields = [
  { key: "firstName",  label: "First Name"    },
  { key: "lastName",   label: "Last Name"     },
  { key: "email",      label: "Email Address" },
  { key: "phone",      label: "Phone Number"  },
  { key: "address1",   label: "Address"       },
  { key: "city",       label: "City"          },
  { key: "state",      label: "State / Region"},
  { key: "country",    label: "Country"       },
  { key: "postalCode", label: "Postal Code"   },
];

/* ─── Shared fields — appear in ALL surveys ──────────────────────────── */
const sharedKeys = [
  "size", "finishLevel", "budget", "timeline",
  "ownerAuthorized", "designerSelected", "completedPlans", "financing",
];

/* ─── Computed / meta — auto-set by the app, not a survey question ─── */
const computedKeys = ["projectType","estimateLow","estimateHigh","estimateRange"];

const computedNotes: Record<string, string> = {
  projectType:   "Auto-set from the survey selected (e.g. 'Custom Home'). Not a user question.",
  estimateLow:   "Calculated server-side from size × finish level pricing.",
  estimateHigh:  "Calculated server-side from size × finish level pricing.",
  estimateRange: "Formatted range string, e.g. '$440,000 – $560,000'.",
};

/* ─── Attribution — auto-captured from URL params & referrer ─────────── */
const attributionKeys = [
  "utmSource","utmCampaign","utmKeyword","utmContent","utmMatchType",
  "gclid","fbClickId","sessionSource","sourceUrl",
];

const attributionNotes: Record<string, string> = {
  utmSource:     "From ?utm_source= on the first visit (first-touch).",
  utmCampaign:   "From ?utm_campaign=.",
  utmKeyword:    "From ?utm_term= or ?utm_keyword=.",
  utmContent:    "From ?utm_content=.",
  utmMatchType:  "From ?utm_matchtype= (Google Ads).",
  gclid:         "Google Ads click ID, from ?gclid=.",
  fbClickId:     "Meta ads click ID, from ?fbclid=.",
  sessionSource: "Derived: Campaign / Organic / Referral / Direct traffic.",
  sourceUrl:     "Full URL of the first page the visitor landed on.",
};

/* ─── Service-specific keys only (shared removed) ────────────────────── */
const servicesDef: {
  id: string;
  label: string;
  accent: string;
  border: string;
  header: string;
  keys: string[];
  extraShared?: string[];   // shared-style fields used only by this service
}[] = [
  {
    id: "customHome",
    label: "Custom Home",
    accent: "bg-violet-500", border: "border-l-violet-500", header: "bg-violet-50",
    keys: ["homeType","landStatus","bedrooms","bathrooms","livingAreas","carSpaces"],
  },
  {
    id: "homeExtension",
    label: "Home Extension",
    accent: "bg-blue-500", border: "border-l-blue-500", header: "bg-blue-50",
    keys: ["extensionType","spaceUse","bathroomIncluded","kitchenIncluded"],
    extraShared: ["livingDuringWorks"],
  },
  {
    id: "homeRenovation",
    label: "Home Renovation",
    accent: "bg-amber-500", border: "border-l-amber-500", header: "bg-amber-50",
    keys: ["renovationFocus","wallsChange","windowsDoors"],
    extraShared: ["livingDuringWorks"],
  },
  {
    id: "kitchenRenovation",
    label: "Kitchen Renovation",
    accent: "bg-orange-500", border: "border-l-orange-500", header: "bg-orange-50",
    keys: [
      "kitchenScope","kitchenLayout","kitchenIsland","areasToUpdate",
      "countertopMaterial","splashbackMaterial","flooringMaterial","servicesRelocate",
    ],
  },
  {
    id: "bathroomRenovation",
    label: "Bathroom Renovation",
    accent: "bg-teal-500", border: "border-l-teal-500", header: "bg-teal-50",
    keys: [
      "bathroomType","renovationReason","bathroomCount","improvements",
      "layoutPreference","manageDuringReno","professionalDesigns",
    ],
  },
];

/* ─── UI helpers ─────────────────────────────────────────────────── */
function Pill({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span className={[
      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-bold whitespace-nowrap",
      ok ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700",
    ].join(" ")}>
      <span className={`h-1.5 w-1.5 rounded-full ${ok ? "bg-emerald-500" : "bg-amber-400"}`} />
      {label}
    </span>
  );
}

function StatusBadge({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">✓</span>
  ) : (
    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 text-xs font-bold">!</span>
  );
}

function FieldRow({ fieldKey }: { fieldKey: string }) {
  const id     = ghlFieldMap[fieldKey] ?? "";
  const mapped = Boolean(id.trim());
  return (
    <tr className={`border-t border-ink-100 transition-colors hover:bg-ink-50/60 ${!mapped ? "bg-amber-50/30" : ""}`}>
      <td className="px-4 py-3">
        <p className="text-sm font-medium text-ink-800">{fieldLabels[fieldKey] ?? fieldKey}</p>
      </td>
      <td className="px-4 py-3 font-mono text-xs text-ink-500 hidden sm:table-cell">{fieldKey}</td>
      <td className="px-4 py-3 font-mono text-xs text-ink-400 hidden md:table-cell">
        {mapped ? <span className="text-emerald-700">{id}</span> : <span className="text-amber-500">—  needs ID</span>}
      </td>
      <td className="px-4 py-3">
        <Pill ok={mapped} label={mapped ? "Mapped" : "Needs ID"} />
      </td>
    </tr>
  );
}

/* ─── Credential row ─────────────────────────────────────────────── */
function CredRow({ label, envKey, value, ok }: { label: string; envKey: string; value: string; ok: boolean }) {
  return (
    <div className={`flex items-start gap-3 rounded-xl border px-4 py-3 ${
      ok ? "border-emerald-100 bg-emerald-50/40" : "border-amber-200 bg-amber-50"
    }`}>
      <StatusBadge ok={ok} />
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-bold uppercase tracking-widest text-ink-400">{label}</p>
        <p className="mt-0.5 break-all font-mono text-sm font-semibold text-ink-800">{value}</p>
        <p className="mt-0.5 text-[11px] text-ink-400">{envKey}</p>
      </div>
      <Pill ok={ok} label={ok ? "Set" : "Missing"} />
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────── */
export default function AuditPage() {
  getGhlConfig();

  const pit         = process.env.GHL_PIT_TOKEN;
  const locationId  = process.env.GHL_LOCATION_ID;
  const apiVersion  = process.env.GHL_API_VERSION || "2021-07-28";
  const bookingUrl  = process.env.NEXT_PUBLIC_BOOKING_URL;
  const trackingSrc = process.env.NEXT_PUBLIC_GHL_TRACKING_SRC;
  const trackingId  = process.env.NEXT_PUBLIC_GHL_TRACKING_ID;

  const allCoreSet  = Boolean(pit && locationId);
  const trackingSet = Boolean(trackingSrc && trackingId);

  const allKeys     = Object.keys(ghlFieldMap);
  const mappedCount = allKeys.filter((k) => ghlFieldMap[k]?.trim()).length;
  const totalCount  = allKeys.length;
  const allMapped   = mappedCount === totalCount;

  const overallOk   = allCoreSet && trackingSet && allMapped;

  return (
    <>
      <AdminNav active="audit" />

      <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 lg:px-14 lg:py-12">

        {/* ── Client Information ── */}
        <div className="mb-10">
          <CollapsibleSection
            title={
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-black text-white">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <div>
                  <h2 className="text-base font-bold text-ink-900">Client Information</h2>
                  <p className="text-[11px] text-ink-400">Updates all pages — consult, sidebar, footers, about section</p>
                </div>
              </div>
            }
            defaultOpen={true}
          >
            <div className="px-6 py-6 sm:px-8 sm:py-8">
              <ClientInfoEditor />
            </div>
          </CollapsibleSection>
        </div>

        {/* ── Page header ── */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-ink-900 sm:text-3xl">Setup & Audit</h1>
            <p className="mt-1 text-sm text-ink-500">
              GoHighLevel integration status. Add missing values to{" "}
              <code className="rounded bg-ink-100 px-1.5 py-0.5">.env.local</code>{" "}
              and{" "}
              <code className="rounded bg-ink-100 px-1.5 py-0.5">lib/ghlFieldMap.ts</code>.
            </p>
          </div>
          <Link
            href="/api/ghl-fields"
            target="_blank"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink-700 shadow-sm transition-colors hover:bg-ink-50"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
            /api/ghl-fields
          </Link>
        </div>

        {/* ── Overall banner ── */}
        <div className={`mb-8 flex items-center gap-4 rounded-2xl border-l-4 px-5 py-4 ${
          overallOk
            ? "border-l-emerald-500 bg-emerald-50 border border-emerald-200"
            : "border-l-amber-500 bg-amber-50 border border-amber-200"
        }`}>
          <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-white text-lg ${
            overallOk ? "bg-emerald-500" : "bg-amber-400"
          }`}>
            {overallOk ? "✓" : "!"}
          </div>
          <div>
            <p className={`font-bold ${overallOk ? "text-emerald-800" : "text-amber-800"}`}>
              {overallOk ? "All integrations configured and ready" : "Action required — some items need attention"}
            </p>
            <p className={`text-sm ${overallOk ? "text-emerald-700" : "text-amber-700"}`}>
              {[
                !pit && "API token missing",
                !locationId && "Location ID missing",
                !trackingSet && "Tracking not configured",
                !allMapped && `${totalCount - mappedCount} field(s) need GHL IDs`,
              ].filter(Boolean).join(" · ") || "GHL API, tracking, and field mapping are all set."}
            </p>
          </div>
        </div>

        {/* ── Status cards ── */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "API Token",         ok: Boolean(pit),        value: maskSecret(pit),  sub: "GHL_PIT_TOKEN" },
            { label: "Location ID",       ok: Boolean(locationId), value: locationId || "—", sub: "GHL_LOCATION_ID" },
            { label: "Ext. Tracking",     ok: trackingSet,         value: trackingSet ? "Active" : "Missing", sub: "data-tracking-id" },
            { label: "Fields Mapped",     ok: allMapped,           value: `${mappedCount} / ${totalCount}`, sub: "custom fields" },
          ].map((c) => (
            <div key={c.label} className={`rounded-2xl border p-4 ${
              c.ok ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"
            }`}>
              <div className="flex items-center justify-between gap-2">
                <p className={`text-xs font-bold uppercase tracking-wider ${c.ok ? "text-emerald-700" : "text-amber-700"}`}>{c.label}</p>
                <span className={`text-lg ${c.ok ? "text-emerald-500" : "text-amber-500"}`}>{c.ok ? "✓" : "!"}</span>
              </div>
              <p className="mt-2 break-all font-mono text-base font-extrabold text-ink-900">{c.value}</p>
              <p className="mt-0.5 text-[10px] text-ink-400">{c.sub}</p>
            </div>
          ))}
        </div>

        {/* ── Credentials + Tracking ── */}
        <div className="mb-8 grid gap-6 lg:grid-cols-2">

          {/* GHL API Credentials */}
          <CollapsibleSection
            title={<h2 className="text-base font-bold text-ink-900">GHL API Credentials</h2>}
            badge={<Pill ok={allCoreSet} label={allCoreSet ? "Ready" : "Incomplete"} />}
          >
            <div className="space-y-3 p-6 sm:p-8">
              <CredRow label="Private Token"  envKey="GHL_PIT_TOKEN"             value={maskSecret(pit)}         ok={Boolean(pit)} />
              <CredRow label="Location ID"    envKey="GHL_LOCATION_ID"           value={locationId || "Missing"} ok={Boolean(locationId)} />
              <CredRow label="API Version"    envKey="GHL_API_VERSION"           value={apiVersion}              ok />
              <CredRow label="Booking URL"    envKey="NEXT_PUBLIC_BOOKING_URL"   value={bookingUrl || "Not set"} ok={Boolean(bookingUrl)} />
            </div>
          </CollapsibleSection>

          {/* External Tracking */}
          <CollapsibleSection
            title={<h2 className="text-base font-bold text-ink-900">External Tracking</h2>}
            badge={<Pill ok={trackingSet} label={trackingSet ? "Active" : "Missing"} />}
          >
            <div className="space-y-3 p-6 sm:p-8">
              <CredRow label="Script Source" envKey="NEXT_PUBLIC_GHL_TRACKING_SRC" value={trackingSrc || "Missing"} ok={Boolean(trackingSrc)} />
              <CredRow label="Tracking ID"   envKey="NEXT_PUBLIC_GHL_TRACKING_ID"  value={trackingId  || "Missing"} ok={Boolean(trackingId)}  />

              {trackingSet && (
                <div className="overflow-x-auto rounded-xl bg-ink-950 px-4 py-3">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-ink-500">Rendered script</p>
                  <code className="whitespace-pre text-xs text-emerald-400">{`<script\n  src="${trackingSrc}"\n  data-tracking-id="${trackingId}"\n/>`}</code>
                </div>
              )}

              {/* Setup checklist */}
              <div className="rounded-xl border border-ink-200 bg-ink-50/60 p-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-ink-500">Setup checklist</p>
                <ol className="space-y-2">
                  {[
                    { done: Boolean(pit),        text: "GHL_PIT_TOKEN set" },
                    { done: Boolean(locationId), text: "GHL_LOCATION_ID set" },
                    { done: trackingSet,         text: "External tracking configured" },
                    { done: mappedCount > 0,     text: "At least one custom field mapped" },
                    { done: Boolean(bookingUrl), text: "Booking URL configured" },
                  ].map((s, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <StatusBadge ok={s.done} />
                      <span className={s.done ? "text-ink-500 line-through" : "text-ink-800 font-medium"}>{s.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* ── Lead Activity Logging ── */}
        <div className="mb-8">
          <CollapsibleSection
            title={
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-sky-600 text-white">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </span>
                <div>
                  <h2 className="text-base font-bold text-ink-900">Lead Activity Logging</h2>
                  <p className="text-[11px] text-ink-400">Timeline notes + traffic attribution — records where each lead came from</p>
                </div>
              </div>
            }
            badge={<Pill ok label="Active" />}
            defaultOpen={false}
          >
            <div className="space-y-4 p-6 sm:p-8">

              <div className="rounded-xl border border-sky-100 bg-sky-50/50 p-4">
                <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-sky-700">1 · Timeline Note on every submission</p>
                <p className="text-sm text-ink-600 leading-relaxed">
                  When a survey is submitted, the API automatically posts a <strong>note on the contact&apos;s timeline</strong> in GHL.
                  The note records the survey filled in (e.g. Kitchen Renovation), the estimate range, the survey page URL,
                  traffic source, UTM values, landing page, and referrer. Open any contact in GHL → Notes to see it.
                </p>
                <div className="mt-3 overflow-x-auto rounded-lg bg-ink-950 px-4 py-3">
                  <code className="whitespace-pre text-xs text-emerald-400">{`📋 Estimate Survey Submitted — Kitchen Renovation\nEstimate: $28,000 - $42,000\nSurvey page: /e-kitchen\nTraffic source: Campaign: google\nUTM source: google\nUTM campaign: kitchen-reno-akl\nLanding page: https://www.jraconstruction.co.nz/?utm_source=google&...\nReferrer: https://www.google.com/`}</code>
                </div>
              </div>

              <div className="rounded-xl border border-sky-100 bg-sky-50/50 p-4">
                <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-sky-700">2 · UTM / Click-ID capture (first-touch)</p>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Survey pages store <code className="rounded bg-ink-100 px-1 py-0.5 text-xs">utm_source, utm_campaign, utm_term, utm_content, utm_matchtype, gclid, fbclid</code>{" "}
                  plus the referrer and landing page in the visitor&apos;s browser on their first visit. When the lead submits,
                  these are written to the matching GHL custom fields (see the <strong>Attribution / Tracking</strong> section in
                  the Shared &amp; Computed tab below) — so ad campaigns are attributed even though the survey is custom-coded.
                </p>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-amber-700">Note · GHL Activity feed</p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  GHL&apos;s native Activity feed only tracks visitors it has identified (native form submission, email/SMS link click,
                  or chat). Since this funnel creates contacts via API, page-visit activity starts appearing <strong>after the contact
                  first clicks a link back to the site from a GHL email or SMS</strong>. The timeline notes above cover the gap.
                </p>
              </div>

            </div>
          </CollapsibleSection>
        </div>

        {/* ── Standard GHL Fields — collapsible, closed by default ── */}
        <div className="mb-8">
          <CollapsibleSection
            title={<h2 className="text-base font-bold text-ink-900">Standard GHL Fields</h2>}
            badge={
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {standardFields.length} native fields — no custom ID needed
              </span>
            }
            defaultOpen={false}
          >
            <p className="px-6 py-3 text-xs text-ink-500 sm:px-8">
              These map to built-in GHL contact fields and are collected on every survey. No custom field ID is required.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-ink-50">
                  <tr>
                    <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-ink-400">Field</th>
                    <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-ink-400">Internal Key</th>
                    <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-ink-400 hidden md:table-cell">Merge Tag Key</th>
                    <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-ink-400">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {standardFields.map((f) => (
                    <tr key={f.key} className="border-t border-ink-100 hover:bg-ink-50/50">
                      <td className="px-4 py-3 font-medium text-ink-800">{f.label}</td>
                      <td className="px-4 py-3 font-mono text-xs text-ink-500">{f.key}</td>
                      <td className="px-4 py-3 font-mono text-xs text-sky-700 hidden md:table-cell">{ghlFieldKeys[f.key] ?? "—"}</td>
                      <td className="px-4 py-3"><Pill ok label="Native Field" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CollapsibleSection>
        </div>

        {/* ── Custom Field Mapping — tabbed ── */}
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-ink-900">Custom Field Mapping</h2>
            <p className="mt-1 text-sm text-ink-500">
              Shared fields appear in their own tab. Service-specific fields are separated per survey.
              Paste IDs from{" "}
              <Link href="/api/ghl-fields" target="_blank" className="underline underline-offset-2 font-medium">
                /api/ghl-fields
              </Link>{" "}
              into <code className="rounded bg-ink-100 px-1.5 py-0.5">lib/ghlFieldMap.ts</code>.
            </p>
          </div>
          <Pill ok={allMapped} label={`${mappedCount} / ${totalCount} mapped`} />
        </div>

        {/* Build tab data server-side and pass to client component */}
        {(() => {
          function makeField(key: string, note?: string) {
            return {
              key,
              label: fieldLabels[key] ?? key,
              ghlId:  ghlFieldMap[key] ?? "",
              ghlKey: ghlFieldKeys[key] ?? "",
              mapped: Boolean(ghlFieldMap[key]?.trim()),
              note,
            };
          }
          function makeFields(keys: string[], notes?: Record<string, string>) {
            return keys.map((k) => makeField(k, notes?.[k]));
          }

          const tabs: AuditTab[] = [
            // ── Shared + Computed (merged) ──
            {
              id: "shared",
              label: "Shared & Computed",
              accent: "bg-ink-500",
              borderColor: "border-l-ink-400",
              headerBg: "bg-ink-50",
              sections: [
                {
                  // no sectionLabel → no divider before the first block
                  fields: makeFields(sharedKeys),
                },
                {
                  sectionLabel: "Computed / Meta — auto-set by the app",
                  fields: makeFields(computedKeys, computedNotes),
                },
                {
                  sectionLabel: "Attribution / Tracking — auto-captured from URL & referrer",
                  fields: makeFields(attributionKeys, attributionNotes),
                },
              ],
            },
            // ── Per-service tabs ──
            ...servicesDef.map((svc) => {
              const sections = [];
              if (svc.extraShared?.length) {
                sections.push({
                  sectionLabel: "Also uses shared field",
                  fields: svc.extraShared.map((k) => makeField(k)),
                });
              }
              sections.push({
                sectionLabel: svc.extraShared?.length ? "Service-specific fields" : undefined,
                fields: makeFields(svc.keys),
              });
              return {
                id: svc.id,
                label: svc.label,
                accent: svc.accent,
                borderColor: svc.border,
                headerBg: svc.header,
                sections,
              };
            }),
          ];

          const allF  = tabs.flatMap((t) => t.sections.flatMap((s) => s.fields));
          const tabTotalFields = allF.length;
          const tabTotalMapped = allF.filter((f) => f.mapped).length;

          return (
            <AuditTabs
              tabs={tabs}
              totalMapped={tabTotalMapped}
              totalFields={tabTotalFields}
            />
          );
        })()}

      </div>
    </>
  );
}

function maskSecret(v: string | undefined): string {
  if (!v) return "Missing";
  return "Configured ✓";
}
