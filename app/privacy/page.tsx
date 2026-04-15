import type { Metadata } from "next";
import FamsentrySiteShell from "@/app/components/famsentry/famsentry-site-shell";
import PrivacyPage from "@/app/components/famsentry/privacy-page";

export const metadata: Metadata = {
  title: "FamSentry Privacy",
  description:
    "Learn how FamSentry protects family location data with a privacy-first architecture.",
};

export default function PrivacyRoute() {
  return (
    <FamsentrySiteShell>
      <PrivacyPage />
    </FamsentrySiteShell>
  );
}
