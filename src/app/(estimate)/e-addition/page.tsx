import { SurveyLandingPage } from "../_shared/SurveyLandingPage";


export const metadata = {
  title: { absolute: "House Addition Cost Calculator Auckland | Instant Online Estimate" },
  robots: { index: false, follow: false },
};

const faqs = [
  {
    q: "How accurate is the home extension estimate?",
    a: "Our estimate gives you a realistic price range based on your extension type, size, finish level, and current Auckland market rates. It is a budgeting guide before you commit to a formal quote.",
  },
  {
    q: "Do I need council consent for a home extension?",
    a: "Most home extensions require building consent. We manage the full consent process for you, from preparation through to approval before any work begins.",
  },
  {
    q: "How long does a home extension take?",
    a: "Depending on the size and complexity, a home extension typically takes 3 to 6 months from consent to completion. We provide a detailed programme at the proposal stage.",
  },
  {
    q: "Can I live in my home during the extension?",
    a: "In most cases yes — we design the build sequence to minimise disruption. For larger or more complex extensions we will advise on the best approach during the consultation.",
  },
  {
    q: "Do I need an architect or designer?",
    a: "For consented extensions, yes — architectural drawings are required. We can connect you with trusted local architects if you do not already have one.",
  },
  {
    q: "What happens after I submit the form?",
    a: "Joe or a team member will reach out within one business day to discuss your extension plans and arrange a free on-site consultation.",
  },
];

export default function EAdditionPage() {
  return <SurveyLandingPage projectType="homeExtension" faqs={faqs} />;
}
