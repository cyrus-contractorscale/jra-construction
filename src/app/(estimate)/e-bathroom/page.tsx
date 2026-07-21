import { SurveyLandingPage } from "../_shared/SurveyLandingPage";


export const metadata = {
  title: { absolute: "Bathroom Renovation Cost Calculator | Instant Online Estimate" },
  robots: { index: false, follow: false },
};

const faqs = [
  {
    q: "How accurate is the bathroom renovation estimate?",
    a: "Our estimate gives you a realistic price range based on your bathroom size, scope, and finish level. It is a budgeting guide before committing to a formal quote.",
  },
  {
    q: "How long does a bathroom renovation take?",
    a: "Most bathroom renovations take 2 to 4 weeks once work begins. The full timeline including design, consent if needed, and material lead times is typically 6 to 8 weeks.",
  },
  {
    q: "Do I need consent for a bathroom renovation?",
    a: "If plumbing is being relocated or the layout changed significantly, consent may be required. Like-for-like replacements typically do not need consent. We advise you during consultation.",
  },
  {
    q: "Can I use my bathroom during the renovation?",
    a: "The bathroom being renovated will be out of use during the build. We recommend having at least one other bathroom available. We work quickly to minimise the disruption period.",
  },
  {
    q: "Do you handle waterproofing and tiling?",
    a: "Yes — all waterproofing, tiling, fixtures, and fittings are managed by JRA Construction. We use certified waterproofing systems that meet NZ building code requirements.",
  },
  {
    q: "What happens after I submit the form?",
    a: "Joe or a team member will reach out within one business day to discuss your bathroom project and arrange a free consultation.",
  },
];

export default function EBathroomPage() {
  return <SurveyLandingPage projectType="bathroomRenovation" faqs={faqs} />;
}
