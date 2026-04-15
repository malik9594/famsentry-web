import type { Metadata } from "next";
import FamsentrySiteShell from "@/app/components/famsentry/famsentry-site-shell";
import FeaturesPage from "@/app/components/famsentry/features-page";

export const metadata: Metadata = {
  title: "FamSentry Features",
  description:
    "Explore FamSentry's privacy-first tracking, alerts, geofencing, and family safety features.",
};

export default function FeaturesRoute() {
  return (
    <FamsentrySiteShell>
      <FeaturesPage />
    </FamsentrySiteShell>
  );
}
