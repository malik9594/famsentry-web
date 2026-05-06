import type { Metadata } from "next";
import FamsentrySiteShell from "@/app/components/famsentry/famsentry-site-shell";
import PricingPage from "@/app/components/famsentry/pricing-page";

export const metadata: Metadata = {
  title: "Pricing | FamSentry Plans",
  description:
    "Choose the right FamSentry plan for your family. Transparent pricing, no data selling, and absolute peace of mind.",
};

export default function PricingRoute() {
  return (
    <FamsentrySiteShell>
      <PricingPage />
    </FamsentrySiteShell>
  );
}
