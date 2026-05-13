import type { Metadata } from "next";
import FamsentrySiteShell from "@/app/components/famsentry/famsentry-site-shell";
import FeaturesPage from "@/app/components/famsentry/features-page";

// Force static generation — RSC payload is built once at deploy time,
// not recomputed on every browser prefetch request.
export const dynamic = "force-static";
export const revalidate = 86400; // re-generate at most once per day

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
