import type { Metadata } from "next";
import FamsentrySiteShell from "@/app/components/famsentry/famsentry-site-shell";
import ComparisonPage from "@/app/components/famsentry/comparison-page";

export const metadata: Metadata = {
  title: "FamSentry Compare",
  description:
    "Compare FamSentry with Life360, Google Maps, and Find My across privacy and safety features.",
};

export default function CompareRoute() {
  return (
    <FamsentrySiteShell>
      <ComparisonPage />
    </FamsentrySiteShell>
  );
}
