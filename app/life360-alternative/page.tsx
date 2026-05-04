import { Metadata } from "next";
import FamsentrySiteShell from "@/app/components/famsentry/famsentry-site-shell";
import Life360AlternativePage from "@/app/components/famsentry/life360-alternative-page";

export const metadata: Metadata = {
  title: "Life360 Alternative | Safe Family Locator | FamSentry",
  description: "FamSentry is the best Life360 alternative for 2026. Discover a safe family locator with private tracking, zero-knowledge encryption, and data sovereignty.",
  keywords: "Family Locator, Privacy, Life360 Alternative, Encrypted GPS Tracker, Teen Driver Monitor, Car Crash Detection App, Mapifyit Security, 1 Year GPS History",
};

export default function Page() {
  return (
    <FamsentrySiteShell>
      <Life360AlternativePage />
    </FamsentrySiteShell>
  );
}
