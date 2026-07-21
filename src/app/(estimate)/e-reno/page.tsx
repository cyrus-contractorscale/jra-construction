import { SurveyLandingPage } from "../_shared/SurveyLandingPage";


export const metadata = {
  title: "Home Renovation Estimate | JRA Construction",
  robots: { index: false, follow: false },
};

const faqs = [
  {
    q: "How accurate is the renovation estimate?",
    a: "Our estimate gives you a realistic price range based on your renovation scope, finish level, and current Auckland market rates. It is a budgeting guide before you commit to a formal quote.",
  },
  {
    q: "Do I need council consent for a renovation?",
    a: "It depends on the scope. Structural changes, additions, and plumbing or electrical alterations typically require consent. We advise you on exactly what is needed during consultation.",
  },
  {
    q: "How long does a home renovation take?",
    a: "A full home renovation typically takes 3 to 9 months depending on scope and complexity. Partial renovations can be completed in 6 to 12 weeks. We provide a full programme at proposal stage.",
  },
  {
    q: "Can I stay in my home during the renovation?",
    a: "For partial renovations, often yes. For full home renovations we usually recommend temporary alternative accommodation. We plan the build sequence to minimise disruption either way.",
  },
  {
    q: "Do you handle structural changes like removing walls?",
    a: "Yes — we manage all structural work including wall removals, beam installations, and floor reinforcement. All structural work is done under LBP supervision.",
  },
  {
    q: "What happens after I submit the form?",
    a: "Joe or a team member will reach out within one business day to discuss your renovation and arrange a free on-site consultation.",
  },
];

export default function ERenovationPage() {
  return <SurveyLandingPage projectType="homeRenovation" faqs={faqs} />;
}
