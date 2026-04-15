import type { Metadata } from "next";
import FamsentrySiteShell from "@/app/components/famsentry/famsentry-site-shell";
import FAQPage from "@/app/components/famsentry/faq-page";

export const metadata: Metadata = {
  title: "FamSentry FAQ",
  description:
    "Read answers to common questions about FamSentry's privacy, tracking, and family safety platform.",
};

export default function FAQRoute() {
  return (
    <FamsentrySiteShell>
      <FAQPage />
    </FamsentrySiteShell>
  );
}
