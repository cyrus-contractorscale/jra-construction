import { ConsultContent } from "@/components/consult/ConsultContent";
import { getSiteConfig } from "@/lib/config";

// Must be dynamic + edge so KV is read per-request (not baked in at build time)
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Free Builder Consult | Save Tens of Thousands",
};

export default async function ConsultPage() {
  const site = await getSiteConfig();
  return (
    <main>
      <ConsultContent site={site} />
    </main>
  );
}
