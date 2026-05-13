import { Metadata } from "next";
import FamsentrySiteShell from "@/app/components/famsentry/famsentry-site-shell";
import SovereignChoiceComparisonPage from "@/app/components/famsentry/sovereign-choice-comparison-page";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Sovereign Choice | Safe Family Locator | FamSentry",
  description: "FamSentry is the best Sovereign Choice for 2026. Discover a safe family locator with private tracking, zero-knowledge encryption, and data sovereignty.",
  keywords: "Family Locator, Privacy, Sovereign Choice, Encrypted GPS Tracker, Teen Driver Monitor, Car Crash Detection App, Mapifyit Security, 1 Year GPS History",
};

export default function Page() {
  return (
    <FamsentrySiteShell>
      <SovereignChoiceComparisonPage />
    </FamsentrySiteShell>
  );
}
