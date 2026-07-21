import { SurveyLandingPage } from "../_shared/SurveyLandingPage";


export const metadata = {
  title: { absolute: "Kitchen Renovation Cost Calculator | Instant Online Estimate" },
  robots: { index: false, follow: false },
};

const faqs = [
  {
    q: "How accurate is the kitchen renovation estimate?",
    a: "Our estimate gives you a realistic price range based on your kitchen size, scope, and finish level. It is a budgeting guide before committing to a formal quote.",
  },
  {
    q: "How long does a kitchen renovation take?",
    a: "Most kitchen renovations take 3 to 6 weeks once work begins. The full timeline from consultation to completion is typically 6 to 10 weeks including design and lead times.",
  },
  {
    q: "Do I need consent for a kitchen renovation?",
    a: "If you are relocating plumbing or making structural changes, consent may be required. Cosmetic renovations (cabinetry, benchtops, appliances) generally do not need consent.",
  },
  {
    q: "Can I use my kitchen during the renovation?",
    a: "The kitchen will be non-functional during the build phase. We work efficiently to minimise downtime and keep the rest of your home clean and accessible.",
  },
  {
    q: "Do you supply cabinetry and benchtops?",
    a: "Yes — we work with trusted local suppliers and can manage the full supply and installation of cabinetry, benchtops, splashbacks, and appliances.",
  },
  {
    q: "What happens after I submit the form?",
    a: "Joe or a team member will reach out within one business day to discuss your kitchen project and arrange a free consultation.",
  },
];

export default function EKitchenPage() {
  return <SurveyLandingPage projectType="kitchenRenovation" faqs={faqs} />;
}
