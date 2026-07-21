import { SurveyLandingPage } from "../_shared/SurveyLandingPage";


export const metadata = {
  title: { absolute: "Custom Home Auckland | Instant Online Estimate" },
  robots: { index: false, follow: false },
};

const faqs = [
  {
    q: "How accurate is the online estimate?",
    a: "Our estimate gives you a realistic ballpark range based on your project details, finish level, and current market pricing in Auckland. It is designed to help you budget confidently before committing to a formal quote.",
  },
  {
    q: "How long does a custom home build take?",
    a: "Most custom home builds take between 12 and 24 months from consent to completion, depending on complexity, size, and site conditions. We will give you a detailed programme once we have reviewed your plans.",
  },
  {
    q: "Do I need plans before I can get an estimate?",
    a: "No — you can complete the estimate form with just a general idea of what you want. If you have plans, that helps us narrow the range further.",
  },
  {
    q: "What areas do you build in?",
    a: "We primarily build across the Auckland region. Contact us to confirm your specific location.",
  },
  {
    q: "What happens after I submit the form?",
    a: "Joe or a member of the team will reach out within one business day to discuss your project, answer any questions, and arrange a free consultation if you are ready to move forward.",
  },
  {
    q: "Are you a licensed building practitioner?",
    a: "Yes. Joe Allen leads JRA Construction, a licensed and certified builder. We are proud members of Registered Master Builders, New Zealand Certified Builders, and Licensed Building Practitioners.",
  },
];

export default function EHomePage() {
  return <SurveyLandingPage projectType="customHome" faqs={faqs} />;
}
